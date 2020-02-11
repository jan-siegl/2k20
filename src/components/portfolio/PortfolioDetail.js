import React, {Component} from "react";


export default class PortfolioDetail extends Component {

    render() {
        const {jmeno, text} = this.props;
        return(
            <div>{jmeno}{text}</div>
        )
    }
}