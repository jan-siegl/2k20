import Navbar from "react-bootstrap/Navbar";
import logo2 from "../images/Ephi dark - svg edited.svg";
import Nav from "react-bootstrap/Nav";
import React, {Component} from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import Portfoliopage from "./portfoliopage";

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
        return(
            <Navbar expand="md" sticky="top" className="paddingNav" style={stylesnav}>
                <Navbar.Brand href="#">
                    <img src={logo2} className="App-logo" alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link href="#uvod" style={stylesli}>Úvod</Nav.Link>
                        <Nav.Link href="/portfolio" style={stylesli}>Portfolio</Nav.Link>
                        <Nav.Link href="#onas" style={stylesli}>O nás</Nav.Link>
                        <Nav.Link href="#kontakty" style={stylesli}>Kontakty</Nav.Link>
                    </Nav>
                    <Switch>
                        <Route path="/portfolio">
                            <Portfoliopage />
                        </Route>
                    </Switch>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
