/*
    *  ------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-sortable-display-grid.js  --  /src/routes/route-clase28-sortable-display-grid.js  -----  *
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
export const routeClase28SortableDisplayGrid = {
        id: 'clase28SortableDisplayGrid',
        favicon: favicon,
        pageTitle: 'Clase 28 - 35. Mostrar en rejilla',
        path: '/clase28-libreria-de-componentes-jquery-ui/35-sortable-display-grid',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/35-sortable-display-grid.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/35-sortable-display-grid-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/35-sortable-display-grid-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '35-sortable-display-grid-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/35-sortable-display-grid-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '35-sortable-display-grid-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/35-sortable-display-grid.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '35-sortable-display-grid-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/35-sortable-display-grid.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 35. Mostrar en rejilla',
        styles: [
            { href: `${styles}/pages/clase-28/35-sortable-display-grid.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/35-sortable-display-grid.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
            { name: 'sortable' },
        ],
};
