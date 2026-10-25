/*
    *  ----------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-datepicker-alternate.js  --  /src/routes/route-clase29-datepicker-alternate.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------  *
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
export const routeClase29DatepickerAlternate = {
        id: 'clase29DatepickerAlternate',
        favicon: favicon,
        pageTitle: 'Clase 29 - 06. Datepicker - 11. Campo alternativo',
        path: '/clase29-usando-jquery-ui/06-datepicker/11-alternate',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/38-datepicker-alternate.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/38-datepicker-alternate-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/38-datepicker-alternate-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '38-datepicker-alternate-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/38-datepicker-alternate-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '38-datepicker-alternate-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/38-datepicker-alternate.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '38-datepicker-alternate-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/38-datepicker-alternate.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 06. Datepicker - 11. Campo alternativo',
        styles: [
            { href: `${styles}/pages/clase-29/38-datepicker-alternate.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/38-datepicker-alternate.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'datepicker' },
        ],
};
