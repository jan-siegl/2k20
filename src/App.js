import React from 'react';
import {Route, Switch} from "react-router-dom";

//css
import './styles/App.css';

//komponenty
import Portfoliopage from "./components/portfolio/portfoliopage";
import Onaspage from "./components/onas/onaspage";
import Kontaktypage from "./components/kontakty/kontaktypage";
import Uvodpage from "./components/mainpage/uvodpage";
import NavigaceWrap from "./components/navigace/navigaceWrap";

//loga
import gpfclogo from "./images/gpfc.png";
import azavslogo from "./images/azavs.png";
import oldephilogo from "./images/ephiweb.png";
import ckpanterlogo from "./images/panter.png";


//data do portfolia
const data = [
    {
        id: 1,
        jmeno: "GPFC - Parkour Praha",
        text: "Web a brand design pro pražský parkourový klub GPFC s e-shopem a přihlašovacím systémem",
        image: gpfclogo,
        url: "www.google.cz"
    },
    {
        id: 2,
        jmeno: "Azavs",
        text: "Jednoduchá a minimalistická stránka pro stavební firmu Azavs s.r.o.",
        image: azavslogo,
        url: "www.google.cz"
    },
    {
        id: 3,
        jmeno: "Původní stránka Ephi.cz",
        text: "Náš původní design, od kterého jsme se posunuli směrem k přívětivějšímu a přehlednějšímu",
        image: oldephilogo,
        url: "www.google.cz"
    },
    {
        id: 4,
        jmeno: "CKPanter",
        text: "Wordpress stránka pro cestovní kancelář CKPanter s jednoduchým admin systémem pro snadné aktualizování a upravování",
        image: ckpanterlogo,
        url: "www.google.cz"
    }
];

function App() {
    let stylesbody = {
        padding: '0 5vw'
    };

    return (
        <div className="App" style={stylesbody}>
            <NavigaceWrap />
            <Switch>
                <Route exact="true" path="/">
                    <Uvodpage/>
                </Route>
                <Route path="/portfoliopage">
                    <Portfoliopage data={data}/>
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
