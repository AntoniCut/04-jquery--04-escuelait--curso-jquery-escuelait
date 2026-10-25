/*
    *  ------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-spinner-decimal.js  --  /src/routes/route-clase29-spinner-decimal.js  -----  *
    *  ------------------------------------------------------------------------------------------------  *
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
export const routeClase29SpinnerDecimal = {
        id: 'clase29SpinnerDecimal',
        favicon: favicon,
        pageTitle: 'Clase 29 - 12. Spinner - 03. Decimal',
        path: '/clase29-usando-jquery-ui/12-spinner/03-decimal',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/70-spinner-decimal.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/70-spinner-decimal-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/70-spinner-decimal-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '70-spinner-decimal-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/70-spinner-decimal-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '70-spinner-decimal-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/70-spinner-decimal.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '70-spinner-decimal-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/70-spinner-decimal.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 12. Spinner - 03. Decimal',
        styles: [
            { href: `${styles}/pages/clase-29/70-spinner-decimal.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/70-spinner-decimal.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'spinner' },
        ],
};
