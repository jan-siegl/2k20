import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

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
            width: '100%'
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
            <div style={allStyle}>
                <img
                    src={this.props.data.image} alt={this.props.data.jmeno}
                    onMouseOver={() => this.setState({hovered: true})}
                    onMouseOut={() => this.setState({hovered: false})}
                    style={imgStyle}
                />
                <div style={hoveredStyle}>

                </div>
            </div>
        )
    }
}