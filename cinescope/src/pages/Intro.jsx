import React from "react";
import { useNavigate } from "react-router-dom";
import "./Intro.css";

export default function Intro() {
  const navigate = useNavigate();

  const handleEnter = () => {
    
    navigate("/login"); 
  };

  return (
    <div className="intro">
      <div className="intro-overlay">
        <h1>CineScope</h1>
        <h4>Discover Movies. Watch Trailers. Explore Cinema.</h4>

        <button className="enter-btn" onClick={handleEnter}>
          Explore Movies 🎬
        </button>
      </div>
    </div>
  );
}
