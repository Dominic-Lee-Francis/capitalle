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
import PleaseLogin from "./Pages/PleaseLogin";
// React
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
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

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/statistics"
            element={user ? <Statistics /> : <Navigate to="/pleaseLogin" />}
          />
          <Route path="/rules" element={<Rules />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pleaseLogin" element={<PleaseLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
