/*
    *  ----------------------------------------------------------------  *
    *  -----  route-clase30.js  --  /src/routes/route-clase30.js  -----  *
    *  ----------------------------------------------------------------  *
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
    scripts,
} = paths;


/** @type {Route} */
export const routeClase30 = {
        id: 'clase30',
        favicon: favicon,
        pageTitle: 'Clase 30 - Práctica 2',
        path: '/clase30-practica-2',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-30/00-practica-2.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-30/layout-aside-clase-30.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 30 - Práctica 2',
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
        ],
};
