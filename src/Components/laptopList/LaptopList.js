import React from "react";
import laptops from "../../data/laptops.json";
import LaptopListItem from "./laptopListItem/LaptopListItem";

const LaptopList = () => {
  return (
    <ul>
      {laptops.map((laptop) => (
        <LaptopListItem laptop={laptop} key={laptop.id} />
      ))}
    </ul>
  );
};

export default LaptopList;
