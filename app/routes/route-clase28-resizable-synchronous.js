/*
    *  ------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-resizable-synchronous.js  --  /src/routes/route-clase28-resizable-synchronous.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------  *
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
export const routeClase28ResizableSynchronous = {
        id: 'clase28ResizableSynchronous',
        favicon: favicon,
        pageTitle: 'Clase 28 - 27. Cambio de tamaño simultáneo',
        path: '/clase28-libreria-de-componentes-jquery-ui/27-resizable-synchronous',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/27-resizable-synchronous.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/27-resizable-synchronous-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/27-resizable-synchronous-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '27-resizable-synchronous-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/27-resizable-synchronous-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '27-resizable-synchronous-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/27-resizable-synchronous.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '27-resizable-synchronous-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/27-resizable-synchronous.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 27. Cambio de tamaño simultáneo',
        styles: [
            { href: `${styles}/pages/clase-28/27-resizable-synchronous.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/27-resizable-synchronous.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
            { name: 'resizable' },
        ],
};
