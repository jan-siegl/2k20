import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class Kosticka extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
            clicked: false
        };
    }

    render() {
        let imgStyle = {
            width: '100%',
            opacity: '50%'
        };
        let allStyle = {
            width: '40vw',
            padding: '0.5vw'
        };
        let hoveredStyle = {};
        if (this.state.hovered){
            hoveredStyle = {
                width: '100%',
                height: '100%',
                backgroundColor: 'white'
            };
            imgStyle = {
              display: 'none'
            };
        } else {
            hoveredStyle = {
            display: 'none'
            };
        }
        return (
            <Card bg="dark" className="text-center">
                <Card.Img
                    variant="top"
                    src={this.props.data.image} alt={this.props.data.jmeno}
                    style={imgStyle}
                />
                <Card.ImgOverlay>
                    <Card.Title className="font-weight-bold">{this.props.data.jmeno}</Card.Title>
                    <Card.Text>{this.props.data.text}</Card.Text>
                    <Button variant="light" size="sm">Vice info</Button>
                </Card.ImgOverlay>
            </Card>
        )
    }
}