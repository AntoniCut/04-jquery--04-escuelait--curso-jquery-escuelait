/*
    *  ----------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-progressbar-download.js  --  /src/routes/route-clase29-progressbar-download.js  -----  *
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
export const routeClase29ProgressbarDownload = {
        id: 'clase29ProgressbarDownload',
        favicon: favicon,
        pageTitle: 'Clase 29 - 09. Progressbar - 03. Diálogo de descarga',
        path: '/clase29-usando-jquery-ui/09-progressbar/03-download',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/52-progressbar-download.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/52-progressbar-download-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/52-progressbar-download-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '52-progressbar-download-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/52-progressbar-download-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '52-progressbar-download-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/52-progressbar-download.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '52-progressbar-download-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/52-progressbar-download.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 09. Progressbar - 03. Diálogo de descarga',
        styles: [
            { href: `${styles}/pages/clase-29/52-progressbar-download.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/52-progressbar-download.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'dialog' },
            { name: 'progressbar' },
        ],
};
