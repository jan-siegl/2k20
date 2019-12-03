import React from 'react';
import logo2 from './Ephi dark - svg edited.svg';
import ilustrace1 from './kys.png';
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
                            <Nav.Link href="#uvod" style={stylesli}>Úvod</Nav.Link>
                            <Nav.Link href="#" style={stylesli}>Portfolio</Nav.Link>
                            <Nav.Link href="#" style={stylesli}>O nás</Nav.Link>
                            <Nav.Link href="#" style={stylesli}>Kontakty</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <container id="uvod">
                    <Row className="mainRow justify-content-center">
                        <Col className="text-left my-auto">
                            <p className="mainRowTop nospacing">Tvoříme webovové stránky, které zaujmou</p>
                            <p className="mainRowBot nospacing">Ať už potřebujete webovou stránku nebo kompletní brand design, jsme tu pro vás.</p>
                        </Col>
                        <Col className="my-auto">
                            <img src={ilustrace1} className="img-fluid" alt="Ilustrace"/>
                        </Col>
                    </Row>
                </container>
            </header>
        </div>
    );
}

export default App;
