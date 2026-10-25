/*
    *  ------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-datepicker-button-bar.js  --  /src/routes/route-clase29-datepicker-button-bar.js  -----  *
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
export const routeClase29DatepickerButtonBar = {
        id: 'clase29DatepickerButtonBar',
        favicon: favicon,
        pageTitle: 'Clase 29 - 06. Datepicker - 04. Barra de botones',
        path: '/clase29-usando-jquery-ui/06-datepicker/04-button-bar',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/31-datepicker-button-bar.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/31-datepicker-button-bar-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/31-datepicker-button-bar-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '31-datepicker-button-bar-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/31-datepicker-button-bar-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '31-datepicker-button-bar-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/31-datepicker-button-bar.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '31-datepicker-button-bar-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/31-datepicker-button-bar.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 06. Datepicker - 04. Barra de botones',
        styles: [
            { href: `${styles}/pages/clase-29/31-datepicker-button-bar.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/31-datepicker-button-bar.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'datepicker' },
        ],
};
