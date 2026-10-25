/*
    *  ----------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-progressbar-label.js  --  /src/routes/route-clase29-progressbar-label.js  -----  *
    *  ----------------------------------------------------------------------------------------------------  *
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
export const routeClase29ProgressbarLabel = {
        id: 'clase29ProgressbarLabel',
        favicon: favicon,
        pageTitle: 'Clase 29 - 09. Progressbar - 02. Etiqueta propia',
        path: '/clase29-usando-jquery-ui/09-progressbar/02-label',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/51-progressbar-label.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/51-progressbar-label-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/51-progressbar-label-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '51-progressbar-label-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/51-progressbar-label-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '51-progressbar-label-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/51-progressbar-label.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '51-progressbar-label-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/51-progressbar-label.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 09. Progressbar - 02. Etiqueta propia',
        styles: [
            { href: `${styles}/pages/clase-29/51-progressbar-label.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/51-progressbar-label.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'progressbar' },
        ],
};
