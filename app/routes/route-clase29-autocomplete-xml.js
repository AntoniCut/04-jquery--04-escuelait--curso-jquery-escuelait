/*
    *  --------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-autocomplete-xml.js  --  /src/routes/route-clase29-autocomplete-xml.js  -----  *
    *  --------------------------------------------------------------------------------------------------  *
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
export const routeClase29AutocompleteXml = {
        id: 'clase29AutocompleteXml',
        favicon: favicon,
        pageTitle: 'Clase 29 - 02. Autocomplete - 12. XML leído una vez',
        path: '/clase29-usando-jquery-ui/02-autocomplete/12-xml',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/18-autocomplete-xml.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/18-autocomplete-xml-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/18-autocomplete-xml-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '18-autocomplete-xml-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/18-autocomplete-xml-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '18-autocomplete-xml-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/18-autocomplete-xml.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '18-autocomplete-xml-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/18-autocomplete-xml.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 02. Autocomplete - 12. XML leído una vez',
        styles: [
            { href: `${styles}/pages/clase-29/18-autocomplete-xml.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/18-autocomplete-xml.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'autocomplete' },
        ],
};
