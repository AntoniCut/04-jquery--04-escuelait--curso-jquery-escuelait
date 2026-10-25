/*
    *  ------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-datepicker-icon.js  --  /src/routes/route-clase29-datepicker-icon.js  -----  *
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
export const routeClase29DatepickerIcon = {
        id: 'clase29DatepickerIcon',
        favicon: favicon,
        pageTitle: 'Clase 29 - 06. Datepicker - 09. Icono para abrir',
        path: '/clase29-usando-jquery-ui/06-datepicker/09-icon',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/36-datepicker-icon.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/36-datepicker-icon-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/36-datepicker-icon-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '36-datepicker-icon-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/36-datepicker-icon-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '36-datepicker-icon-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/36-datepicker-icon.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '36-datepicker-icon-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/36-datepicker-icon.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 06. Datepicker - 09. Icono para abrir',
        styles: [
            { href: `${styles}/pages/clase-29/36-datepicker-icon.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/36-datepicker-icon.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'datepicker' },
        ],
};
