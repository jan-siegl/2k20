import React from 'react';
import './App.css';
import Portfolio from './components/portfolio';
import Navigace from './components/navigace';
import Uvod from './components/uvod';
import Onas from './components/onas';
import Kontakty from "./components/kontakty";
import Portfoliopage from "./components/portfoliopage";

function App() {
    let stylesbody = {
        padding: '0 5vw'
    };

    return (
        <div className="App">
            <header className="App-header" style={stylesbody}>
               <Navigace/>
               <Uvod/>
               <Portfolio/>
               <Onas/>
               <Kontakty/>
            </header>
        </div>
    );
}

export default App;
