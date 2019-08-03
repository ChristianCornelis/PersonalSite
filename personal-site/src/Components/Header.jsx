import React from 'react';
import { Tabs, Tab, Navbar, NavItem }  from 'react-bootstrap';
import Body from './Body';
import * as aafc from '../Content/AAFC';
import * as tulip from '../Content/Tulip';
/**
 * Header component
 */
export default class Header extends  React.Component {
    render() {
        return (
        <header className="App-header" >
            <Navbar fixed="top" style={{backgroundColor: "grey"}}>
                {/* <Tabs defaultActiveKey="home" id="test">
                    <Tab eventKey="home" title="Home"></Tab>
                    <Tab eventKey="agCanada" title="Agriculture Canada">
                        <Body 
                            introduction={aafc.introduction}
                            employerInformation={aafc.employerInformation}
                            jobDescription={aafc.jobDescription}
                            goals={aafc.goals}
                            conclusion={aafc.conclusion}
                            acknowledgements={aafc.acknowledgements}
                        />
                        </Tab>
                    <Tab eventKey="tulip" title="Tulip Retail">
                        <Body
                            introduction={tulip.introduction}
                            employerInformation={tulip.employerInformation}
                            jobDescription={tulip.jobDescription}
                            goals={tulip.goals}
                            conclusion={tulip.conclusion}
                            acknowledgements={tulip.acknowledgements}
                        />
                    </Tab>
                    <Tab eventKey="magnet" title="Magnet Forensics"></Tab>
                </Tabs> */}
                <Nav>
                    <Nav.Link></Nav.Link>
                </Nav>
                <NavItem>Pls</NavItem>
            </Navbar>
        </header>);
    }
};
