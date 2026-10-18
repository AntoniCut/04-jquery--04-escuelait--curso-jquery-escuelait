/*
    *  ----------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-sortable-empty-lists.js  --  /src/routes/route-clase28-sortable-empty-lists.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------  *
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
export const routeClase28SortableEmptyLists = {
        id: 'clase28SortableEmptyLists',
        favicon: favicon,
        pageTitle: 'Clase 28 - 06. Interacción Sortable - 05. Listas vacías',
        path: '/clase28-libreria-de-componentes-jquery-ui/06-interaccion-sortable/05-empty-lists',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/37-sortable-empty-lists.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/37-sortable-empty-lists-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/37-sortable-empty-lists-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '37-sortable-empty-lists-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/37-sortable-empty-lists-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '37-sortable-empty-lists-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/37-sortable-empty-lists.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '37-sortable-empty-lists-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/37-sortable-empty-lists.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 06. Interacción Sortable - 05. Listas vacías',
        styles: [
            { href: `${styles}/pages/clase-28/37-sortable-empty-lists.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/37-sortable-empty-lists.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
            { name: 'sortable' },
        ],
};
