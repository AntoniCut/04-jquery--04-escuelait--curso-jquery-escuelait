/*
    *  ----------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-autocomplete-scrollable.js  --  /src/routes/route-clase29-autocomplete-scrollable.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------  *
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
export const routeClase29AutocompleteScrollable = {
        id: 'clase29AutocompleteScrollable',
        favicon: favicon,
        pageTitle: 'Clase 29 - 02. Autocomplete - 11. Resultados con desplazamiento',
        path: '/clase29-usando-jquery-ui/02-autocomplete/11-scrollable',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/17-autocomplete-scrollable.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/17-autocomplete-scrollable-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/17-autocomplete-scrollable-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '17-autocomplete-scrollable-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/17-autocomplete-scrollable-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '17-autocomplete-scrollable-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/17-autocomplete-scrollable.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '17-autocomplete-scrollable-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/17-autocomplete-scrollable.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 02. Autocomplete - 11. Resultados con desplazamiento',
        styles: [
            { href: `${styles}/pages/clase-29/17-autocomplete-scrollable.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/17-autocomplete-scrollable.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'autocomplete' },
        ],
};
