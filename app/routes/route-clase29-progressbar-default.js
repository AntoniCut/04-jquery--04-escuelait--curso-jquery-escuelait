/*
    *  --------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-progressbar-default.js  --  /src/routes/route-clase29-progressbar-default.js  -----  *
    *  --------------------------------------------------------------------------------------------------------  *
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
export const routeClase29ProgressbarDefault = {
        id: 'clase29ProgressbarDefault',
        favicon: favicon,
        pageTitle: 'Clase 29 - 09. Progressbar - 01. Funcionalidad por defecto',
        path: '/clase29-usando-jquery-ui/09-progressbar/01-default',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/50-progressbar-default.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/50-progressbar-default-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/50-progressbar-default-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '50-progressbar-default-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/50-progressbar-default-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '50-progressbar-default-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/50-progressbar-default.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '50-progressbar-default-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/50-progressbar-default.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 09. Progressbar - 01. Funcionalidad por defecto',
        styles: [
            { href: `${styles}/pages/clase-29/50-progressbar-default.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/50-progressbar-default.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'progressbar' },
        ],
};
