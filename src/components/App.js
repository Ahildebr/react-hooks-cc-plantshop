import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);

  const handleAddPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((addedPlant) => {
        setPlants((prevPlants) => [...prevPlants, addedPlant]);
      });
  };

  // Fetch all plants when the app starts
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
      
  }, []);


  const handleToggleSoldOut = (id) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) => {
        if (plant.id === id) {
          return { ...plant, soldOut: !plant.soldOut };
        } else {
          return plant;
        }
      })
    );
  };
  

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} onAddPlant={handleAddPlant} handleToggleSoldOut={handleToggleSoldOut}/>
    </div>
  );
}

export default App;
