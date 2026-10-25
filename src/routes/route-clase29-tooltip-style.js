/*
    *  --------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-tooltip-style.js  --  /src/routes/route-clase29-tooltip-style.js  -----  *
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
export const routeClase29TooltipStyle = {
        id: 'clase29TooltipStyle',
        favicon: favicon,
        pageTitle: 'Clase 29 - 14. Tooltip - 04. Estilo propio',
        path: '/clase29-usando-jquery-ui/14-tooltip/04-style',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/84-tooltip-style.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/84-tooltip-style-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/84-tooltip-style-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '84-tooltip-style-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/84-tooltip-style-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '84-tooltip-style-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/84-tooltip-style.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '84-tooltip-style-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/84-tooltip-style.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 14. Tooltip - 04. Estilo propio',
        styles: [
            { href: `${styles}/pages/clase-29/84-tooltip-style.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/84-tooltip-style.js` },
        ],
        libs: [
            { name: 'tooltip' },
        ],
};
