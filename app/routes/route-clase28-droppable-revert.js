/*
    *  --------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-droppable-revert.js  --  /src/routes/route-clase28-droppable-revert.js  -----  *
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
export const routeClase28DroppableRevert = {
        id: 'clase28DroppableRevert',
        favicon: favicon,
        pageTitle: 'Clase 28 - 03. Interacción Droppable - 04. Volver a la posición',
        path: '/clase28-libreria-de-componentes-jquery-ui/03-interaccion-droppable/04-revert',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/17-droppable-revert.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/17-droppable-revert-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/17-droppable-revert-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '17-droppable-revert-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/17-droppable-revert-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '17-droppable-revert-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/17-droppable-revert.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '17-droppable-revert-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/17-droppable-revert.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 03. Interacción Droppable - 04. Volver a la posición',
        styles: [
            { href: `${styles}/pages/clase-28/17-droppable-revert.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/17-droppable-revert.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
            { name: 'droppable' },
        ],
};
