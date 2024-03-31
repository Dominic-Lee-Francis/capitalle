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

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the user data from the server
    const getUser = async () => {
      fetch("http://localhost:8080/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("failed to authenticate user");
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

  console.log(user);

  const [country, setCountry] = useState(null);
  useEffect(() => {
    const getCountry = async () => {
      fetch("http://localhost:8080/capital", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("failed to authenticate user");
        })
        .then((resObject) => {
          setCountry(resObject);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getCountry();
  }, []); // Add an empty dependency array to run the effect only once
  console.log(country);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home country={country} />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
