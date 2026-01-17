import React from "react";
import "./Navbar.css";
export default function Navbar({ onSearch, onLogout }) {
  return (
    <div className="top">
      <h2>CineScope</h2>

      <form onSubmit={onSearch} className="search-movies">
        <input
          className="ip"
          placeholder="Search movies"
          required
        />
        <button className="search">🔍</button>
      </form>

      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
