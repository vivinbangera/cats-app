import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Breed from './components/Breed';
import Search from './components/Search';

import './App.css';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/breed" exact>
              <Breed />
            </Route>
            <Route path="/search" exact>
              <Search />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
