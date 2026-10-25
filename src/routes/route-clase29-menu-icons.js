/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  route-clase29-menu-icons.js  --  /src/routes/route-clase29-menu-icons.js  -----  *
    *  --------------------------------------------------------------------------------------  *
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
export const routeClase29MenuIcons = {
        id: 'clase29MenuIcons',
        favicon: favicon,
        pageTitle: 'Clase 29 - 08. Menu - 03. Iconos',
        path: '/clase29-usando-jquery-ui/08-menu/03-icons',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/49-menu-icons.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/49-menu-icons-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/49-menu-icons-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '49-menu-icons-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/49-menu-icons-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '49-menu-icons-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/49-menu-icons.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '49-menu-icons-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/49-menu-icons.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 08. Menu - 03. Iconos',
        styles: [
            { href: `${styles}/pages/clase-29/49-menu-icons.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/49-menu-icons.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'menu' },
        ],
};
