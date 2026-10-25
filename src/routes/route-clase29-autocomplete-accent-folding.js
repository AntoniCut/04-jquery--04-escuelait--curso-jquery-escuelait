/*
    *  ------------------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-autocomplete-accent-folding.js  --  /src/routes/route-clase29-autocomplete-accent-folding.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase29AutocompleteAccentFolding = {
        id: 'clase29AutocompleteAccentFolding',
        favicon: favicon,
        pageTitle: 'Clase 29 - 02. Autocomplete - 02. Ignorar acentos',
        path: '/clase29-usando-jquery-ui/02-autocomplete/02-accent-folding',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/08-autocomplete-accent-folding.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/08-autocomplete-accent-folding-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/08-autocomplete-accent-folding-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '08-autocomplete-accent-folding-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/08-autocomplete-accent-folding-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '08-autocomplete-accent-folding-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/08-autocomplete-accent-folding.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '08-autocomplete-accent-folding-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/08-autocomplete-accent-folding.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 02. Autocomplete - 02. Ignorar acentos',
        styles: [
            { href: `${styles}/pages/clase-29/08-autocomplete-accent-folding.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/08-autocomplete-accent-folding.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'autocomplete' },
        ],
};
