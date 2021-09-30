import React, { useState } from 'react';
import './calculator.scss';
import calculate from '../logic/calculate';
import Button from './Button';

export default function Calculator() {
  const [state, setState] = useState({ name: null, total: null, operation: null });
  const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  let iterator = 0;
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
          { buttons.map(button => {
            iterator += 1;
            return (
              <Button
                key={iterator}
                runCalculation={runCalculation}
                name={button}
              />
            );
          }) }
        </div>
      </div>
    </div>
  );
}
