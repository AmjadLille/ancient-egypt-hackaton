import React from "react";

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
    const word = this.state.text.toUpperCase().replace(/\//g, "").split("").filter(Boolean);
    this.setState({ trad: word });
    console.log(this.state.trad);
    this.setState({ text: "" });
  };

  render() {
    const { text, trad } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Traduire ENG to hieroglyphics
            <textarea value={text} onChange={this.handleChange} rows={5} cols={50} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {trad.map((num) => (typeof num == "string" ? <img src={`/images/${num}.jpg`} alt="icon" /> : null))}
      </div>
    );
  }
}

export default Traduire;
