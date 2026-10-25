/*
    *  ----------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-tooltip-player.js  --  /src/routes/route-clase29-tooltip-player.js  -----  *
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
export const routeClase29TooltipPlayer = {
        id: 'clase29TooltipPlayer',
        favicon: favicon,
        pageTitle: 'Clase 29 - 14. Tooltip - 07. Reproductor',
        path: '/clase29-usando-jquery-ui/14-tooltip/07-player',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/87-tooltip-player.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/87-tooltip-player-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/87-tooltip-player-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '87-tooltip-player-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/87-tooltip-player-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '87-tooltip-player-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/87-tooltip-player.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '87-tooltip-player-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/87-tooltip-player.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 14. Tooltip - 07. Reproductor',
        styles: [
            { href: `${styles}/pages/clase-29/87-tooltip-player.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/87-tooltip-player.js` },
        ],
        libs: [
            { name: 'effects' },
            { name: 'tooltip' },
            { name: 'button' },
            { name: 'menu' },
            { name: 'controlgroup' },
        ],
};
