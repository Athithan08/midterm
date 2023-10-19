import React, { useState } from "react";

export default function Addproduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: "",

  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Description: ${formData.description}, Category: ${formData.category} Quantity: ${formData.quantity},  Price: ${formData.price}, `
    

      );
  };

  return (
    <form onSubmit={handleSubmit} className="Addproduct">
      
      
      
      
      
      <label className="addproduct__text" htmlFor="name">
        Name:
      </label>
      <input
        type="text"
        id="name"
        className="addproduct__input"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
<br />
<label className="addproduct__text" htmlFor="description">
        Description:
      </label>
      <input
        type="text"
        id="description"
        className="addproduct__input"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
<br />
<label className="addproduct__text" htmlFor="category">
        category:
      </label>
      <input
        type="text"
        id="category"
        className="addproduct__input"
        name="category"
        value={formData.category}
        onChange={handleChange}
      />
<br />
<label className="addproduct__text" htmlFor="quantity">
        quantity:
      </label>
      <input
        type="text"
        id="quantity"
        className="addproduct__input"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
      />
<br />
<label className="addproduct__text" htmlFor="price">
        price:
      </label>
      <input
        type="text"
        id="price"
        className="addproduct__input"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />

<br />

      <button className="addproduct__button" type="submit">
        Submit
      </button>

      <button className="addproduct__button" type="cancel">
        Cancel
      </button>

    </form>
  );
}
