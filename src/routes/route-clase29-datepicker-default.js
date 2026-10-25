/*
    *  ------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-datepicker-default.js  --  /src/routes/route-clase29-datepicker-default.js  -----  *
    *  ------------------------------------------------------------------------------------------------------  *
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
export const routeClase29DatepickerDefault = {
        id: 'clase29DatepickerDefault',
        favicon: favicon,
        pageTitle: 'Clase 29 - 06. Datepicker - 01. Funcionalidad por defecto',
        path: '/clase29-usando-jquery-ui/06-datepicker/01-default',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/28-datepicker-default.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/28-datepicker-default-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/28-datepicker-default-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '28-datepicker-default-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/28-datepicker-default-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '28-datepicker-default-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/28-datepicker-default.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '28-datepicker-default-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/28-datepicker-default.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 06. Datepicker - 01. Funcionalidad por defecto',
        styles: [
            { href: `${styles}/pages/clase-29/28-datepicker-default.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/28-datepicker-default.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'datepicker' },
        ],
};
