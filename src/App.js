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
import PortfolioDetail from "./components/portfolio/PortfolioDetail";

//loga
import gpfclogo from "./images/gpfc.png";
import azavslogo from "./images/azavs.png";
import oldephilogo from "./images/ephiweb.png";
import ckpanterlogo from "./images/panter.png";


//data do portfolia
import PortfoliData from "./components/PortfolioData";

function App() {
    let stylesbody = {
        padding: '0 5vw'
    };

    let data = PortfoliData;

    return (
        <div className="App" style={stylesbody}>
            <NavigaceWrap />
            <Switch>
                <Route exact="true" path="/">
                    <Uvodpage/>
                </Route>
                <Route exact="true" path="/portfolio">
                    <Portfoliopage data={data}/>
                </Route>
                <Route path="/onas">
                    <Onaspage/>
                </Route>
                <Route path="/kontakty">
                    <Kontaktypage/>
                </Route>
                {
                    data.map((data) => {
                        return <Route
                            exact="true"
                            key={data.id}
                            path={data.route}
                            component={() => <PortfolioDetail
                                jmeno={data.jmeno}
                                textLong={data.textLong}
                                url={data.url}
                                image={data.image}
                            />} />
                    })
                }
            </Switch>
        </div>
    );
}

export default App;
