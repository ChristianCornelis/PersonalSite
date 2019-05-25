import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Tabs, Tab, Alert }  from 'react-bootstrap';
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Boi
        </p>
      </header>
      <Header />
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          ah
        </Tab>
        <Tab eventKey="profile" title="Profile">
          ahh
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          ahhh
        </Tab>
      </Tabs>

      <Alert key='primary' variant='light'>
        This is a  alert with
        <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
        like.
    </Alert>
    </div>
  );
}

export default App;
