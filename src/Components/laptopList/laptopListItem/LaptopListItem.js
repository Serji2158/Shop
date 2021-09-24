import React from "react";

const LaptopListItem = ({ laptop }) => {
  return (
    <li key={laptop.id}>
      <h2>{laptop.name}</h2>
      <img src={laptop.image} alt={laptop.name} />
      <p>
        Sale: {""}
        {laptop.isSale ? "Действует акционная цена" : "В акции не участвует"}
      </p>
      <p>{laptop.description}</p>
      <p>{laptop.isSale ? laptop.price * 0.8 : laptop.price}</p>
    </li>
  );
};

export default LaptopListItem;
