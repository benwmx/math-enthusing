/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './calculator.css';

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <p className="output">0</p>
        <div className="buttons-container">
          <button type="button" className="button">AC</button>
          <button type="button" className="button">+/-</button>
          <button type="button" className="button">%</button>
          <button type="button" className="button">÷</button>
          <button type="button" className="button">7</button>
          <button type="button" className="button">8</button>
          <button type="button" className="button">9</button>
          <button type="button" className="button">x</button>
          <button type="button" className="button">4</button>
          <button type="button" className="button">5</button>
          <button type="button" className="button">6</button>
          <button type="button" className="button">-</button>
          <button type="button" className="button">1</button>
          <button type="button" className="button">2</button>
          <button type="button" className="button">3</button>
          <button type="button" className="button">+</button>
          <button type="button" className="button">0</button>
          <button type="button" className="button">.</button>
          <button type="button" className="button">=</button>
        </div>
      </div>
    );
  }
}
