/*
    *  --------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-resizable-aspect-ratio.js  --  /src/routes/route-clase28-resizable-aspect-ratio.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------  *
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
export const routeClase28ResizableAspectRatio = {
        id: 'clase28ResizableAspectRatio',
        favicon: favicon,
        pageTitle: 'Clase 28 - 25. Conservar la proporción',
        path: '/clase28-libreria-de-componentes-jquery-ui/25-resizable-aspect-ratio',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/25-resizable-aspect-ratio.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/25-resizable-aspect-ratio-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/25-resizable-aspect-ratio-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '25-resizable-aspect-ratio-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/25-resizable-aspect-ratio-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '25-resizable-aspect-ratio-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/25-resizable-aspect-ratio.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '25-resizable-aspect-ratio-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/25-resizable-aspect-ratio.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 25. Conservar la proporción',
        styles: [
            { href: `${styles}/pages/clase-28/25-resizable-aspect-ratio.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/25-resizable-aspect-ratio.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
            { name: 'resizable' },
        ],
};
