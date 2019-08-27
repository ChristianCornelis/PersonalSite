import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Body from './Components/Body';
import './App.css';
import Header from './Components/Header';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path = "/" component={Home}></Route>
          <Route exact path = "/aafc" component={Body}></Route>
          <Route exact path = "/tulip" component={Body}></Route>
          <Route exact ath = "/magnet" component={Body}></Route>
        </Switch>
        {/* <Route name = "aafc" exact path ="/" component={Body}></Route> */}
        {/* <Route exact path = "/tulip" component={
          <Body
            introduction={tulip.introduction}
            employerInformation={tulip.employerInformation}
            jobDescription={tulip.jobDescription}
            goals={tulip.goals}
            conclusion={tulip.conclusion}
            acknowledgements={tulip.acknowledgements}
          />}>
        </Route>
        <Route exact path = "/magnet" component={Body}></Route> */}
      </div>
    </Router>
  );
}

export default App;
