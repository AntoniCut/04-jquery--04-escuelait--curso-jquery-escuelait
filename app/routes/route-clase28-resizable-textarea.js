/*
    *  ------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-resizable-textarea.js  --  /src/routes/route-clase28-resizable-textarea.js  -----  *
    *  ------------------------------------------------------------------------------------------------------  *
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
export const routeClase28ResizableTextarea = {
        id: 'clase28ResizableTextarea',
        favicon: favicon,
        pageTitle: 'Clase 28 - 04. Interacción Resizable - 09. Área de texto',
        path: '/clase28-libreria-de-componentes-jquery-ui/04-interaccion-resizable/09-textarea',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/28-resizable-textarea.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/28-resizable-textarea-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/28-resizable-textarea-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '28-resizable-textarea-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/28-resizable-textarea-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '28-resizable-textarea-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/28-resizable-textarea.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '28-resizable-textarea-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/28-resizable-textarea.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 04. Interacción Resizable - 09. Área de texto',
        styles: [
            { href: `${styles}/pages/clase-28/28-resizable-textarea.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/28-resizable-textarea.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
            { name: 'resizable' },
        ],
};
