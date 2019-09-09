import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Body from './Components/Body';
import './App.css';
import Header from './Components/Header';
function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Header />
        <Switch>
          <Route exact path = "/" component={Home}></Route>
          <Route exact path = "/aafc" component={Body}></Route>
          <Route exact path = "/tulip" component={Body}></Route>
          <Route exact ath = "/magnet" component={Body}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
