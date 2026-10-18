/*
    *  --------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-resizable-helper.js  --  /src/routes/route-clase28-resizable-helper.js  -----  *
    *  --------------------------------------------------------------------------------------------------  *
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
export const routeClase28ResizableHelper = {
        id: 'clase28ResizableHelper',
        favicon: favicon,
        pageTitle: 'Clase 28 - 04. Interacción Resizable - 04. Contorno auxiliar',
        path: '/clase28-libreria-de-componentes-jquery-ui/04-interaccion-resizable/04-helper',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/23-resizable-helper.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/23-resizable-helper-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/23-resizable-helper-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '23-resizable-helper-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/23-resizable-helper-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '23-resizable-helper-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/23-resizable-helper.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '23-resizable-helper-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/23-resizable-helper.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 04. Interacción Resizable - 04. Contorno auxiliar',
        styles: [
            { href: `${styles}/pages/clase-28/23-resizable-helper.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/23-resizable-helper.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
            { name: 'resizable' },
        ],
};
