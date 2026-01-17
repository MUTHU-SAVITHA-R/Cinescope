import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  return (
    <Router>
      <Routes>

        {/* Intro page */}
        <Route path="/intro" element={<Intro />} />

        {/* Login */}
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        {/* Signup */}
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />

        {/* Home (Protected) */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/intro" />
            )
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
