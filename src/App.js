import React from 'react';
import logo2 from './Ephi dark - svg edited.svg';
import './App.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
    let stylesbody = {
        padding: '0 5vw'
    }
    let stylesli = {
        color: 'white',
        padding: '0 0 0 3vw',
        fontSize: '120%',
    };
    let stylesnav = {
        padding: '1% 1% 0 1%'
    };
    return (
        <div className="App">
            <header className="App-header" style={stylesbody}>
                <Navbar expand="md" sticky="top" className="paddingNav" style={stylesnav}>
                    <Navbar.Brand href="#">
                        <img src={logo2} className="App-logo" alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                            <Nav.Link href="#" style={stylesli}>Úvod</Nav.Link>
                            <Nav.Link href="#" style={stylesli}>O nás</Nav.Link>
                            <Nav.Link href="#" style={stylesli}>Portfolio</Nav.Link>
                            <Nav.Link href="#" style={stylesli}>Kontakty</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <container>
                    <Row>
                        <Col>zaujmou</Col>
                        <Col>pravo</Col>
                    </Row>
                </container>
            </header>
        </div>
    );
}

export default App;
