/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './calculator.scss';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      total: null,
      operation: null,
    };
    this.runCalculation = this.runCalculation.bind(this);
    this.displayResult = this.displayResult.bind(this);
  }

  runCalculation(event) {
    const newState = calculate(this.state, event.target.name);
    this.setState(newState);
  }

  displayResult() {
    const { next, total } = this.state;
    if (next) return next;
    if (total) return total;
    return 0;
  }

  render() {
    return (
      <div className="calculator">
        <div className="output">
          <p className="screen">{ this.displayResult() }</p>
        </div>
        <div className="buttons-container">
          <button name="AC" type="button" className="button" onClick={this.runCalculation}>AC</button>
          <button name="+/-" type="button" className="button" onClick={this.runCalculation}>+/-</button>
          <button name="%" type="button" className="button" onClick={this.runCalculation}>%</button>
          <button name="÷" type="button" className="button operator" onClick={this.runCalculation}>÷</button>
          <button name="7" type="button" className="button" onClick={this.runCalculation}>7</button>
          <button name="8" type="button" className="button" onClick={this.runCalculation}>8</button>
          <button name="9" type="button" className="button" onClick={this.runCalculation}>9</button>
          <button name="x" type="button" className="button operator" onClick={this.runCalculation}>x</button>
          <button name="4" type="button" className="button" onClick={this.runCalculation}>4</button>
          <button name="5" type="button" className="button" onClick={this.runCalculation}>5</button>
          <button name="6" type="button" className="button" onClick={this.runCalculation}>6</button>
          <button name="-" type="button" className="button operator" onClick={this.runCalculation}>-</button>
          <button name="1" type="button" className="button" onClick={this.runCalculation}>1</button>
          <button name="2" type="button" className="button" onClick={this.runCalculation}>2</button>
          <button name="3" type="button" className="button" onClick={this.runCalculation}>3</button>
          <button name="+" type="button" className="button operator" onClick={this.runCalculation}>+</button>
          <button name="0" type="button" className="button" id="zero" onClick={this.runCalculation}>0</button>
          <button name="." type="button" className="button" onClick={this.runCalculation}>.</button>
          <button name="=" type="button" className="button operator" onClick={this.runCalculation}> = </button>
        </div>
      </div>
    );
  }
}
