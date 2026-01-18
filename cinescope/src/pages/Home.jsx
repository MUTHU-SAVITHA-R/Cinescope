import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import TrailerModal from "../components/TrailerModal";
import { getMovies, searchMovies, getMovieTrailer } from "../services/tmdb.js";
import { useNavigate } from "react-router-dom";
import "./Home.css";
export default function Home({ setIsLoggedIn }) {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(null);
  const [trailer, setTrailer] = useState(null);

  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies()
      .then(data => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  const handleSearch = async (e) => {
    e.preventDefault();
    const query = e.target[0].value;
    const data = await searchMovies(query);
    setMovies(data.results);
  };

  const handleTrailer = async (movieId) => {
    const video = await getMovieTrailer(movieId);
    if (video) {
      setTrailer(video.key);
    } else {
      alert("Trailer not available");
    }
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="home-page">
      <Navbar
        onSearch={handleSearch}
        user={userEmail}
        onLogout={logout}
      />

      <div id="boxes">
        {loading ? (
          <p style={{ color: "#555", textAlign: "center" }}>Loading movies...</p>
        ) : movies.length === 0 ? (
          <p style={{ color: "#555", textAlign: "center" }}>No movies found.</p>
        ) : (
          movies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onSelect={setSelected}
            />
          ))
        )}
      </div>


      {selected && (
        <MovieModal
          movie={selected}
          onClose={() => setSelected(null)}
          onTrailer={handleTrailer}
        />
      )}


      {trailer && (
        <TrailerModal
          trailerKey={trailer}
          onClose={() => setTrailer(null)}
        />
      )}

    </div>
  );

}
