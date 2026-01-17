import React from "react";
import { IMG_URL } from "../services/tmdb.js";
import "./MovieCard.css";
export default function MovieCard({ movie, onSelect }) {
    return (
        <div className="box" onClick={() => onSelect(movie)}>
            <img
                src={IMG_URL + movie.poster_path}
                alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>⭐ {movie.vote_average}</p>
        </div>
    );
}
