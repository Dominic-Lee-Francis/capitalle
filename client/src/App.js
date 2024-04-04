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

  const [users, setUsers] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={users} />
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
                  element={<Home country={countries} user={users} />}
                />
                <Route
                  path="/login"
                  element={users ? <Navigate to="/" /> : <Login />}
                />
                <Route
                  path="/register"
                  element={users ? <Navigate to="/" /> : <Register />}
                />
                <Route
                  path="/statistics"
                  element={<Statistics user={users} />}
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
