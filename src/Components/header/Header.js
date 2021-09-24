import React from "react";
import HeaderList from "./headerList/HeaderList";
import { HeaderContainer } from "./HeaderStyled";
import sprite from "../../Icon/sprite.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <a className="headerLogo" href="/#">
        <svg className="headerLogoIcon">
          <use href={sprite + "#icon-home"} />
        </svg>
      </a>
      <HeaderList />
    </HeaderContainer>
  );
};

export default Header;
