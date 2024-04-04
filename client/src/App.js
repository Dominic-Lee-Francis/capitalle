// CSS
import "./App.css";
// Components
import Navbar from "./Components/Navbar";
// Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Statistics from "./Pages/Statistics";
import Rules from "./Pages/Rules";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
// React
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
// Loader
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
// axios
import axios from "axios";
// jwt-decode
import jwt_decode from "jwt-decode";

const BASE_URL = "http://localhost:8080";

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/capital`);
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const countries = await response.json();
        setCountries(countries);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, []);

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the user data from the server
    const getUser = async () => {
      axios
        .get("http://localhost:8080/auth/login/success", {
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status === 200) return response.data;
          throw new Error("Failed to authenticate user");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUser();
  }, []);

  const BASE_API_URL = "http://localhost:8080/api/";

  const refreshToken = async () => {
    try {
      const response = await axios.post(`${BASE_API_URL}refresh`, {
        token: user.refreshToken,
      });
      setUser({
        ...user,
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date();
      const decodedToken = jwt_decode(user.accessToken);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const data = await refreshToken();
        config.headers["authorization"] = `Bearer ${data.accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // useEffect(() => {
  //   const checkUserAuthentication = async () => {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       try {
  //         const response = await fetch(`${BASE_URL}/api/users/`, {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });
  //         if (!response.ok) {
  //           throw new Error("Failed to authenticate user");
  //         }
  //         const user = await response.json();
  //         setUser(user);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   };
  //   checkUserAuthentication();
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} />
        <div className="loadingDiv">
          {isLoading ? (
            <ClimbingBoxLoader
              className="loader"
              color="green"
              loading={isLoading}
              size={50}
            />
          ) : (
            <>
              {error && <div className="error">{error}</div>}
              <Routes>
                <Route
                  path="/"
                  element={<Home country={countries} user={user} />}
                />
                <Route
                  path="/login"
                  element={user ? <Navigate to="/" /> : <Login />}
                />
                <Route
                  path="/register"
                  element={user ? <Navigate to="/" /> : <Register />}
                />
                <Route
                  path="/statistics"
                  element={<Statistics user={user} />}
                />
                <Route path="/rules" element={<Rules />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
