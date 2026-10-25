/*
    *  ----------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-selectmenu-rendering.js  --  /src/routes/route-clase29-selectmenu-rendering.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------  *
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
export const routeClase29SelectmenuRendering = {
        id: 'clase29SelectmenuRendering',
        favicon: favicon,
        pageTitle: 'Clase 29 - 10. Selectmenu - 02. Presentación propia',
        path: '/clase29-usando-jquery-ui/10-selectmenu/02-rendering',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/55-selectmenu-rendering.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/55-selectmenu-rendering-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/55-selectmenu-rendering-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '55-selectmenu-rendering-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/55-selectmenu-rendering-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '55-selectmenu-rendering-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/55-selectmenu-rendering.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '55-selectmenu-rendering-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/55-selectmenu-rendering.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 10. Selectmenu - 02. Presentación propia',
        styles: [
            { href: `${styles}/pages/clase-29/55-selectmenu-rendering.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/55-selectmenu-rendering.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'selectmenu' },
        ],
};
