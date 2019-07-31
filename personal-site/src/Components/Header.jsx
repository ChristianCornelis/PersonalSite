import React from 'react';
import { Tabs, Tab }  from 'react-bootstrap';
import Body from './Body';
import { introduction, goals, outro } from '../Content/AAFC/Introduction';
/**
 * Header component
 */
export default class Header extends  React.Component {
    render() {
        return (
        <header className="App-header">
            <Tabs defaultActiveKey="home" id="test">
                <Tab eventKey="home" title="Home"></Tab>
                <Tab eventKey="agCanada" title="Agriculture Canada"><Body introduction={introduction} goals={goals} outro={outro}/></Tab>
                <Tab eventKey="tulip" title="Tulip Retail"></Tab>
                <Tab eventKey="magnet" title="Magnet Forensices"></Tab>
            </Tabs>
        </header>);
    }
};

//<Tab eventKey="agCanada" title="Agriculture Canada"><Body /></Tab>
//<Tab eventKey="tulip" title="Tulip Retail"><Body /></Tab>
// <Tab eventKey="magnet" title="Magnet Forensics"><Body /></Tab>
