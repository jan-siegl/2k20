import logo2 from "../images/Ephi dark - svg edited.svg";
import React, {Component} from "react";
import "./NavigaceMobilStyle.scss";
import {
    Link
} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class NavigaceMobil extends Component {

    state = {
        active: false,
    };

    render() {
        return (
            <div>
                <Row className={this.state.active ? "wrapMenuActive" : "wrapMenu"}>
                    <Col>
                        <Link to="/"><img src={logo2} className="App-logo logoEphi" alt="logo"/></Link>
                    </Col>
                    <Col>
                        <div className={this.state.active ? "open" : null}
                             onClick={() => this.setState({active: !this.state.active})} id="nav-icon3">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Col>
                </Row>
                <div className={this.state.active ? "overlay" : "overlayOff"}>

                </div>
            </div>
        )
    }
}
