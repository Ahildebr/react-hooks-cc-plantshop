import React, { useState } from "react";
//import PlantList from "./PlantList"



function Search({ searchInput, onSearchInputChange }) {
  const handleChange = (event) => {
    onSearchInputChange(event.target.value)
    console.log("Searching...")}
  
    return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchInput}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
