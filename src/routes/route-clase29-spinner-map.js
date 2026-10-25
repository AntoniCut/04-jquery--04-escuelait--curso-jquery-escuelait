/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  route-clase29-spinner-map.js  --  /src/routes/route-clase29-spinner-map.js  -----  *
    *  ----------------------------------------------------------------------------------------  *
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
export const routeClase29SpinnerMap = {
        id: 'clase29SpinnerMap',
        favicon: favicon,
        pageTitle: 'Clase 29 - 12. Spinner - 04. Mapa',
        path: '/clase29-usando-jquery-ui/12-spinner/04-map',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/71-spinner-map.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/71-spinner-map-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/71-spinner-map-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '71-spinner-map-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/71-spinner-map-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '71-spinner-map-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/71-spinner-map.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '71-spinner-map-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/71-spinner-map.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 12. Spinner - 04. Mapa',
        styles: [
            { href: `${styles}/pages/clase-29/71-spinner-map.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/71-spinner-map.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'spinner' },
        ],
};
