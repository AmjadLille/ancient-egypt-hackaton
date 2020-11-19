import React from "react";
import { Title, Container, Label, Text, Result, Trad, Header } from "./traduire.style";

class Traduire extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      trad: [],
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const word = this.state.text
      .toUpperCase()
      .replace(/[^a-zA-Z]+/g, "")
      .split("")
      .filter(Boolean);
    this.setState({ trad: word });
    console.log(this.state.trad);
    this.setState({ text: "" });
  };

  render() {
    const { text, trad } = this.state;
    return (
      <Container>
        <Header>
          <img src="/images/eye.gif" alt="eye" />
          <Title style={{ fontFamily: "'Big Shoulders Inline Text', cursive" }}>See your Words as written in Egyptian Hieroglyphics </Title>
          <img src="/images/eye.gif" alt="eye" />
        </Header>
        <Label style={{ fontFamily: "'Big Shoulders Inline Text', cursive" }}>Transfer English to hieroglyphics</Label>
        <Trad>
          <form onSubmit={this.handleSubmit}>
            <Text value={text} onChange={this.handleChange} rows={5} cols={50} />
            <input type="submit" value="Translate" style={{ marginTop: "15px", height: "3vh", fontSize: "18px" }} />
          </form>
        </Trad>

        <Result>
          {trad.map((num) => (
            <img src={`/images/${num}.jpg`} alt="icon" />
          ))}
        </Result>
        <img src="/images/egyptloop.gif" alt="" style={{ marginTop: "4vh" }} />
      </Container>
    );
  }
}

export default Traduire;
