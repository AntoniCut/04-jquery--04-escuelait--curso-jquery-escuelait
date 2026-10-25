/*
    *  --------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-datepicker-localize.js  --  /src/routes/route-clase29-datepicker-localize.js  -----  *
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
export const routeClase29DatepickerLocalize = {
        id: 'clase29DatepickerLocalize',
        favicon: favicon,
        pageTitle: 'Clase 29 - 06. Datepicker - 10. Calendario en español',
        path: '/clase29-usando-jquery-ui/06-datepicker/10-localize',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/37-datepicker-localize.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/37-datepicker-localize-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/37-datepicker-localize-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '37-datepicker-localize-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/37-datepicker-localize-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '37-datepicker-localize-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/37-datepicker-localize.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '37-datepicker-localize-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/37-datepicker-localize.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 06. Datepicker - 10. Calendario en español',
        styles: [
            { href: `${styles}/pages/clase-29/37-datepicker-localize.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/37-datepicker-localize.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'datepicker' },
        ],
};
