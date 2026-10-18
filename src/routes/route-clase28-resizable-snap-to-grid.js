/*
    *  --------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-resizable-snap-to-grid.js  --  /src/routes/route-clase28-resizable-snap-to-grid.js  -----  *
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
export const routeClase28ResizableSnapToGrid = {
        id: 'clase28ResizableSnapToGrid',
        favicon: favicon,
        pageTitle: 'Clase 28 - 26. Ajuste a la rejilla',
        path: '/clase28-libreria-de-componentes-jquery-ui/26-resizable-snap-to-grid',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/26-resizable-snap-to-grid.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/26-resizable-snap-to-grid-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/26-resizable-snap-to-grid-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '26-resizable-snap-to-grid-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/26-resizable-snap-to-grid-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '26-resizable-snap-to-grid-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/26-resizable-snap-to-grid.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '26-resizable-snap-to-grid-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/26-resizable-snap-to-grid.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 26. Ajuste a la rejilla',
        styles: [
            { href: `${styles}/pages/clase-28/26-resizable-snap-to-grid.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/26-resizable-snap-to-grid.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
            { name: 'resizable' },
        ],
};
