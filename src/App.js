import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
        </div>
      </Router>
    );
  }
}

export default App;


<Router>
  <div>
    <NavBar />
  </div>
</Router>