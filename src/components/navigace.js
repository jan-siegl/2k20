import Navbar from "react-bootstrap/Navbar";
import logo2 from "../images/Ephi dark - svg edited.svg";
import Nav from "react-bootstrap/Nav";
import React, {Component} from "react";
import {
    Link
} from "react-router-dom";

let stylesli = {
    color: 'white',
    padding: '0 0 0 3vw',
    fontSize: '120%',
};
let stylesnav = {
    padding: '1% 1% 0 1%'
};

export default class Navigace extends Component {
    render() {
        return (
                <Navbar expand="md" sticky="top" className="paddingNav" style={stylesnav}>
                    <Navbar.Brand href="#">
                        <img src={logo2} className="App-logo" alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                            <Link to="/" style={stylesli}>Úvod</Link>
                            <Link to="/portfoliopage" style={stylesli}>Portfolio</Link>
                            <Link to="/onaspage" style={stylesli}>O nás</Link>
                            <Link to="/kontakty" style={stylesli}>Kontakty</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}
