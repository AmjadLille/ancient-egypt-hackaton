import React from "react";
import styled from "styled-components";
import egypt from "./images/egypt.jpg";
import image from "./images/image.png";
import { Route, Switch, Link } from "react-router-dom";
import About from "./components/About";

const ContainerStyled = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
`;

const LogoStyled = styled.img`
  padding-bottom: 0px;
  width: 300px;
`;

const EgyptStyled = styled.img`
  margin-left: 300px;
  margin-top: -800px;
  height: 800px;
`;

const MenuStyled = styled.div`
  margin: 0px;
`;

const LiStyled = styled.li`
  list-style: none;
  background-repeat: no-repeat;
  background-position: left center;
  padding: 50px;
  padding-left: 20px;
  font-size: 20px;
`;

const SpanStyled = styled.span`
  color: white;
  text-decoration: none;
`;

function App() {
  return (
    <ContainerStyled>
      <LogoStyled src={image} alt="ancientegypt" />
      <MenuStyled>
        <ul>
          <LiStyled>
            <a href="">
              <SpanStyled>Hieroglyphe</SpanStyled>
            </a>
          </LiStyled>
          <LiStyled>
            <a href="">
              <SpanStyled>Carte</SpanStyled>
            </a>
          </LiStyled>
          <LiStyled>
            <a href="">
              <SpanStyled>Pyramides</SpanStyled>
            </a>
          </LiStyled>
          <LiStyled>
            <Link to="/about">
              <SpanStyled>Qui sommes nous ?</SpanStyled>
            </Link>
          </LiStyled>
        </ul>
      </MenuStyled>
      <Switch>
        <Route exact path="/about" component={About}></Route>
      </Switch>

      <EgyptStyled src={egypt} alt="egypt" />
    </ContainerStyled>
  );
}

export default App;
