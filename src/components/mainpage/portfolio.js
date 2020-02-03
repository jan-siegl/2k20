import Carousel from "react-spring-3d-carousel";
import React, {Component} from "react";
import gpfc from "../../images/gpfc.png";
import azavs from "../../images/azavs.png";
import ephiweb from "../../images/ephiweb.png"
import panter from "../../images/panter.png"
import uuidv4 from "uuid";

let slides = [
    {
        key: uuidv4(),
        content: <img src={gpfc} alt="GPFC" />
    },
    {
        key: uuidv4(),
        content: <img src={azavs} alt="azavs.cz" />
    },
    {
        key: uuidv4(),
        content: <img src={ephiweb} alt="ephi" />
    },
    {
        key: uuidv4(),
        content: <img src={panter} alt="CK Panter" />
    }
];

export default class Portfolio extends Component {
    render() {
        return (
            <div id="portfolio">
                <h1 className="text-center partHeader">Naše projekty</h1>
                <Carousel slides={slides} showNavigation="true" animationConfig="config.gentle" />
            </div>
        )
    }
}

