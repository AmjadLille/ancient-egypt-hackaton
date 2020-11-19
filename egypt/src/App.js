import React from "react";
import styled from "styled-components";
import { Route, Switch, Link } from "react-router-dom";
import About from "./components/About";
import Traduir from "./components/traduire-page/traduire";
import HomePage from "./components/homepage";

const ContainerStyled = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  background-color: rgba(0, 0, 0, 0.4);
  img {
    width: 100%;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 100px;
  height: 30%;

  a {
    text-decoration: none;
    color: white;
    font-size: 24px;
    padding: 150px auto;
  }
`;

const Right = styled.div`
  width: 85%;
`;

function App() {
  return (
    <ContainerStyled>
      <MenuStyled>
        <Link to="/" style={{ padding: "50px auto" }}>
          <img src="/images/old.jpg" alt="egypt" />
        </Link>

        <List>
          <Link to="">
            <a style={{ fontFamily: "'Big Shoulders Inline Text', cursive" }}>Carte</a>
          </Link>
          <Link to="">
            <a style={{ fontFamily: "'Big Shoulders Inline Text', cursive" }}>Pyramides</a>
          </Link>
          <Link to="/traduire">
            <a style={{ fontFamily: "'Big Shoulders Inline Text', cursive" }}>Hieroglyphe</a>
          </Link>
          <Link to="/about">
            <a style={{ fontFamily: "'Big Shoulders Inline Text', cursive" }}>Qui sommes nous ?</a>
          </Link>
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
