import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const HEADER = ["year", "month", "week", "day"];

function Header() {
  return (
    <HeaderContainer>
      {HEADER.map((el, i) => {
        return (
          <NavButton to={`/${el}`} key={i}>
            {el}
          </NavButton>
        );
      })}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  width: 100%;
`;

const NavButton = styled(Link)`
  text-decoration: none;
  color: #000000;
  padding: 8px;
  border-radius: 8px;

  &:hover {
    background: #e2e2e2;
  }
`;
