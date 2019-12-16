import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './KostickaStyle.scss';

export default class Kosticka extends Component {

    render() {
        return (
            <Card bg="dark" className="text-center kosticka">
                <Card.Img
                    variant="top"
                    src={this.props.data.image} alt={this.props.data.jmeno}
                    className="kostickaImg"
                />
                <Card.ImgOverlay className="kostickaOverlay">
                    <Card.Title className="font-weight-bold">{this.props.data.jmeno}</Card.Title>
                    <Card.Text>{this.props.data.text}</Card.Text>
                    <Button variant="light" size="sm">Vice info</Button>
                </Card.ImgOverlay>
            </Card>
        )
    }
}