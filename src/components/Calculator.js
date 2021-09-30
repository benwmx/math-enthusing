import React, { useState } from 'react';
import './calculator.scss';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({ name: null, total: null, operation: null });

  const runCalculation = event => {
    const newState = calculate(state, event.target.name);
    setState(newState);
  };

  const displayResult = () => {
    const { next, total } = state;
    if (next) return next;
    if (total) return total;
    return 0;
  };

  return (
    <div className="container container-calc">
      <h2 className="title">Let&apos;s do some math!</h2>
      <div className="calculator">
        <div className="output">
          <p className="screen">{ displayResult() }</p>
        </div>
        <div className="buttons-container">
          <button name="AC" type="button" className="button" onClick={runCalculation}>AC</button>
          <button name="+/-" type="button" className="button" onClick={runCalculation}>+/-</button>
          <button name="%" type="button" className="button" onClick={runCalculation}>%</button>
          <button name="÷" type="button" className="button operator" onClick={runCalculation}>÷</button>
          <button name="7" type="button" className="button" onClick={runCalculation}>7</button>
          <button name="8" type="button" className="button" onClick={runCalculation}>8</button>
          <button name="9" type="button" className="button" onClick={runCalculation}>9</button>
          <button name="x" type="button" className="button operator" onClick={runCalculation}>x</button>
          <button name="4" type="button" className="button" onClick={runCalculation}>4</button>
          <button name="5" type="button" className="button" onClick={runCalculation}>5</button>
          <button name="6" type="button" className="button" onClick={runCalculation}>6</button>
          <button name="-" type="button" className="button operator" onClick={runCalculation}>-</button>
          <button name="1" type="button" className="button" onClick={runCalculation}>1</button>
          <button name="2" type="button" className="button" onClick={runCalculation}>2</button>
          <button name="3" type="button" className="button" onClick={runCalculation}>3</button>
          <button name="+" type="button" className="button operator" onClick={runCalculation}>+</button>
          <button name="0" type="button" className="button" id="zero" onClick={runCalculation}>0</button>
          <button name="." type="button" className="button" onClick={runCalculation}>.</button>
          <button name="=" type="button" className="button operator" onClick={runCalculation}> = </button>
        </div>
      </div>
    </div>
  );
}
