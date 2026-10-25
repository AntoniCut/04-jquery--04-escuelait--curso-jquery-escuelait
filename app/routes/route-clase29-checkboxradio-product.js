/*
    *  ------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-checkboxradio-product.js  --  /src/routes/route-clase29-checkboxradio-product.js  -----  *
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
export const routeClase29CheckboxradioProduct = {
        id: 'clase29CheckboxradioProduct',
        favicon: favicon,
        pageTitle: 'Clase 29 - 04. Checkboxradio - 03. Selector de producto',
        path: '/clase29-usando-jquery-ui/04-checkboxradio/03-product',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/23-checkboxradio-product.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/23-checkboxradio-product-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/23-checkboxradio-product-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '23-checkboxradio-product-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/23-checkboxradio-product-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '23-checkboxradio-product-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/23-checkboxradio-product.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '23-checkboxradio-product-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/23-checkboxradio-product.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 04. Checkboxradio - 03. Selector de producto',
        styles: [
            { href: `${styles}/pages/clase-29/23-checkboxradio-product.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/23-checkboxradio-product.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'checkboxradio' },
            { name: 'controlgroup' },
        ],
};
