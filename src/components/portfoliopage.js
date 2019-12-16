import React, {Component} from "react";
import Kosticka from "./Kosticka";
import Row from "react-bootstrap/Row";
import CardColumns from "react-bootstrap/CardColumns";

export default class Portfoliopage extends Component {
    render() {
        return (
            <KostickyGenerator data={this.props.data}/>
        )
    }
}

let StyleDeck = {
    margin: "5vw"
};

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