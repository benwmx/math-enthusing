import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/pages/Quote';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Calculator">
          <div className="App">
            <Calculator />
          </div>
        </Route>
        <Route path="/Quote">
          <Quote />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
