/*
    *  ------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-spinner-time.js  --  /src/routes/route-clase29-spinner-time.js  -----  *
    *  ------------------------------------------------------------------------------------------  *
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
export const routeClase29SpinnerTime = {
        id: 'clase29SpinnerTime',
        favicon: favicon,
        pageTitle: 'Clase 29 - 12. Spinner - 06. Hora',
        path: '/clase29-usando-jquery-ui/12-spinner/06-time',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/73-spinner-time.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/73-spinner-time-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/73-spinner-time-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '73-spinner-time-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/73-spinner-time-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '73-spinner-time-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/73-spinner-time.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '73-spinner-time-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/73-spinner-time.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 12. Spinner - 06. Hora',
        styles: [
            { href: `${styles}/pages/clase-29/73-spinner-time.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/73-spinner-time.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'spinner' },
        ],
};
