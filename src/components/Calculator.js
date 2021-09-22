/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './calculator.scss';

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div className="output">
          <p className="screen">0</p>
        </div>
        <div className="buttons-container">
          <button type="button" className="button">AC</button>
          <button type="button" className="button">+/-</button>
          <button type="button" className="button">%</button>
          <button type="button" className="button operator">÷</button>
          <button type="button" className="button">7</button>
          <button type="button" className="button">8</button>
          <button type="button" className="button">9</button>
          <button type="button" className="button operator">x</button>
          <button type="button" className="button">4</button>
          <button type="button" className="button">5</button>
          <button type="button" className="button">6</button>
          <button type="button" className="button operator">-</button>
          <button type="button" className="button">1</button>
          <button type="button" className="button">2</button>
          <button type="button" className="button">3</button>
          <button type="button" className="button operator">+</button>
          <button type="button" className="button" id="zero">0</button>
          <button type="button" className="button">.</button>
          <button type="button" className="button operator">=</button>
        </div>
      </div>
    );
  }
}
