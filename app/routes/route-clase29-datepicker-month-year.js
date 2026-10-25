/*
    *  ------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-datepicker-month-year.js  --  /src/routes/route-clase29-datepicker-month-year.js  -----  *
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
export const routeClase29DatepickerMonthYear = {
        id: 'clase29DatepickerMonthYear',
        favicon: favicon,
        pageTitle: 'Clase 29 - 06. Datepicker - 06. Menús de mes y año',
        path: '/clase29-usando-jquery-ui/06-datepicker/06-month-year',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/33-datepicker-month-year.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/33-datepicker-month-year-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/33-datepicker-month-year-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '33-datepicker-month-year-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/33-datepicker-month-year-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '33-datepicker-month-year-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/33-datepicker-month-year.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '33-datepicker-month-year-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/33-datepicker-month-year.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 06. Datepicker - 06. Menús de mes y año',
        styles: [
            { href: `${styles}/pages/clase-29/33-datepicker-month-year.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/33-datepicker-month-year.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'datepicker' },
        ],
};
