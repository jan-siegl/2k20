import React, {Component} from "react";
import Kosticka from "./Kosticka";
import CardColumns from "react-bootstrap/CardColumns";

let PortfolioPageStyle = {
    marginTop: "5vh"
};

export default class Portfoliopage extends Component {
    render() {
        return (
            <div style={PortfolioPageStyle}>
                <KostickyGenerator data={this.props.data}/>
            </div>
        )
    }
}

let StyleDeck = {
    margin: "0vw"
};


//dela jednotlive kostikcky
class KostickyGenerator extends React.Component {
    render() {
        return (
            <CardColumns className="justify-content-center" style={StyleDeck}>
                {this.props.data.map((data) => {
                    return <Kosticka data={data} key={data.id}/>
                })}
            </CardColumns>
        );
    }
}