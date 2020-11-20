import React from "react";
import styled from "styled-components";
import { Route, Switch, Link } from "react-router-dom";
import About from "./components/About";
import Traduir from "./components/traduire-page/traduire";
import HomePage from "./components/homepage";
import Dieu from "./components/Dieu";

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
  max-height: 30vh;

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
          <Link to="/traduire">Hieroglyphe</Link>
          <Link to="">Carte</Link>
          <Link to="/Dieu">Gods of Egypt</Link>
          <Link to="/about">Qui sommes nous ?</Link>
        </List>
      </MenuStyled>
      <Right>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/traduire" component={Traduir} />
          <Route path="/Dieu" component={Dieu} />
        </Switch>
      </Right>
    </ContainerStyled>
  );
}

export default App;
