/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase25.js  --  /src/routes/route-clase25.js  -----  *
    *  -----------------------------------------------------------------  *
*/


import { paths } from './paths.js';

/// <reference path="../../../types/route.d.js" />


/** - Desestructuracion de paths */
const {
    favicon,
    layoutHeader,
    btnNavbar,
    btnNavbarThemesJQueryUI,
    layoutNavbar,
    layoutNavbarThemesUI,
    layoutAsideLeft,
    layoutAsidePages,
    pages,
    layoutFooter,
    scripts
} = paths;


/** @type {Route} */
export const routeClase25 = {
        id: 'clase25',
        favicon: favicon,
        pageTitle: 'Clase 25 - jQuery Plugins',
        path: '/clase25-jquery-plugins',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-25/00-clase-25-jquery-plugins.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-25/layout-aside-clase-25.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 25 - jQuery Plugins',
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
