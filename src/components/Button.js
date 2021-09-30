/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const Button = props => {
  const generateClassName = name => {
    let className = 'button ';
    if (Number.isNaN(parseInt(name, 10)) && (name !== '.' && name !== 'AC' && name !== '%' && name !== '+/-')) className += 'operator';
    if (name === '0') className += 'zero';
    return className;
  };
  return (
    <button
      type="button"
      name={props.name}
      className={generateClassName(props.name)}
      onClick={props.runCalculation}
    >
      {props.name}
    </button>
  );
};

export default Button;
