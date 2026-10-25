/*
    *  ----------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-datepicker-other-months.js  --  /src/routes/route-clase29-datepicker-other-months.js  -----  *
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
export const routeClase29DatepickerOtherMonths = {
        id: 'clase29DatepickerOtherMonths',
        favicon: favicon,
        pageTitle: 'Clase 29 - 06. Datepicker - 03. Días de otros meses',
        path: '/clase29-usando-jquery-ui/06-datepicker/03-other-months',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/30-datepicker-other-months.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/30-datepicker-other-months-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/30-datepicker-other-months-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '30-datepicker-other-months-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/30-datepicker-other-months-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '30-datepicker-other-months-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/30-datepicker-other-months.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '30-datepicker-other-months-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/30-datepicker-other-months.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 06. Datepicker - 03. Días de otros meses',
        styles: [
            { href: `${styles}/pages/clase-29/30-datepicker-other-months.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/30-datepicker-other-months.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'datepicker' },
        ],
};
