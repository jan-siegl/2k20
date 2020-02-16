import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../../styles/PortfolioDetailStyle.scss"

export default class PortfolioDetail extends Component {

    render() {
        const {jmeno, textLong, url, image} = this.props;
        return (
            <div className="portfolioDetail">
                <h3>{jmeno}</h3>
                <Row className="detailRow">
                    <Col className="">
                        <a className="" target="_blank" href={url}>
                            <img className="detailImg" src={image}/>
                        </a>
                    </Col>
                    <Col>
                        <p>
                            {textLong}
                        </p>
                    </Col>
                </Row>
            </div>

        )
    }
}