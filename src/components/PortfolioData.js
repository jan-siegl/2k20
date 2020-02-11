import gpfclogo from "../images/gpfc.png";
import azavslogo from "../images/azavs.png";
import oldephilogo from "../images/ephiweb.png";
import ckpanterlogo from "../images/panter.png";

let PortfolioData = [
    {
        id: 1,
        route: "/gpfc",
        jmeno: "GPFC - Parkour Praha",
        text: "Web a brand design pro pražský parkourový klub GPFC s e-shopem a přihlašovacím systémem",
        image: gpfclogo,
        url: "https://www.parkourpraha.cz/"
    },
    {
        id: 2,
        route: "/azavs",
        jmeno: "Azavs",
        text: "Jednoduchá a minimalistická stránka pro stavební firmu Azavs s.r.o.",
        image: azavslogo,
        url: "http://azavs.cz/"
    },
    {
        id: 3,
        route: "/ephicz",
        jmeno: "Původní stránka Ephi.cz",
        text: "Náš původní design, od kterého jsme se posunuli směrem k přívětivějšímu a přehlednějšímu",
        image: oldephilogo,
        url: "https://ephi.cz/"
    },
    {
        id: 4,
        route: "/ckpanter",
        jmeno: "CKPanter",
        text: "Wordpress stránka pro cestovní kancelář CKPanter s jednoduchým admin systémem pro snadné aktualizování a upravování",
        image: ckpanterlogo,
        url: "http://www.ckpanter.cz/"
    }
];

export default PortfolioData