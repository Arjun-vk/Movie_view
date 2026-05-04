import React from "react";
import MovieCard from "../components/MovieCard";

const Home = ({
  movies,
  query,
  setQuery,
  searchMovies,
  favorites,
  addFavorite,
  removeFavorite,
  hasSearched,
  showFavorites,
  setShowFavorites,
}) => {
  return (
    <div className="container">
      
      {/* NAVBAR */}
      <div className="navbar">
        🎬 Movie Explorer

        <button className="btn-fav"
          style={{ float: "right" }}
          onClick={() => setShowFavorites(!showFavorites)}
        >
          {showFavorites ? "Home" : "Favorites"}
        </button>
      </div>

      {/* SEARCH */}
      <div className="search-box">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button onClick={searchMovies}>Search</button>
      </div>

      {/* MAIN LOGIC */}
      {showFavorites ? (
        <>
          <h2 className="section-title">Favorites</h2>

          {favorites.length === 0 ? (
            <p style={{ textAlign: "center" }}>
              No favorites yet ❤️
            </p>
          ) : (
            <div className="grid">
              {favorites.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                  removeFavorite={removeFavorite}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          {hasSearched && (
            <h2 className="section-title">Search Results</h2>
          )}

          {!hasSearched ? (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/744/744922.png"
                width="120"
                alt="welcome"
              />
              <h2>Search for your favorite movies 🎬</h2>
              <p>Type something and click search</p>
            </div>
          ) : movies.length === 0 ? (
            <p style={{ textAlign: "center" }}>
              No movies found 😢
            </p>
          ) : (
            <div className="grid">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                  addFavorite={addFavorite}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;