/*
    *  --------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-spinner-currency.js  --  /src/routes/route-clase29-spinner-currency.js  -----  *
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
export const routeClase29SpinnerCurrency = {
        id: 'clase29SpinnerCurrency',
        favicon: favicon,
        pageTitle: 'Clase 29 - 12. Spinner - 02. Moneda',
        path: '/clase29-usando-jquery-ui/12-spinner/02-currency',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/69-spinner-currency.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/69-spinner-currency-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/69-spinner-currency-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '69-spinner-currency-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/69-spinner-currency-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '69-spinner-currency-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/69-spinner-currency.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '69-spinner-currency-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/69-spinner-currency.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 12. Spinner - 02. Moneda',
        styles: [
            { href: `${styles}/pages/clase-29/69-spinner-currency.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/69-spinner-currency.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'spinner' },
        ],
};
