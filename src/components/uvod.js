import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ilustrace1 from "../images/kys.png";


export default class Uvod extends Component {
    render() {
        return(
            <container id="uvod">
                <Row className="mainRow justify-content-center">
                    <Col className="text-left my-auto">
                        <p className="mainRowTop nospacing">Tvoříme webovové stránky, které zaujmou</p>
                        <p className="mainRowBot nospacing">Ať už potřebujete webovou stránku nebo kompletní brand
                            design, jsme tu pro vás.</p>
                    </Col>
                    <Col className="my-auto">
                        <img src={ilustrace1} className="img-fluid" alt="Ilustrace"/>
                    </Col>
                </Row>
            </container>
        )
    }
}