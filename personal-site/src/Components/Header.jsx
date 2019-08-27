import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Tabs, Tab, Nav, Navbar, NavItem }  from 'react-bootstrap';
import * as aafc from '../Content/AAFC';
import * as tulip from '../Content/Tulip';
import * as magnet from '../Content/Magnet';
// import Body from './Body';import NavLink from 'react-bootstrap/NavLi
/**
 * Header component
 */
export default class Header extends  React.Component {
    render() {
        return (
        <header className="App-header" >
            <Navbar fixed="top" className="Nav-header">
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
                <NavItem className="Nav-item">
                    {/* <Link to = "aafc" params= {{ 
                        introduction: aafc.introduction,
                        employerInformation: aafc.employerInformation,
                        jobDescription: aafc.jobDescription,
                        goals: aafc.goals,
                        conclusion: aafc.conclusion,
                        acknowledgements: aafc.acknowledgements
                    }}>
                      Home
                    </Link> */}
                    <NavLink to = {"/"} >Home</NavLink>
                </NavItem>
                <NavItem  className="Nav-item">
                    <NavLink to = {{
                        pathname: "/aafc", 
                        state: {
                            introduction: aafc.introduction,
                            employerInformation: aafc.employerInformation,
                            jobDescription: aafc.jobDescription,
                            goals: aafc.goals,
                            conclusion: aafc.conclusion,
                            acknowledgements: aafc.acknowledgements
                        }
                    }}>AAFC
                    </NavLink>
                </NavItem>
                <NavItem  className="Nav-item"> 
                    <NavLink to = {{
                        pathname: "/tulip", 
                        state: {
                            introduction: tulip.introduction,
                            employerInformation: tulip.employerInformation,
                            jobDescription: tulip.jobDescription,
                            goals: tulip.goals,
                            conclusion: tulip.conclusion,
                            acknowledgements: tulip.acknowledgements
                        }
                    }}>Tulip
                    </NavLink>
                </NavItem>
                <NavItem  className="Nav-item">
                    <NavLink to = {{
                        pathname: "/magnet", 
                        state: {
                            introduction: magnet.introduction,
                            employerInformation: magnet.employerInformation,
                            jobDescription: magnet.jobDescription,
                            goals: magnet.goals,
                            conclusion: magnet.conclusion,
                            acknowledgements: magnet.acknowledgements
                        }
                    }}>Magnet
                    </NavLink>
                </NavItem>
            </Navbar>
        </header>);
    }
};
