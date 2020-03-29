import React, {Component} from "react";
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
                                Grafik, webový vývojář, copywriter a redaktor pro český herní magazín Indian. Vývoj webů pro něj už dávno není jen koníčkem. Učí se ty nejnovější technologie, aby mohl pomáhat vyvíjet flexibilní a kvalitní stránky.<br/>
                                <a href="https://www.linkedin.com/in/adam-b%C3%A1rta-ab7822192/"
                                   target="_blank" rel="noopener noreferrer">Linkedin</a>
                                <a href="https://github.com/PeanutButte7" target="_blank" rel="noopener noreferrer">GitHub</a><div className="br">
                                <a href="https://www.adam-barta.com/" target="_blank" rel="noopener noreferrer" className="webLink">adam-barta.com</a></div>
                                <a href="https://www.adam-barta.com/" target="_blank" rel="noopener noreferrer" className="mobileNo">adam-barta.com</a>
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
                                    Nadšenec do technologií a příležitostný fotograf, který si našel zálibu ve vývoji webových stránek. Rád
                                    se pouští do různých, často ambiciózních, projektů. Přičemž hlídá, aby zbytek týmu dodržoval
                                    stanovené termíny. <br/>
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                                    <a href="https://github.com/ephicz" target="_blank" rel="noopener noreferrer">GitHub</a>
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
                                    I jako vývojář se na naše projekty Adam dívá z trochu jiné stránky. Zaměřuje se na marketing,
                                    komunikaci s klienty a je zároveň nejzkušenějším členem týmu.<br/>
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Linkedin</a>
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">GitHub</a>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}