/*
    *  ------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-droppable-propagation.js  --  /src/routes/route-clase28-droppable-propagation.js  -----  *
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
export const routeClase28DroppablePropagation = {
        id: 'clase28DroppablePropagation',
        favicon: favicon,
        pageTitle: 'Clase 28 - 03. Interacción Droppable - 03. Evitar la propagación',
        path: '/clase28-libreria-de-componentes-jquery-ui/03-interaccion-droppable/03-propagation',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/16-droppable-propagation.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/16-droppable-propagation-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/16-droppable-propagation-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '16-droppable-propagation-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/16-droppable-propagation-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '16-droppable-propagation-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/16-droppable-propagation.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '16-droppable-propagation-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/16-droppable-propagation.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 03. Interacción Droppable - 03. Evitar la propagación',
        styles: [
            { href: `${styles}/pages/clase-28/16-droppable-propagation.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/16-droppable-propagation.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
            { name: 'droppable' },
        ],
};
