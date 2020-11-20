import React from "react";
import mehen from "./images/mehen.jpg";
import danseuse from "./images/danseuse.jpg";
import jeudechien from "./images/jeudechien.jpg";

function Actualités() {
  return (
    <div>
      <ul>
        <li> le 1er jour du Thot</li>
        <img src={mehen} alt="jeumehen" />

        <li>le 16eme jour de Tybi</li>
        <img src={danseuse} alt="danseuse" />

        <li>le 4 jour du Pharmouthi</li>
        <img src={jeudechien} alt="jeudechien" />
      </ul>
    </div>
  );
}

export default Actualités;
