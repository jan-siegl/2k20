import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ilustrace1 from "../../images/Main_ilustrace.png";


export default class Uvod extends Component {
    render() {
        return(
            <container id="uvod">
                <Row className="mainRow justify-content-center">
                    <Col sm={12} xl className="text-left my-auto">
                        <h1 className="nospacing">Tvoříme webovové stránky, které zaujmou</h1>
                        <h2 className="">Ať už potřebujete webovou stránku nebo kompletní brand
                            design, jsme tu pro vás.</h2>
                    </Col>
                    <Col sm={12} xl className="my-auto">
                        <img src={ilustrace1} className="img-fluid" alt="Ilustrace"/>
                    </Col>
                </Row>
            </container>
        )
    }
}
