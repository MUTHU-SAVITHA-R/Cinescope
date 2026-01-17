const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return res.json();
};

export const getAnimatedMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}`
  );
  return res.json();
};
export const getMovieTrailer = async (movieId) => {
  const res = await fetch(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
  );
  const data = await res.json();

  return data.results.find(
    video => video.type === "Trailer" && video.site === "YouTube"
  );
};

export const IMG_URL = "https://image.tmdb.org/t/p/w500";
