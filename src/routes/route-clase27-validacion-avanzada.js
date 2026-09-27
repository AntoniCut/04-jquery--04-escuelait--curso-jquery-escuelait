/*
    *  --------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase27-validacion-avanzada.js  --  /src/routes/route-clase27-validacion-avanzada.js  -----  *
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
    services,
    markdownShikiHtml,
} = paths;


/** @type {Route} */
export const routeClase27ValidacionAvanzada = {
        id: 'clase27ValidacionAvanzada',
        favicon: favicon,
        pageTitle: 'Clase 27 - 5. Validación avanzada',
        path: '/clase27-tecnicas-desarrollo-plugins-complejos/05-validacion-avanzada',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-27/05-validacion-avanzada.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-27/layout-aside-clase-27.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-27/05-validacion-avanzada-description.html`, target: '[data-component-page="advancedDescription"]' },
            { url: `${pagesComponents}/clase-27/05-validacion-avanzada-demo.html`, target: '[data-component-page="advancedDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '05-validacion-avanzada-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-27/05-validacion-avanzada-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '05-validacion-avanzada-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-27/05-validacion-avanzada.css`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '05-validacion-avanzada-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-27/05-validacion-avanzada.js`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codeJs"]',
            },
            {
                fileName: '05-validacion-avanzada-demo-plugin.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-27/plugins/jquery.advanced-validation.js`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codePlugin"]',
            },
            {
                fileName: '05-validacion-avanzada-demo-php.html',
                fileExtension: 'php',
                urlInput: `${services}/clase-27/enviar.php`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codePhp"]',
            },
        ],
        headerTitle: 'Clase 27 - 5. Validación avanzada',
        styles: [
            { href: `${styles}/pages/clase-27/05-validacion-avanzada.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-27/plugins/jquery.advanced-validation.js` },
            { src: `${scripts}/clase-27/05-validacion-avanzada.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
