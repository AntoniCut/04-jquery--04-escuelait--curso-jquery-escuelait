/*
    *  ----------------------------------------------------------------------------------------------  *
    *  -----  route-clase27-metodo-destroy.js  --  /src/routes/route-clase27-metodo-destroy.js  -----  *
    *  ----------------------------------------------------------------------------------------------  *
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
export const routeClase27MetodoDestroy = {
        id: 'clase27MetodoDestroy',
        favicon: favicon,
        pageTitle: 'Clase 27 - 6. Método destroy',
        path: '/clase27-tecnicas-desarrollo-plugins-complejos/06-metodo-destroy',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-27/06-metodo-destroy.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-27/layout-aside-clase-27.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-27/06-metodo-destroy-description.html`, target: '[data-component-page="destroyDescription"]' },
            { url: `${pagesComponents}/clase-27/06-metodo-destroy-demo.html`, target: '[data-component-page="destroyDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '06-metodo-destroy-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-27/06-metodo-destroy-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '06-metodo-destroy-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-27/06-metodo-destroy.css`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '06-metodo-destroy-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-27/06-metodo-destroy.js`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codeJs"]',
            },
            {
                fileName: '06-metodo-destroy-demo-plugin.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-27/plugins/jquery.advanced-validation.js`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codePlugin"]',
            },
            {
                fileName: '06-metodo-destroy-demo-php.html',
                fileExtension: 'php',
                urlInput: `${services}/clase-27/enviar.php`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codePhp"]',
            },
        ],
        headerTitle: 'Clase 27 - 6. Método destroy',
        styles: [
            { href: `${styles}/pages/clase-27/06-metodo-destroy.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-27/plugins/jquery.advanced-validation.js` },
            { src: `${scripts}/clase-27/06-metodo-destroy.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
