import React from 'react';
import './App.css';
import Navigace from './components/navigace';
import {Route, Switch} from "react-router-dom";
import Portfoliopage from "./components/portfoliopage";
import Onaspage from "./components/onaspage";
import Kontaktypage from "./components/kontaktypage";
import Uvodpage from "./components/uvodpage";
import Uvod from "./components/uvod";

function App() {
    let stylesbody = {
        padding: '0 5vw'
    };

    return (
        <div className="App" style={stylesbody}>
            <Navigace/>
            <Switch>
                <Route exact="true" path="/">
                    <Uvodpage/>
                </Route>
                <Route path="/portfoliopage">
                    <Portfoliopage/>
                </Route>
                <Route path="/onaspage">
                    <Onaspage/>
                </Route>
                <Route path="/kontakty">
                    <Kontaktypage/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
