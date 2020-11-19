import React from "react";

const Txt = (props) => {
  return props.text
    .toUpperCase()
    .replace(/\//g, "")
    .split(/((?!^)\{.*?\})/)
    .filter(Boolean)
    .map((num) => <img src={`/images/${num}.jpg`} alt="icon" />);
};
export default Txt;
