import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handleToggleSoldOut }) {

  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} handleToggleSoldOut={handleToggleSoldOut}/>
      ))}
    </ul>
  );
}

export default PlantList;


