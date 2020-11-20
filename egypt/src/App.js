import React from "react";
import styled from "styled-components";
import { Route, Switch, Link } from "react-router-dom";
import About from "./components/About";
import Traduire from "./components/traduire-page/traduire";
import HomePage from "./components/homepage";
import Maps from "./components/Maps/Maps";
import Dieu from "./components/Dieu";
import Carte from './components/Carte';

const ContainerStyled = styled.div`
  background-color: black;
  width: 99vw;
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
  max-height: 30vh;
  align-items: center;
  padding-top: 100px;
  height: 30%;
  max-height: 30vh;

  a {
    text-decoration: none;
    color: white;
    font-size: 24px;
    padding: 150px auto;
    &:hover {
      color: #ffd700;
    }
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

          <Link to="/Maps">
            <a style={{ fontFamily: "'Big Shoulders Inline Text', cursive" }}>
              Monuments
            </a>
          </Link>
          <Link to="/traduire">
            <a style={{ fontFamily: "'Big Shoulders Inline Text', cursive" }}>
              Hieroglyphe
            </a>
          </Link>
          <Link to="/Dieu">
            <a style={{ fontFamily: "'Big Shoulders Inline Text', cursive" }}>
              Gods of Egypt</a>
          </Link>
          <Link to="/Carte">
            <a style={{ fontFamily: "'Big Shoulders Inline Text', cursive" }}>Chariotry race</a>
          </Link>
          <Link to="/about">
            <a style={{ fontFamily: "'Big Shoulders Inline Text', cursive" }}>
              Who are we ?
            </a>
          </Link>
        </List>
      </MenuStyled>
      <Right>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/traduire" component={Traduire} />
          <Route path="/Maps" component={Maps} />
          <Route path="/Dieu" component={Dieu} />
          <Route path="/Carte" component={Carte} />
        </Switch>
      </Right>
    </ContainerStyled>
  );
}

export default App;
