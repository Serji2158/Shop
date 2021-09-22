import React from "react";
import data from "../../../data";

const HeaderList = () => {
  return (
    <nav>
      <ul>
        {data.header.map((el) => {
          return <li key={el}>{el}</li>;
        })}
      </ul>
    </nav>
  );
};

export default HeaderList;
