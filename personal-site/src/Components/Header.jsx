import React from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, NavItem }  from 'react-bootstrap';
/**
 * Header component containing navbar
 */
export default class Header extends  React.Component {
    state = { selected: window.location.pathname};
    
    updateState= (selection) => {
        this.setState({
            selected: selection
        })
    }

    render() {
        return (
        <header className="App-header" >
            <Navbar fixed="top" className="Nav-header">
                <NavItem className={this.state.selected === '/' ? "Nav-selected Nav-item" : "Nav-item"} onClick={() => this.updateState('/')}>
                    <NavLink to = {"/"} >Home</NavLink>
                </NavItem>
                <NavItem  className={this.state.selected === '/aafc' ? "Nav-selected Nav-item" : "Nav-item"} onClick={() => this.updateState('/aafc')}>
                    <NavLink to = {"/aafc"}>AAFC</NavLink>
                </NavItem>
                <NavItem  className={this.state.selected === "/tulip" ? "Nav-selected Nav-item" : "Nav-item"} onClick={() => this.updateState('/tulip')}> 
                    <NavLink to = {"/tulip"}>Tulip</NavLink>
                </NavItem>
                <NavItem  className={this.state.selected === '/magnet' ? "Nav-selected Nav-item" : "Nav-item"} onClick={() => this.updateState('/magnet')}>
                    <NavLink to = {"/magnet"}>Magnet</NavLink>
                </NavItem>
            </Navbar>
        </header>);
    }
};
