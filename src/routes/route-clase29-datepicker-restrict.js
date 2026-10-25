/*
    *  --------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-datepicker-restrict.js  --  /src/routes/route-clase29-datepicker-restrict.js  -----  *
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
export const routeClase29DatepickerRestrict = {
        id: 'clase29DatepickerRestrict',
        favicon: favicon,
        pageTitle: 'Clase 29 - 06. Datepicker - 12. Limitar el rango',
        path: '/clase29-usando-jquery-ui/06-datepicker/12-restrict',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/39-datepicker-restrict.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/39-datepicker-restrict-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/39-datepicker-restrict-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '39-datepicker-restrict-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/39-datepicker-restrict-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '39-datepicker-restrict-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/39-datepicker-restrict.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '39-datepicker-restrict-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/39-datepicker-restrict.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 06. Datepicker - 12. Limitar el rango',
        styles: [
            { href: `${styles}/pages/clase-29/39-datepicker-restrict.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/39-datepicker-restrict.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'datepicker' },
        ],
};
