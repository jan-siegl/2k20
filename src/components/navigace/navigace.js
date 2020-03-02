import React, {Component} from "react";
import {
    Link
} from "react-router-dom";

//komponenty
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

//logo ephi
import logo2 from "../../images/Ephi dark - svg edited.svg";


//styly nadefinovane
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
                <Navbar collapseOnSelect expand="md" sticky="top" className="paddingNav navbar-dark" style={stylesnav}>
                    <Navbar.Brand href="#">
                      <Link to="/"><img src={logo2} className="App-logo" alt="logo"/></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Link activeClassName="active" to="/" style={stylesli}>Úvod</Link>
                            <Link to="/portfolio" style={stylesli}>Portfolio</Link>
                            <Link to="/onas" style={stylesli}>Náš tým</Link>
                            <Link to="/kontakty" style={stylesli}>Kontakty</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}
