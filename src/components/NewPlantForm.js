import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      const newPlant = {
        name: formData.name,
        image: formData.image,
        price: formData.price,
      };
      onAddPlant(newPlant);
      setFormData({ name: "", image: "", price: "" });
    }
  

  return (
    <section className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Plant</button>
      </form>
    </section>
  );
}

export default NewPlantForm;

