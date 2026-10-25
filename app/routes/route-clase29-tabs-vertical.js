/*
    *  --------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-tabs-vertical.js  --  /src/routes/route-clase29-tabs-vertical.js  -----  *
    *  --------------------------------------------------------------------------------------------  *
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
export const routeClase29TabsVertical = {
        id: 'clase29TabsVertical',
        favicon: favicon,
        pageTitle: 'Clase 29 - 13. Tabs - 07. Pestañas verticales',
        path: '/clase29-usando-jquery-ui/13-tabs/07-vertical',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/80-tabs-vertical.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/80-tabs-vertical-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/80-tabs-vertical-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '80-tabs-vertical-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/80-tabs-vertical-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '80-tabs-vertical-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/80-tabs-vertical.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '80-tabs-vertical-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/80-tabs-vertical.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 13. Tabs - 07. Pestañas verticales',
        styles: [
            { href: `${styles}/pages/clase-29/80-tabs-vertical.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/80-tabs-vertical.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'tabs' },
        ],
};
