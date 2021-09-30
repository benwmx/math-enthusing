import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Calculator from './components/Calculator';
import Quote from './components/pages/Quote';
import Home from './components/pages/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/Calculator">
          <div className="App">
            <Calculator />
          </div>
        </Route>
        <Route path="/Quote">
          <Quote />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
