/*
    *  ------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-menu-categories.js  --  /src/routes/route-clase29-menu-categories.js  -----  *
    *  ------------------------------------------------------------------------------------------------  *
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
export const routeClase29MenuCategories = {
        id: 'clase29MenuCategories',
        favicon: favicon,
        pageTitle: 'Clase 29 - 08. Menu - 02. Categorías',
        path: '/clase29-usando-jquery-ui/08-menu/02-categories',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/48-menu-categories.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/48-menu-categories-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/48-menu-categories-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '48-menu-categories-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/48-menu-categories-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '48-menu-categories-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/48-menu-categories.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '48-menu-categories-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/48-menu-categories.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 08. Menu - 02. Categorías',
        styles: [
            { href: `${styles}/pages/clase-29/48-menu-categories.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/48-menu-categories.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'menu' },
        ],
};
