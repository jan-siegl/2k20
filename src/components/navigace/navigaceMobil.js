import React, {Component} from "react";
import {
    Link
} from "react-router-dom";

//komponenty
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//style
import "../../styles/NavigaceMobilStyle.scss";

//logo ephi
import logo2 from "../../images/Ephi dark - svg edited.svg";
import Nav from "react-bootstrap/Nav";

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
                <div className={this.state.active ? "overlay" : "overlayOff"} >
                    <ul className="text-center mx-auto my-auto navigaceMobilWrap">
                        <li><Link to="/" onClick={() => this.setState({active: !this.state.active})}>Úvod</Link></li>
                        <li><Link to="/portfoliopage" onClick={() => this.setState({active: !this.state.active})}>Portfolio</Link></li>
                        <li><Link to="/onaspage" onClick={() => this.setState({active: !this.state.active})}>O nás</Link></li>
                        <li><Link to="/kontakty" onClick={() => this.setState({active: !this.state.active})}>Kontakty</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
