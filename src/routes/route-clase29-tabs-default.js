/*
    *  ------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-tabs-default.js  --  /src/routes/route-clase29-tabs-default.js  -----  *
    *  ------------------------------------------------------------------------------------------  *
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
export const routeClase29TabsDefault = {
        id: 'clase29TabsDefault',
        favicon: favicon,
        pageTitle: 'Clase 29 - 13. Tabs - 01. Funcionalidad por defecto',
        path: '/clase29-usando-jquery-ui/13-tabs/01-default',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/74-tabs-default.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/74-tabs-default-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/74-tabs-default-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '74-tabs-default-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/74-tabs-default-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '74-tabs-default-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/74-tabs-default.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '74-tabs-default-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/74-tabs-default.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 13. Tabs - 01. Funcionalidad por defecto',
        styles: [
            { href: `${styles}/pages/clase-29/74-tabs-default.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/74-tabs-default.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'tabs' },
        ],
};
