import React from "react";
import data from "../../../data";
import { HeaderListContainer } from "./HeaderListStyled";

const HeaderList = () => {
  return (
    <HeaderListContainer>
      <ul className="headerList">
        {data.header.map((el) => {
          return (
            <li className="headerListItem" key={el}>
              {el}
            </li>
          );
        })}
      </ul>
    </HeaderListContainer>
  );
};

export default HeaderList;
