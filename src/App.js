import React from 'react';
import logo from './Ephi dark - svg.svg';
import logo2 from './Ephi dark - svg edited.svg';
import './App.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar variant="dark" expand="md" sticky="top" className="paddingNav">
                        <Navbar.Brand href="#">
                            <img src={logo2} className="App-logo" alt="logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse>
                            <Nav className="ml-auto">
                                <Nav.Link href="#">Úvod</Nav.Link>
                                <Nav.Link href="#">O nás</Nav.Link>
                                <Nav.Link href="#">Portfolio</Nav.Link>
                                <Nav.Link href="#">Kontakty</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>

            </header>
        </div>
    );
}

export default App;
