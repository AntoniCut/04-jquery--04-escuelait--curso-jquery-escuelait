/*
    *  ----------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-resizable-default.js  --  /src/routes/route-clase28-resizable-default.js  -----  *
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
export const routeClase28ResizableDefault = {
        id: 'clase28ResizableDefault',
        favicon: favicon,
        pageTitle: 'Clase 28 - 20. Funcionalidad por defecto',
        path: '/clase28-libreria-de-componentes-jquery-ui/20-resizable-default',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/20-resizable-default.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/20-resizable-default-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/20-resizable-default-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '20-resizable-default-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/20-resizable-default-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '20-resizable-default-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/20-resizable-default.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '20-resizable-default-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/20-resizable-default.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 20. Funcionalidad por defecto',
        styles: [
            { href: `${styles}/pages/clase-28/20-resizable-default.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/20-resizable-default.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
            { name: 'resizable' },
        ],
};
