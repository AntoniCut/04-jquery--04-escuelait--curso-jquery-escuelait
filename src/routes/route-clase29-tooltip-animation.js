/*
    *  ----------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-tooltip-animation.js  --  /src/routes/route-clase29-tooltip-animation.js  -----  *
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
export const routeClase29TooltipAnimation = {
        id: 'clase29TooltipAnimation',
        favicon: favicon,
        pageTitle: 'Clase 29 - 14. Tooltip - 02. Animación propia',
        path: '/clase29-usando-jquery-ui/14-tooltip/02-animation',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/82-tooltip-animation.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/82-tooltip-animation-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/82-tooltip-animation-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '82-tooltip-animation-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/82-tooltip-animation-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '82-tooltip-animation-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/82-tooltip-animation.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '82-tooltip-animation-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/82-tooltip-animation.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 14. Tooltip - 02. Animación propia',
        styles: [
            { href: `${styles}/pages/clase-29/82-tooltip-animation.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/82-tooltip-animation.js` },
        ],
        libs: [
            { name: 'effects' },
            { name: 'tooltip' },
        ],
};
