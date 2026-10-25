/*
    *  --------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-spinner-overflow.js  --  /src/routes/route-clase29-spinner-overflow.js  -----  *
    *  --------------------------------------------------------------------------------------------------  *
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
export const routeClase29SpinnerOverflow = {
        id: 'clase29SpinnerOverflow',
        favicon: favicon,
        pageTitle: 'Clase 29 - 12. Spinner - 05. Desbordamiento',
        path: '/clase29-usando-jquery-ui/12-spinner/05-overflow',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/72-spinner-overflow.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/72-spinner-overflow-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/72-spinner-overflow-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '72-spinner-overflow-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/72-spinner-overflow-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '72-spinner-overflow-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/72-spinner-overflow.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '72-spinner-overflow-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/72-spinner-overflow.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 12. Spinner - 05. Desbordamiento',
        styles: [
            { href: `${styles}/pages/clase-29/72-spinner-overflow.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/72-spinner-overflow.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'spinner' },
        ],
};
