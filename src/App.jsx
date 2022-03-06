import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import searchIcon from "./search.svg";

const App = () => {
  const API_URL="http://www.omdbapi.com?apikey=6479e7b1"
  const [movies, setMovies] = useState([]);
  const [searchKey,setSearchKey] = useState("");
  useEffect(() => {
    searchMovies("Batman");
  }, []); 
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  return (
    <div className="app">
      <h1>MovieBase</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={searchKey}
          onChange={(e) => {
            setSearchKey(e.target.value)
          }}
        />
        <img 
        src={searchIcon} 
        alt="search" 
        onClick={() => {searchMovies(searchKey)}} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie}key ={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
