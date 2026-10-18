/*
    *  ----------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-resizable-max-min.js  --  /src/routes/route-clase28-resizable-max-min.js  -----  *
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
export const routeClase28ResizableMaxMin = {
        id: 'clase28ResizableMaxMin',
        favicon: favicon,
        pageTitle: 'Clase 28 - 04. Interacción Resizable - 05. Tamaño máximo y mínimo',
        path: '/clase28-libreria-de-componentes-jquery-ui/04-interaccion-resizable/05-max-min',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/24-resizable-max-min.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/24-resizable-max-min-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/24-resizable-max-min-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '24-resizable-max-min-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/24-resizable-max-min-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '24-resizable-max-min-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/24-resizable-max-min.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '24-resizable-max-min-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/24-resizable-max-min.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 04. Interacción Resizable - 05. Tamaño máximo y mínimo',
        styles: [
            { href: `${styles}/pages/clase-28/24-resizable-max-min.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/24-resizable-max-min.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
            { name: 'resizable' },
        ],
};
