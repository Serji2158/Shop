import React from "react";
import data from "../../data";

const PhoneList = () => {
  return (
    <ul>
      {data.phones.map((phone) => (
        <li key={phone.id}>
          <h2>{phone.name}</h2>
          <img src={phone.image} alt={phone.name} />
          <p>{phone.discription}</p>
        </li>
      ))}
    </ul>
  );
};

export default PhoneList;
