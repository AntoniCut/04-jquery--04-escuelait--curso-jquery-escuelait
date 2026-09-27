/*
    *  --------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase27-valores-por-defecto.js  --  /src/routes/route-clase27-valores-por-defecto.js  -----  *
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
export const routeClase27ValoresPorDefecto = {
        id: 'clase27ValoresPorDefecto',
        favicon: favicon,
        pageTitle: 'Clase 27 - 1. Valores por defecto',
        path: '/clase27-tecnicas-desarrollo-plugins-complejos/01-valores-por-defecto',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-27/01-valores-por-defecto.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-27/layout-aside-clase-27.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-27/01-valores-por-defecto-description.html`, target: '[data-component-page="defaultsDescription"]' },
            { url: `${pagesComponents}/clase-27/01-valores-por-defecto-demo.html`, target: '[data-component-page="defaultsDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-valores-por-defecto-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-27/01-valores-por-defecto-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-valores-por-defecto-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-27/01-valores-por-defecto.css`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '01-valores-por-defecto-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-27/01-valores-por-defecto.js`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codeJs"]',
            },
            {
                fileName: '01-valores-por-defecto-demo-plugin.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-27/plugins/jquery.advanced-validation.js`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codePlugin"]',
            },
            {
                fileName: '01-valores-por-defecto-demo-php.html',
                fileExtension: 'php',
                urlInput: `${services}/clase-27/enviar.php`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codePhp"]',
            },
        ],
        headerTitle: 'Clase 27 - 1. Valores por defecto',
        styles: [
            { href: `${styles}/pages/clase-27/01-valores-por-defecto.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-27/plugins/jquery.advanced-validation.js` },
            { src: `${scripts}/clase-27/01-valores-por-defecto.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
