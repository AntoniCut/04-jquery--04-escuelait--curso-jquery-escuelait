/*
    *  ------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-draggable-sortable.js  --  /src/routes/route-clase28-draggable-sortable.js  -----  *
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
export const routeClase28DraggableSortable = {
        id: 'clase28DraggableSortable',
        favicon: favicon,
        pageTitle: 'Clase 28 - 02. Interacción Draggable - 07. Draggable y Sortable',
        path: '/clase28-libreria-de-componentes-jquery-ui/02-interaccion-draggable/07-sortable',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/10-draggable-sortable.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/10-draggable-sortable-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/10-draggable-sortable-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '10-draggable-sortable-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/10-draggable-sortable-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '10-draggable-sortable-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/10-draggable-sortable.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '10-draggable-sortable-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/10-draggable-sortable.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 02. Interacción Draggable - 07. Draggable y Sortable',
        styles: [
            { href: `${styles}/pages/clase-28/10-draggable-sortable.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/10-draggable-sortable.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
            { name: 'sortable' },
        ],
};
