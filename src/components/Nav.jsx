import React from "react";
import styled from "styled-components";
import logo from "../img/logoo.svg";
import Search from "./Search";
import { Link } from "react-router-dom";
const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-header);
  padding: 10px;
`;
const LogoInfo = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;
const Title = styled.h1`
  color: #ffff;
`;
const Logo = styled.img`
  max-width: 50px;
  margin: 0 0 0 10px;
`;

const Nav = ({ func }) => {
  return (
    <ContainerHeader>
      <LogoInfo>
        <Link to="/">
          <Title>AnimeList</Title>
        </Link>
        <Logo src={logo} alt="logo" />
      </LogoInfo>
      <Search funcSearch={func} />
    </ContainerHeader>
  );
};

export default Nav;
