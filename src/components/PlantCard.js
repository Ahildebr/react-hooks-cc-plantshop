import React from "react";

function PlantCard({ plant, handleToggleSoldOut }) {
  const handleToggle = () => {
    handleToggleSoldOut(plant.id);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <p>Status: {plant.soldOut ? "Sold Out" : "Available"}</p>
      <button onClick={handleToggle}>
  {plant.soldOut ? "Out of Stock" : "In Stock"}
</button>

    </li>
  );
}
  
  

export default PlantCard;
