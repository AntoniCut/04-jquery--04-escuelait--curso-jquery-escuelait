/*
    *  --------------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-autocomplete-remote-cache.js  --  /src/routes/route-clase29-autocomplete-remote-cache.js  -----  *
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
export const routeClase29AutocompleteRemoteCache = {
        id: 'clase29AutocompleteRemoteCache',
        favicon: favicon,
        pageTitle: 'Clase 29 - 02. Autocomplete - 10. Origen remoto con caché',
        path: '/clase29-usando-jquery-ui/02-autocomplete/10-remote-cache',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/16-autocomplete-remote-cache.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/16-autocomplete-remote-cache-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/16-autocomplete-remote-cache-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '16-autocomplete-remote-cache-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/16-autocomplete-remote-cache-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '16-autocomplete-remote-cache-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/16-autocomplete-remote-cache.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '16-autocomplete-remote-cache-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/16-autocomplete-remote-cache.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 02. Autocomplete - 10. Origen remoto con caché',
        styles: [
            { href: `${styles}/pages/clase-29/16-autocomplete-remote-cache.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/16-autocomplete-remote-cache.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'autocomplete' },
        ],
};
