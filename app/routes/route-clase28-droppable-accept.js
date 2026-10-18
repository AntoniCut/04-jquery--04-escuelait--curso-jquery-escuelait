/*
    *  --------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-droppable-accept.js  --  /src/routes/route-clase28-droppable-accept.js  -----  *
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
export const routeClase28DroppableAccept = {
        id: 'clase28DroppableAccept',
        favicon: favicon,
        pageTitle: 'Clase 28 - 03. Interacción Droppable - 02. Aceptar',
        path: '/clase28-libreria-de-componentes-jquery-ui/03-interaccion-droppable/02-accept',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/15-droppable-accept.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/15-droppable-accept-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/15-droppable-accept-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '15-droppable-accept-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/15-droppable-accept-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '15-droppable-accept-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/15-droppable-accept.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '15-droppable-accept-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/15-droppable-accept.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 03. Interacción Droppable - 02. Aceptar',
        styles: [
            { href: `${styles}/pages/clase-28/15-droppable-accept.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/15-droppable-accept.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
            { name: 'droppable' },
        ],
};
