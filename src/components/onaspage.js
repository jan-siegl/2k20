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
                <CardGroup>
                    <Card style={{ width: '15rem' }}>
                      <Card.Img
                        src={Headshot1}
                        alt="Headshot"
                      />
                      <Card.Body className="gradientOnas">
                          <Card.Title>Adam Bárta</Card.Title>
                          <Card.Text>
                              Grafikou se zabývá posledních několik let. Záleží mu na detailech a snaží se prosadit originalitu a jednoduchost.
                          </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img
                            src={Headshot2}
                            alt="Headshot"
                        />
                    </Card>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img
                            src={Headshot3}
                            alt="Headshot"
                        />
                    </Card>
                </CardGroup>
            </container>
        )
    }
}