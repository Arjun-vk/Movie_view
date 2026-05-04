import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import noImage from "../assets/noImage.png";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=5a1b89f7&i=${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;
  return (
    <div className="container">
  <h1>{movie.Title}</h1>

  <img
    src={movie.Poster}
    width="250"
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = noImage;
    }}
  />

  <p><b>Year:</b> {movie.Year}</p>
  <p><b>Genre:</b> {movie.Genre}</p>
  <p><b>Plot:</b> {movie.Plot}</p>
</div>
  );
}
