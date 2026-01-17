import React from "react";
import { IMG_URL } from "../services/tmdb.js";
import "./MovieModal.css";
export default function MovieModal({ movie, onClose, onTrailer }) {
  if (!movie) return null;

  return (
    <div className="movies">
      <button className="ref" onClick={onClose}>✖</button>

      <div className="image">
        <img src={IMG_URL + movie.poster_path} alt={movie.title} />
      </div>

      <div className="content">
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
        <p>{movie.overview}</p>

        <button onClick={() => onTrailer(movie.id)}>
          ▶ Watch Trailer
        </button>
      </div>
    </div>
  );
}
