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
                <Row className="justify-content-center onasPageRow">
                    <Col>
                        <img
                            alt="hedshot"
                            src={Headshot1}
                            className="onasImg"
                        />
                    </Col>
                    <Col>
                        <div className="onasContent">
                            <h3>Adam Barta</h3>
                            <p className="onasText">
                                Hi! I'm a highschool student studying web development, programming and vector art. I have also been working as writer, video producer and game critic in Czech magazine IndianTVCZ for 3 years now.

                                Although I'm a student I spend a lot of free time working on my own projects. Such as websites, videogames, hardware projects and more. I also make digital art - mainly vector illustrations and logos or UI/UX concepts. <br/>
                                <a href="www.pleb.com">lnkedn</a><br/>
                                <a href="www.pleb.com">ddddd</a>
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center onasPageRow">
                    <Col>
                        <img
                            alt="hedshot"
                            src={Headshot2}
                            className="onasImg"
                        />
                    </Col>
                    <Col>
                        <div className="onasContent">
                            <h3>Adam Barta</h3>
                            <p className="onasText">
                                Je to pleb <br/>
                                <a href="www.pleb.com">lnkedn</a><br/>
                                <a href="www.pleb.com">ddddd</a>
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center onasPageRow">
                    <Col>
                        <img
                            alt="hedshot"
                            src={Headshot3}
                            className="onasImg"
                        />
                    </Col>
                    <Col>
                        <div className="onasContent">
                            <h3>Adam Barta</h3>
                            <p className="onasText">
                                Je to pleb <br/>
                                <a href="www.pleb.com">lnkedn</a><br/>
                                <a href="www.pleb.com">ddddd</a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}