import styled from "styled-components";

export const HeaderListContainer = styled.nav`
  .headerList {
    display: flex;
    align-items: center;
    list-style: none;
    color: white;
  }
  .headerListItem {
    text-transform: uppercase;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 20px;
    }
    &:hover {
      color: #819ff5;
    }
  }
`;
