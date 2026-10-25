/*
    *  --------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-datepicker-range.js  --  /src/routes/route-clase29-datepicker-range.js  -----  *
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
export const routeClase29DatepickerRange = {
        id: 'clase29DatepickerRange',
        favicon: favicon,
        pageTitle: 'Clase 29 - 06. Datepicker - 13. Elegir un rango',
        path: '/clase29-usando-jquery-ui/06-datepicker/13-range',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/40-datepicker-range.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/40-datepicker-range-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/40-datepicker-range-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '40-datepicker-range-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/40-datepicker-range-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '40-datepicker-range-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/40-datepicker-range.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '40-datepicker-range-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/40-datepicker-range.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 06. Datepicker - 13. Elegir un rango',
        styles: [
            { href: `${styles}/pages/clase-29/40-datepicker-range.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/40-datepicker-range.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'datepicker' },
        ],
};
