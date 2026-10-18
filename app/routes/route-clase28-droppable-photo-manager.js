/*
    *  ----------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-droppable-photo-manager.js  --  /src/routes/route-clase28-droppable-photo-manager.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------  *
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
export const routeClase28DroppablePhotoManager = {
        id: 'clase28DroppablePhotoManager',
        favicon: favicon,
        pageTitle: 'Clase 28 - 03. Interacción Droppable - 05. Gestor de fotos',
        path: '/clase28-libreria-de-componentes-jquery-ui/03-interaccion-droppable/05-photo-manager',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/18-droppable-photo-manager.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/18-droppable-photo-manager-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/18-droppable-photo-manager-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '18-droppable-photo-manager-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/18-droppable-photo-manager-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '18-droppable-photo-manager-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/18-droppable-photo-manager.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '18-droppable-photo-manager-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/18-droppable-photo-manager.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 03. Interacción Droppable - 05. Gestor de fotos',
        styles: [
            { href: `${styles}/pages/clase-28/18-droppable-photo-manager.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/18-droppable-photo-manager.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
            { name: 'droppable' },
            { name: 'dialog' },
        ],
};
