/*
    *  --------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-sortable-connect-lists.js  --  /src/routes/route-clase28-sortable-connect-lists.js  -----  *
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
export const routeClase28SortableConnectLists = {
        id: 'clase28SortableConnectLists',
        favicon: favicon,
        pageTitle: 'Clase 28 - 34. Conectar listas',
        path: '/clase28-libreria-de-componentes-jquery-ui/34-sortable-connect-lists',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/34-sortable-connect-lists.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/34-sortable-connect-lists-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/34-sortable-connect-lists-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '34-sortable-connect-lists-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/34-sortable-connect-lists-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '34-sortable-connect-lists-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/34-sortable-connect-lists.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '34-sortable-connect-lists-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/34-sortable-connect-lists.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 34. Conectar listas',
        styles: [
            { href: `${styles}/pages/clase-28/34-sortable-connect-lists.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/34-sortable-connect-lists.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
            { name: 'sortable' },
        ],
};
