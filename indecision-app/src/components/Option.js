import React from 'react';

// OPTION COMPONENT
const Option = props => {
  return (
    <li>
      {props.value}
      <button
        onClick={e => {
          props.handleDeleteOption(props.value);
        }}
      >
        Remove
      </button>
    </li>
  );
};

export default Option;