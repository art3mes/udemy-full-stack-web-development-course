// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "../src/practice";

const [honda, tesla] = cars;
// const [hondaTopColour, hondaBottomColour] = honda.coloursByPopularity;
// const [teslaTopColour, teslaBottomColour] = tesla.coloursByPopularity;
const {
  coloursByPopularity: [hondaTopColour, hondaBottomColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour, teslaBottomColour] //for arrays []
} = tesla;

// const { topSpeed: hondaTopSpeed, zeroToSixty } = honda.speedStats;
// const { teslaTopSpeed, zeroToSixty } = tesla.speedStats;
const {
  speedStats: { topSpeed: hondaTopSpeed } //no need to define both
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed } //for objects {}
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
