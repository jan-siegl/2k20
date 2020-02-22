import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import {
    Link
} from "react-router-dom";
import Button from "react-bootstrap/Button";

//style
import '../../styles/KostickaStyle.scss';

export default class Kosticka extends Component {

    render() {

        return (
            <Card bg="dark" className="text-center kosticka">
                <Card.Img
                    variant="top"
                    src={this.props.data.image} alt={this.props.data.jmeno}
                    className="kostickaImg"
                />
                <Card.ImgOverlay className="kostickaOverlay d-flex flex-column">
                    <h5 className="font-weight-bold overlayTitle">{this.props.data.jmeno}</h5>
                    <Card.Text className="overlayText">{this.props.data.text}</Card.Text>
                    <a className="vice mx-auto" href={this.props.data.url} target="_blank">Navštívit</a>
                    {
                        //<Link to={this.props.data.route} className="vice mx-auto">Více</Link>
                    }
            </Card.ImgOverlay>
            </Card>
        )
    }
}