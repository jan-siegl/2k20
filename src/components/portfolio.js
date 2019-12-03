import Carousel from "react-spring-3d-carousel";
import React, {Component} from "react";
import portfoliofirst from "../images/gpfc.png";
import random from "../images/random.png";

let slides = [
    {
        key: 1,
        content: <img className="w-100" src={portfoliofirst} alt="GPFC" />
    },
    {
        key: 2,
        content: <img className="w-100" src={random} alt="random" />
    },
    {
        key: 3,
        content: <img className="w-100" src={random} alt="random" />
    },
    {
        key: 4,
        content: <img className="w-100" src={random} alt="random" />
    },
    {
        key: 5,
        content: <img className="w-100" src={random} alt="random" />
    }
];

export default class Portfolio extends Component {
    render() {
        return (
            <div id="portfolio">
                <h1 className="text-center partHeader">Naše projekty</h1>
                <Carousel slides={slides} offsetRadius="1" />
            </div>
        )
    }
}

