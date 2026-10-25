/*
    *  ----------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-datepicker-format.js  --  /src/routes/route-clase29-datepicker-format.js  -----  *
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
export const routeClase29DatepickerFormat = {
        id: 'clase29DatepickerFormat',
        favicon: favicon,
        pageTitle: 'Clase 29 - 06. Datepicker - 08. Formato de fecha',
        path: '/clase29-usando-jquery-ui/06-datepicker/08-format',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/35-datepicker-format.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/35-datepicker-format-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/35-datepicker-format-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '35-datepicker-format-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/35-datepicker-format-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '35-datepicker-format-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/35-datepicker-format.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '35-datepicker-format-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/35-datepicker-format.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 06. Datepicker - 08. Formato de fecha',
        styles: [
            { href: `${styles}/pages/clase-29/35-datepicker-format.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/35-datepicker-format.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'datepicker' },
        ],
};
