import React, {Component} from "react";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Headshot1 from "../images/avataaars (2).svg";
import Headshot3 from "../images/avataaars (1).svg";
import Headshot2 from "../images/avataaars.svg";
import "./OnasStyle.scss";

export default class Onaspage extends Component {
    render() {
        return(
            <container id="onaspage">
                <div className="containerCards">
                    <Card className="kartickyOnas" style={{ width: '15rem', border: 'none' }}>
                      <Card.Img
                        src={Headshot1}
                        alt="Headshot"
                      />
                      <Card.Body className="gradientOnas">
                          <Card.Title className="font-weight-bold">Adam Bárta</Card.Title>
                          <Card.Text>
                              <h6>Graficky deigner</h6>
                              Grafikou se zabývá posledních několik let. Záleží mu na detailech a snaží se prosadit originalitu a jednoduchost.
                           <br />
                              <br />
                          </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card className="kartickyOnas" style={{ width: '15rem', border: 'none' }}>
                        <Card.Img
                            src={Headshot2}
                            alt="Headshot"
                        />
                        <Card.Body className="gradientOnas">
                            <Card.Title className="font-weight-bold">Adam Bárta</Card.Title>
                            <Card.Text>
                                <h6>Graficky deigner</h6>
                                Grafikou se zabývá posledních několik let. Záleží mu na detailech a snaží se prosadit originalitu a jednoduchost.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="kartickyOnas" style={{ width: '15rem', border: 'none' }}>
                        <Card.Img
                            src={Headshot3}
                            alt="Headshot"
                        />
                        <Card.Body className="gradientOnas">
                            <Card.Title className="font-weight-bold">Adam Bárta</Card.Title>
                            <Card.Text>
                                <h6>Graficky deigner</h6>
                                Grafikou se zabývá posledních několik let. Záleží mu na detailech a snaží se prosadit originalitu a jednoduchost.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </container>
        )
    }
}