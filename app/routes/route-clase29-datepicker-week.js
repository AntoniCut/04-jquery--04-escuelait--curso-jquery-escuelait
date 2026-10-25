/*
    *  ------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-datepicker-week.js  --  /src/routes/route-clase29-datepicker-week.js  -----  *
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
export const routeClase29DatepickerWeek = {
        id: 'clase29DatepickerWeek',
        favicon: favicon,
        pageTitle: 'Clase 29 - 06. Datepicker - 14. Semana del año',
        path: '/clase29-usando-jquery-ui/06-datepicker/14-week',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/41-datepicker-week.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/41-datepicker-week-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/41-datepicker-week-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '41-datepicker-week-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/41-datepicker-week-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '41-datepicker-week-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/41-datepicker-week.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '41-datepicker-week-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/41-datepicker-week.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 06. Datepicker - 14. Semana del año',
        styles: [
            { href: `${styles}/pages/clase-29/41-datepicker-week.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/41-datepicker-week.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'datepicker' },
        ],
};
