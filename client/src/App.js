import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Statistics from "./Pages/Statistics";
import Rules from "./Pages/Rules";
import Contact from "./Pages/Contact";
import PleaseLogin from "./Pages/PleaseLogin";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = false;

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
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
