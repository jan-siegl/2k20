import Navbar from "react-bootstrap/Navbar";
import logo2 from "../images/Ephi dark - svg edited.svg";
import Nav from "react-bootstrap/Nav";
import React, {Component} from "react";
import {
    Link
} from "react-router-dom";
import NavigaceMobil from "./navigaceMobil";
import Navigace from "./navigace";

export default class NavigaceWrap extends Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
        };
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

// make sure to remove the listener
// when the component is not mounted anymore
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;
        // the rest is the same...

        if (isMobile) {
            return (
                <NavigaceMobil />
            );
        } else {
            return (
                <Navigace />
            );
        }
    }
}
