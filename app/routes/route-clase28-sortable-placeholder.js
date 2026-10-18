/*
    *  ----------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-sortable-placeholder.js  --  /src/routes/route-clase28-sortable-placeholder.js  -----  *
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
export const routeClase28SortablePlaceholder = {
        id: 'clase28SortablePlaceholder',
        favicon: favicon,
        pageTitle: 'Clase 28 - 36. Hueco al soltar',
        path: '/clase28-libreria-de-componentes-jquery-ui/36-sortable-placeholder',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/36-sortable-placeholder.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/36-sortable-placeholder-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/36-sortable-placeholder-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '36-sortable-placeholder-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/36-sortable-placeholder-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '36-sortable-placeholder-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/36-sortable-placeholder.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '36-sortable-placeholder-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/36-sortable-placeholder.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 36. Hueco al soltar',
        styles: [
            { href: `${styles}/pages/clase-28/36-sortable-placeholder.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/36-sortable-placeholder.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
            { name: 'sortable' },
        ],
};
