/*
    *  ------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-tooltip-content.js  --  /src/routes/route-clase29-tooltip-content.js  -----  *
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
export const routeClase29TooltipContent = {
        id: 'clase29TooltipContent',
        favicon: favicon,
        pageTitle: 'Clase 29 - 14. Tooltip - 03. Contenido propio',
        path: '/clase29-usando-jquery-ui/14-tooltip/03-content',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/83-tooltip-content.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/83-tooltip-content-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/83-tooltip-content-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '83-tooltip-content-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/83-tooltip-content-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '83-tooltip-content-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/83-tooltip-content.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '83-tooltip-content-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/83-tooltip-content.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 14. Tooltip - 03. Contenido propio',
        styles: [
            { href: `${styles}/pages/clase-29/83-tooltip-content.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/83-tooltip-content.js` },
        ],
        libs: [
            { name: 'tooltip' },
        ],
};
