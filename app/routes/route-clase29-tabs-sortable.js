/*
    *  --------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-tabs-sortable.js  --  /src/routes/route-clase29-tabs-sortable.js  -----  *
    *  --------------------------------------------------------------------------------------------  *
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
export const routeClase29TabsSortable = {
        id: 'clase29TabsSortable',
        favicon: favicon,
        pageTitle: 'Clase 29 - 13. Tabs - 06. Ordenables',
        path: '/clase29-usando-jquery-ui/13-tabs/06-sortable',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/79-tabs-sortable.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/79-tabs-sortable-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/79-tabs-sortable-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '79-tabs-sortable-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/79-tabs-sortable-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '79-tabs-sortable-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/79-tabs-sortable.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '79-tabs-sortable-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/79-tabs-sortable.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 13. Tabs - 06. Ordenables',
        styles: [
            { href: `${styles}/pages/clase-29/79-tabs-sortable.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/79-tabs-sortable.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'sortable' },
            { name: 'tabs' },
        ],
};
