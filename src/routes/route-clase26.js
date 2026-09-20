/*
    *  ----------------------------------------------------------------  *
    *  -----  route-clase26.js  --  /src/routes/route-clase26.js  -----  *
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
export const routeClase26 = {
        id: 'clase26',
        favicon: favicon,
        pageTitle: 'Clase 26 - Variables gestión de opciones en plugins',
        path: '/clase26-variables-gestion-opciones-plugins',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-26/00-variables-gestion-opciones-plugins.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-26/layout-aside-clase-26.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 26 - Variables gestión de opciones en plugins',
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
