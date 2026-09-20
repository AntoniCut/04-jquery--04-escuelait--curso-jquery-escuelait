/*
    *  ------------------------------------------------------------------------------  *
    *  -----  route-clase26-extend.js  --  /src/routes/route-clase26-extend.js  -----  *
    *  ------------------------------------------------------------------------------  *
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
    pagesComponents,
    layoutFooter,
    styles,
    scripts,
    markdownShikiHtml,
} = paths;


/** @type {Route} */
export const routeClase26Extend = {
        id: 'clase26Extend',
        favicon: favicon,
        pageTitle: 'Clase 26 - 1. Extend',
        path: '/clase26-variables-gestion-opciones-plugins/01-extend',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-26/01-extend.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-26/layout-aside-clase-26.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-26/01-extend-description.html`, target: '[data-component-page="extendDescription"]' },
            { url: `${pagesComponents}/clase-26/01-extend-demo.html`, target: '[data-component-page="extendDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-extend-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-26/01-extend-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-26`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-extend-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-26/01-extend.css`,
                urlOutput: `${markdownShikiHtml}/clase-26`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '01-extend-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-26/01-extend.js`,
                urlOutput: `${markdownShikiHtml}/clase-26`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 26 - 1. Extend',
        styles: [
            { href: `${styles}/pages/clase-26/01-extend.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-26/01-extend.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
