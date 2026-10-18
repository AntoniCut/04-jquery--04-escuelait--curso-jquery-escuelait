/*
    *  --------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-draggable-handle.js  --  /src/routes/route-clase28-draggable-handle.js  -----  *
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
export const routeClase28DraggableHandle = {
        id: 'clase28DraggableHandle',
        favicon: favicon,
        pageTitle: 'Clase 28 - 9. Asas',
        path: '/clase28-libreria-de-componentes-jquery-ui/09-draggable-handle',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/09-draggable-handle.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/09-draggable-handle-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/09-draggable-handle-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '09-draggable-handle-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/09-draggable-handle-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '09-draggable-handle-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/09-draggable-handle.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '09-draggable-handle-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/09-draggable-handle.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 9. Asas',
        styles: [
            { href: `${styles}/pages/clase-28/09-draggable-handle.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/09-draggable-handle.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
