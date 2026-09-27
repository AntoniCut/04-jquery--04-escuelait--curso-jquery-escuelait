/*
    *  ----------------------------------------------------------------  *
    *  -----  route-clase27.js  --  /src/routes/route-clase27.js  -----  *
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
export const routeClase27 = {
        id: 'clase27',
        favicon: favicon,
        pageTitle: 'Clase 27 - Técnicas para desarrollo de plugins complejos',
        path: '/clase27-tecnicas-desarrollo-plugins-complejos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-27/00-tecnicas-desarrollo-plugins-complejos.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-27/layout-aside-clase-27.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 27 - Técnicas para desarrollo de plugins complejos',
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
