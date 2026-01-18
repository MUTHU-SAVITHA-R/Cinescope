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
      <h2>CineScope</h2>
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
