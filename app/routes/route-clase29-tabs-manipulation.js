/*
    *  ----------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-tabs-manipulation.js  --  /src/routes/route-clase29-tabs-manipulation.js  -----  *
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
export const routeClase29TabsManipulation = {
        id: 'clase29TabsManipulation',
        favicon: favicon,
        pageTitle: 'Clase 29 - 13. Tabs - 05. Manipulación simple',
        path: '/clase29-usando-jquery-ui/13-tabs/05-manipulation',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/78-tabs-manipulation.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/78-tabs-manipulation-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/78-tabs-manipulation-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '78-tabs-manipulation-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/78-tabs-manipulation-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '78-tabs-manipulation-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/78-tabs-manipulation.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '78-tabs-manipulation-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/78-tabs-manipulation.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 13. Tabs - 05. Manipulación simple',
        styles: [
            { href: `${styles}/pages/clase-29/78-tabs-manipulation.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/78-tabs-manipulation.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'button' },
            { name: 'tabs' },
        ],
};
