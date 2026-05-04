import {Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";


import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] =useState(false);
  const [movies, setMovies] = useState([]);
  const [showFavorites, setShowFavorites] =useState(false);
  const [favorites, setFavorites] =useState(() =>{
    const saved =localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const searchMovies = async () => {
    // Vite uses import.meta.env to access variables
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`,
    );
    const data = await res.json();
    console.log(data);

    setMovies(data.Search ? data.Search : []);
    setHasSearched(true);
  };

  const addFavorite = (movie) =>{
    alert('Added to favorites')
    const alreadyAdded =favorites.find(
      (fav) => fav.imdbID === movie.imdbID
    );
    
    if (!alreadyAdded){
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite =(movie) =>{
    alert('Removed from favorites')
    const updated =favorites.filter(
      (fav) => fav.imdbID !== movie.imdbID
    );
    setFavorites(updated)
  }

  useEffect(() =>{
    localStorage.setItem("favorites",JSON.stringify(favorites));
  },[favorites]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            movies={movies}
            query={query}
            setQuery={setQuery}
            searchMovies={searchMovies}
            favorites={favorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            hasSearched={hasSearched}
            showFavorites={showFavorites}
            setShowFavorites={setShowFavorites}
          />
        }
      />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;
