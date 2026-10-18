/*
    *  ----------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-resizable-animate.js  --  /src/routes/route-clase28-resizable-animate.js  -----  *
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
export const routeClase28ResizableAnimate = {
        id: 'clase28ResizableAnimate',
        favicon: favicon,
        pageTitle: 'Clase 28 - 21. Animar',
        path: '/clase28-libreria-de-componentes-jquery-ui/21-resizable-animate',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/21-resizable-animate.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/21-resizable-animate-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/21-resizable-animate-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '21-resizable-animate-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/21-resizable-animate-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '21-resizable-animate-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/21-resizable-animate.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '21-resizable-animate-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/21-resizable-animate.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 21. Animar',
        styles: [
            { href: `${styles}/pages/clase-28/21-resizable-animate.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/21-resizable-animate.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
            { name: 'resizable' },
        ],
};
