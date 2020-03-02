import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//style
import "../../styles/OnasStyle.scss";

//hedshoty
import Headshot1 from "../../images/bortok.jpg";
import Headshot3 from "../../images/avataaars (1).svg";
import Headshot2 from "../../images/avataaars.svg";


export default class Onaspage extends Component {
    render() {
        return (
            <div className="onaspage">
                <div className="person1">
                    <Row className="onasContent">
                        <Col>
                            <img
                                alt="hedshot"
                                src={Headshot1}
                                className="onasImg"
                            />
                            <h4 className="text-center">Adam Bárta</h4>
                            <p className="onasText">
                                Herní kritik, video producer, autor pro český herní magazín IndianTV, ale zejména náš
                                kreativní grafik. Web development již dlouho není jen jeho hobby. To je Adam Bárta.<br/>
                                <a href="https://www.linkedin.com/in/adam-b%C3%A1rta-ab7822192/"
                                   target="_blank">Linkedin</a>
                                <a href="https://github.com/PeanutButte7" target="_blank">GitHub</a>
                                <a href="https://www.adam-barta.com/" target="_blank" className="br">adam-barta.com</a>
                            </p>
                        </Col>
                    </Row>
                </div>
                <div className="person1">
                    <Row className="justify-content-center text-center onasPageRow">
                        <Col>
                            <img
                                alt="hedshot"
                                src={Headshot2}
                                className="onasImg"
                            />
                            <div className="onasContent">
                                <h4>Jan Siegl</h4>
                                <p className="onasText">
                                    Je <br/>to<br/> god <br/>...no more to say. <br/>
                                    <a href="https://www.linkedin.com/" target="_blank">Linkedin</a>
                                    <a href="https://github.com/ephicz" target="_blank">GitHub</a>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="person1">
                    <Row className="justify-content-center text-center onasPageRow">
                        <Col>
                            <img
                                alt="hedshot"
                                src={Headshot3}
                                className="onasImg"
                            />
                            <div className="onasContent">
                                <h4>Adam Tretera</h4>
                                <p className="onasText">
                                    S nejvetšíma zkušenostma je to Adam kdo vrací náš tým do reality a hlída dodržování
                                    termínů a požadavků. Již od mala nadaný v mnoha oblastech, zejména exceluje ve web
                                    developmentu.<br/>
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Linkedin</a>
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">GitHub</a>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}