import React from "react";

// OPTION COMPONENT
const Option = ({ value, handleDeleteOption, count }) => (
  <li className="option">
    <p className="option__text">
      {count}. {value}
    </p>
    <button
      className="button button--link"
      onClick={e => {
        handleDeleteOption(value);
      }}
    >
      Remove
    </button>
  </li>
);

export default Option;
