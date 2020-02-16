import React, {Component} from "react";

//styles
import "../../styles/KontaktyStylr.scss";

//komponenty
import Card from "react-bootstrap/Card";

//hedshoty
import Headshot1 from "../../images/avataaars (2).svg";
import Headshot2 from "../../images/avataaars.svg";
import Headshot3 from "../../images/avataaars (1).svg";

export default class Kontaktypage extends Component {
    render() {
        return(
            <container id="kontaktypage">
                <div className="containerCards">
                    <Card className="kartickyOnas" style={{width: '10rem', border: 'none'}}>
                        <Card.Img
                            src={Headshot1}
                            alt="Headshot"
                        />
                        <Card.Body className="gradientOnas">
                            <Card.Title className="font-weight-bold">Adam Bárta</Card.Title>
                            <Card.Text>
                                <h6>Grafický designér</h6>
                                Email: adam.barta@ephi.cz
                                Telefon: +420 777 134 231
                                <br/>
                                <br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="kartickyOnas" style={{width: '10rem', border: 'none'}}>
                        <Card.Img
                            src={Headshot2}
                            alt="Headshot"
                        />
                        <Card.Body className="gradientOnas">
                            <Card.Title className="font-weight-bold">Adam Bárta</Card.Title>
                            <Card.Text>
                                <h6>Front-end vývojář</h6>
                                Email: adam.tretera@ephi.cz
                                Telefon: +420 777 134 231
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="kartickyOnas" style={{width: '10rem', border: 'none'}}>
                        <Card.Img
                            src={Headshot3}
                            alt="Headshot"
                        />
                        <Card.Body className="gradientOnas">
                            <Card.Title className="font-weight-bold">Adam Bárta</Card.Title>
                            <Card.Text>
                                <h6>Front-end vývojář</h6>
                                Email: jan.siegl@ephi.cz
                                Telefon: +420 777 134 231
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </container>
        )
    }
}