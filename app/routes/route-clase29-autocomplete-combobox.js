/*
    *  ------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-autocomplete-combobox.js  --  /src/routes/route-clase29-autocomplete-combobox.js  -----  *
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
export const routeClase29AutocompleteCombobox = {
        id: 'clase29AutocompleteCombobox',
        favicon: favicon,
        pageTitle: 'Clase 29 - 02. Autocomplete - 04. Lista combinada',
        path: '/clase29-usando-jquery-ui/02-autocomplete/04-combobox',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/10-autocomplete-combobox.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/10-autocomplete-combobox-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/10-autocomplete-combobox-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '10-autocomplete-combobox-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/10-autocomplete-combobox-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '10-autocomplete-combobox-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/10-autocomplete-combobox.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '10-autocomplete-combobox-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/10-autocomplete-combobox.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 02. Autocomplete - 04. Lista combinada',
        styles: [
            { href: `${styles}/pages/clase-29/10-autocomplete-combobox.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/10-autocomplete-combobox.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'button' },
            { name: 'autocomplete' },
        ],
};
