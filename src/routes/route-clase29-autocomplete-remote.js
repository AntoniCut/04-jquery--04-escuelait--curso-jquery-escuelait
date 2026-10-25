/*
    *  --------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-autocomplete-remote.js  --  /src/routes/route-clase29-autocomplete-remote.js  -----  *
    *  --------------------------------------------------------------------------------------------------------  *
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
export const routeClase29AutocompleteRemote = {
        id: 'clase29AutocompleteRemote',
        favicon: favicon,
        pageTitle: 'Clase 29 - 02. Autocomplete - 08. Origen remoto',
        path: '/clase29-usando-jquery-ui/02-autocomplete/08-remote',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/14-autocomplete-remote.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/14-autocomplete-remote-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/14-autocomplete-remote-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '14-autocomplete-remote-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/14-autocomplete-remote-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '14-autocomplete-remote-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/14-autocomplete-remote.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '14-autocomplete-remote-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/14-autocomplete-remote.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 02. Autocomplete - 08. Origen remoto',
        styles: [
            { href: `${styles}/pages/clase-29/14-autocomplete-remote.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/14-autocomplete-remote.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'autocomplete' },
        ],
};
