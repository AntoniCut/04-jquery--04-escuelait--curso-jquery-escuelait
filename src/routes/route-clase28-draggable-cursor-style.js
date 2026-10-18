/*
    *  --------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-draggable-cursor-style.js  --  /src/routes/route-clase28-draggable-cursor-style.js  -----  *
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
export const routeClase28DraggableCursorStyle = {
        id: 'clase28DraggableCursorStyle',
        favicon: favicon,
        pageTitle: 'Clase 28 - 02. Interacción Draggable - 04. Estilo del cursor',
        path: '/clase28-libreria-de-componentes-jquery-ui/02-interaccion-draggable/04-cursor-style',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/07-draggable-cursor-style.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/07-draggable-cursor-style-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/07-draggable-cursor-style-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '07-draggable-cursor-style-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/07-draggable-cursor-style-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '07-draggable-cursor-style-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/07-draggable-cursor-style.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '07-draggable-cursor-style-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/07-draggable-cursor-style.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 02. Interacción Draggable - 04. Estilo del cursor',
        styles: [
            { href: `${styles}/pages/clase-28/07-draggable-cursor-style.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/07-draggable-cursor-style.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
