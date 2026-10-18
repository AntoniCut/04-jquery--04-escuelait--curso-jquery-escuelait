/*
    *  ----------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-sortable-items.js  --  /src/routes/route-clase28-sortable-items.js  -----  *
    *  ----------------------------------------------------------------------------------------------  *
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
export const routeClase28SortableItems = {
        id: 'clase28SortableItems',
        favicon: favicon,
        pageTitle: 'Clase 28 - 06. Interacción Sortable - 06. Incluir o excluir elementos',
        path: '/clase28-libreria-de-componentes-jquery-ui/06-interaccion-sortable/06-items',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/38-sortable-items.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/38-sortable-items-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/38-sortable-items-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '38-sortable-items-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/38-sortable-items-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '38-sortable-items-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/38-sortable-items.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '38-sortable-items-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/38-sortable-items.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 06. Interacción Sortable - 06. Incluir o excluir elementos',
        styles: [
            { href: `${styles}/pages/clase-28/38-sortable-items.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/38-sortable-items.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
            { name: 'sortable' },
        ],
};
