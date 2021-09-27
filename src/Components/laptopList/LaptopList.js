import React from "react";
// import laptops from "../../data/laptops.json";
import LaptopListItem from "./laptopListItem/LaptopListItem";

const LaptopList = ({ laptops, addToCart }) => {
  return (
    <ul>
      {laptops.map((laptop) => (
        <LaptopListItem laptop={laptop} key={laptop.id} addToCart={addToCart} />
      ))}
    </ul>
  );
};

export default LaptopList;
