/*
    *  --------------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-autocomplete-remote-jsonp.js  --  /src/routes/route-clase29-autocomplete-remote-jsonp.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase29AutocompleteRemoteJsonp = {
        id: 'clase29AutocompleteRemoteJsonp',
        favicon: favicon,
        pageTitle: 'Clase 29 - 02. Autocomplete - 09. Origen remoto JSONP',
        path: '/clase29-usando-jquery-ui/02-autocomplete/09-remote-jsonp',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/15-autocomplete-remote-jsonp.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/15-autocomplete-remote-jsonp-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/15-autocomplete-remote-jsonp-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '15-autocomplete-remote-jsonp-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/15-autocomplete-remote-jsonp-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '15-autocomplete-remote-jsonp-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/15-autocomplete-remote-jsonp.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '15-autocomplete-remote-jsonp-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/15-autocomplete-remote-jsonp.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 02. Autocomplete - 09. Origen remoto JSONP',
        styles: [
            { href: `${styles}/pages/clase-29/15-autocomplete-remote-jsonp.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/15-autocomplete-remote-jsonp.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'autocomplete' },
        ],
};
