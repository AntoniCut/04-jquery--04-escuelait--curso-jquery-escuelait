/*
    *  ------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-selectmenu-product.js  --  /src/routes/route-clase29-selectmenu-product.js  -----  *
    *  ------------------------------------------------------------------------------------------------------  *
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
export const routeClase29SelectmenuProduct = {
        id: 'clase29SelectmenuProduct',
        favicon: favicon,
        pageTitle: 'Clase 29 - 10. Selectmenu - 03. Selección de producto',
        path: '/clase29-usando-jquery-ui/10-selectmenu/03-product',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/56-selectmenu-product.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/56-selectmenu-product-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/56-selectmenu-product-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '56-selectmenu-product-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/56-selectmenu-product-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '56-selectmenu-product-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/56-selectmenu-product.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '56-selectmenu-product-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/56-selectmenu-product.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 10. Selectmenu - 03. Selección de producto',
        styles: [
            { href: `${styles}/pages/clase-29/56-selectmenu-product.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/56-selectmenu-product.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'selectmenu' },
        ],
};
