/*
    *  --------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-tooltip-track.js  --  /src/routes/route-clase29-tooltip-track.js  -----  *
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
export const routeClase29TooltipTrack = {
        id: 'clase29TooltipTrack',
        favicon: favicon,
        pageTitle: 'Clase 29 - 14. Tooltip - 06. Seguir el ratón',
        path: '/clase29-usando-jquery-ui/14-tooltip/06-track',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/86-tooltip-track.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/86-tooltip-track-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/86-tooltip-track-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '86-tooltip-track-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/86-tooltip-track-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '86-tooltip-track-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/86-tooltip-track.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '86-tooltip-track-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/86-tooltip-track.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 14. Tooltip - 06. Seguir el ratón',
        styles: [
            { href: `${styles}/pages/clase-29/86-tooltip-track.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/86-tooltip-track.js` },
        ],
        libs: [
            { name: 'tooltip' },
        ],
};
