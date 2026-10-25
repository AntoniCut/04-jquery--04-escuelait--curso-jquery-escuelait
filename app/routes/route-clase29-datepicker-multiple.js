/*
    *  --------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-datepicker-multiple.js  --  /src/routes/route-clase29-datepicker-multiple.js  -----  *
    *  --------------------------------------------------------------------------------------------------------  *
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
export const routeClase29DatepickerMultiple = {
        id: 'clase29DatepickerMultiple',
        favicon: favicon,
        pageTitle: 'Clase 29 - 06. Datepicker - 07. Varios meses',
        path: '/clase29-usando-jquery-ui/06-datepicker/07-multiple',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/34-datepicker-multiple.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/34-datepicker-multiple-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/34-datepicker-multiple-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '34-datepicker-multiple-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/34-datepicker-multiple-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '34-datepicker-multiple-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/34-datepicker-multiple.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '34-datepicker-multiple-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/34-datepicker-multiple.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 06. Datepicker - 07. Varios meses',
        styles: [
            { href: `${styles}/pages/clase-29/34-datepicker-multiple.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/34-datepicker-multiple.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'datepicker' },
        ],
};
