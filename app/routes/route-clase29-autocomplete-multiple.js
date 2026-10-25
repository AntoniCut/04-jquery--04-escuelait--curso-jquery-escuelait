/*
    *  ------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-autocomplete-multiple.js  --  /src/routes/route-clase29-autocomplete-multiple.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------  *
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
export const routeClase29AutocompleteMultiple = {
        id: 'clase29AutocompleteMultiple',
        favicon: favicon,
        pageTitle: 'Clase 29 - 02. Autocomplete - 06. Varios valores',
        path: '/clase29-usando-jquery-ui/02-autocomplete/06-multiple',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/12-autocomplete-multiple.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/12-autocomplete-multiple-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/12-autocomplete-multiple-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '12-autocomplete-multiple-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/12-autocomplete-multiple-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '12-autocomplete-multiple-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/12-autocomplete-multiple.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '12-autocomplete-multiple-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/12-autocomplete-multiple.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 02. Autocomplete - 06. Varios valores',
        styles: [
            { href: `${styles}/pages/clase-29/12-autocomplete-multiple.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/12-autocomplete-multiple.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'autocomplete' },
        ],
};
