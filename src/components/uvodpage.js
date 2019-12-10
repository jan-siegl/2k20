import Portfolio from './portfolio';
import Uvod from './uvod';
import Onas from './onas';
import Kontakty from "./kontakty";
import React, {Component} from "react";

export default class Uvodpage extends Component {
    render() {
        return (
            <div>
                <Uvod/>
                <Portfolio/>
                <Onas/>
                <Kontakty/>
            </div>
        )
    }
}