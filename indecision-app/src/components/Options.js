import React from 'react';
import Option from './Option';

// OPTIONS COMPONENT
const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && (
        <p>Please add an option to get started!</p>
      )}
      <ul>
        {props.options.map((option, index) => {
          return (
            <Option
              value={option}
              key={index + option}
              handleDeleteOption={props.handleDeleteOption}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Options;