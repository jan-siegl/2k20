import React, {Component} from "react";
import Kosticka from "./Kosticka";
import Row from "react-bootstrap/Row";

export default class Portfoliopage extends Component {
    render() {
        return (
            <KostickyGenerator data={this.props.data}/>
        )
    }
}

class KostickyGenerator extends React.Component {
    render() {
        return (
            <div className="tiles">
                <Row className="justify-content-md-center">
                    {this.props.data.map((data) => {
                        return <Kosticka data={data} key={data.id}/>
                    })}
                </Row>
            </div>
        );
    }
}