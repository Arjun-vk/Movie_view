import noImage from "../assets/noImage.png";
import { Link } from "react-router-dom";

function MovieCard({ movie, addFavorite, removeFavorite }) {
  return (
    <div className="card">
      <Link to={`/movie/${movie.imdbID}`}>
        <img
          src={movie.Poster}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = noImage;
          }}
        />
      </Link>

      <div className="card-content">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>

      <div className="card-buttons">
        {addFavorite && (
          <button
            className="add-btn"
            onClick={() => addFavorite(movie)}
          >
            Add
          </button>
        )}

        {removeFavorite && (
          <button
            className="remove-btn"
            onClick={() => removeFavorite(movie)}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}

export default MovieCard;