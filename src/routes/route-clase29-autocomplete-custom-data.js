/*
    *  ------------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-autocomplete-custom-data.js  --  /src/routes/route-clase29-autocomplete-custom-data.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase29AutocompleteCustomData = {
        id: 'clase29AutocompleteCustomData',
        favicon: favicon,
        pageTitle: 'Clase 29 - 02. Autocomplete - 05. Datos y presentación propios',
        path: '/clase29-usando-jquery-ui/02-autocomplete/05-custom-data',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/11-autocomplete-custom-data.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/11-autocomplete-custom-data-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/11-autocomplete-custom-data-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '11-autocomplete-custom-data-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/11-autocomplete-custom-data-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '11-autocomplete-custom-data-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/11-autocomplete-custom-data.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '11-autocomplete-custom-data-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/11-autocomplete-custom-data.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 02. Autocomplete - 05. Datos y presentación propios',
        styles: [
            { href: `${styles}/pages/clase-29/11-autocomplete-custom-data.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/11-autocomplete-custom-data.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'autocomplete' },
        ],
};
