import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, onAddPlant, handleToggleSoldOut}) {
  const [searchInput, setSearchInput] = useState("")


  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchInput.toLowerCase())
  );

 
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      {/* Pass searchInput and setSearchInput to Search */}
      <Search searchInput={searchInput} onSearchInputChange={setSearchInput} />
      {/* Use filteredPlants to ensure filtering works */}
      <PlantList 
        plants={filteredPlants} // Pass filtered list
        handleToggleSoldOut={handleToggleSoldOut} 
      />
    </main>
  );
}

export default PlantPage;
