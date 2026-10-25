/*
    *  ----------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-datepicker-inline.js  --  /src/routes/route-clase29-datepicker-inline.js  -----  *
    *  ----------------------------------------------------------------------------------------------------  *
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
export const routeClase29DatepickerInline = {
        id: 'clase29DatepickerInline',
        favicon: favicon,
        pageTitle: 'Clase 29 - 06. Datepicker - 05. En línea',
        path: '/clase29-usando-jquery-ui/06-datepicker/05-inline',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/32-datepicker-inline.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/32-datepicker-inline-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/32-datepicker-inline-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '32-datepicker-inline-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/32-datepicker-inline-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '32-datepicker-inline-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/32-datepicker-inline.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '32-datepicker-inline-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/32-datepicker-inline.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 06. Datepicker - 05. En línea',
        styles: [
            { href: `${styles}/pages/clase-29/32-datepicker-inline.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/32-datepicker-inline.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'datepicker' },
        ],
};
