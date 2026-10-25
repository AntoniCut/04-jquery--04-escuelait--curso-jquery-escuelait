/*
    *  ----------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-button-default.js  --  /src/routes/route-clase29-button-default.js  -----  *
    *  ----------------------------------------------------------------------------------------------  *
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
export const routeClase29ButtonDefault = {
        id: 'clase29ButtonDefault',
        favicon: favicon,
        pageTitle: 'Clase 29 - 03. Button - 01. Funcionalidad por defecto',
        path: '/clase29-usando-jquery-ui/03-button/01-default',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/19-button-default.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/19-button-default-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/19-button-default-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '19-button-default-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/19-button-default-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '19-button-default-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/19-button-default.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '19-button-default-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/19-button-default.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 03. Button - 01. Funcionalidad por defecto',
        styles: [
            { href: `${styles}/pages/clase-29/19-button-default.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/19-button-default.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'button' },
        ],
};
