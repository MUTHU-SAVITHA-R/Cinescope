import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar({ onSearch, onLogout }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); 
  };

  return (
    <div className="top">
      <div className="title-box">
          <img
            src="/cinescope.png"
            alt="CineScope Logo"
            className="logo"
          />
          <h1>CineScope</h1>
        </div>
      <div className="search-movies">
      <input
        className="ip"
        placeholder="Search movies"
        value={query}
        onChange={handleChange}
      />
      </div>

      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
