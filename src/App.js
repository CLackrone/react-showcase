import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Form from './components/Form'
import Login from './components/Login'
import Index from './components/Index'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Switch>
            <Route exact path='/form' component={Form} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/index' component={Index} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
