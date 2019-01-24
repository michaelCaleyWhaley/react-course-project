import subtract, { square, add } from "./utils";
import canDrink, { isAdult } from "./person";
import validator from "validator";

import React from "react";
import ReactDOM from "react-dom";

console.log("app.js is running");

console.log(`square: ${square(2)}`);
console.log(`add: ${add(2, 4)}`);
console.log(`subtract: ${subtract(2, 4)}`);

console.log(`isAdult: ${isAdult(17)}`);
console.log(`canDrink: ${canDrink(22)}`);

console.log(`isEmail: ${validator.isEmail("kneedeepwater@hotmail.com")}`);

const template = (<p>My name is michael</p>);
ReactDOM.render(template, document.getElementById("app"));
