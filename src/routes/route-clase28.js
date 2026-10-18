/*
    *  ----------------------------------------------------------------  *
    *  -----  route-clase28.js  --  /src/routes/route-clase28.js  -----  *
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
    scripts
} = paths;


/** @type {Route} */
export const routeClase28 = {
        id: 'clase28',
        favicon: favicon,
        pageTitle: 'Clase 28 - Librería de componentes jQuery UI',
        path: '/clase28-libreria-de-componentes-jquery-ui',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/00-libreria-de-componentes-jquery-ui.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 28 - Librería de componentes jQuery UI',
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
