import React from "react";
import styled from "styled-components";
import { Route, Switch, Link } from "react-router-dom";
import About from "./components/About";
import Traduir from "./components/traduire-page/traduire";
import HomePage from "./components/homepage";

const ContainerStyled = styled.div`
  background-color: black;
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const EgyptStyled = styled.img``;

const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  img {
    width: 150px;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Right = styled.div`
  width: 85%;
`;

function App() {
  return (
    <ContainerStyled>
      <MenuStyled>
        <Link to="/">
          <img src="/images/logo.png" alt="egypt" />
        </Link>

        <List>
          <Link to="/traduire">Hieroglyphe</Link>
          <Link to="">Carte</Link>
          <Link to="">Pyramides</Link>
          <Link to="/about">Qui sommes nous ?</Link>
        </List>
      </MenuStyled>
      <Right>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/traduire" component={Traduir} />
        </Switch>
      </Right>
    </ContainerStyled>
  );
}

export default App;
