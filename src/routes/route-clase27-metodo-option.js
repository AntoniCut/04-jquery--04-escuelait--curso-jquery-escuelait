/*
    *  --------------------------------------------------------------------------------------------  *
    *  -----  route-clase27-metodo-option.js  --  /src/routes/route-clase27-metodo-option.js  -----  *
    *  --------------------------------------------------------------------------------------------  *
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
export const routeClase27MetodoOption = {
        id: 'clase27MetodoOption',
        favicon: favicon,
        pageTitle: 'Clase 27 - 4. Método option',
        path: '/clase27-tecnicas-desarrollo-plugins-complejos/04-metodo-option',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-27/04-metodo-option.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-27/layout-aside-clase-27.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-27/04-metodo-option-description.html`, target: '[data-component-page="optionDescription"]' },
            { url: `${pagesComponents}/clase-27/04-metodo-option-demo.html`, target: '[data-component-page="optionDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '04-metodo-option-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-27/04-metodo-option-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '04-metodo-option-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-27/04-metodo-option.css`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '04-metodo-option-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-27/04-metodo-option.js`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codeJs"]',
            },
            {
                fileName: '04-metodo-option-demo-plugin.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-27/plugins/jquery.advanced-validation.js`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codePlugin"]',
            },
            {
                fileName: '04-metodo-option-demo-php.html',
                fileExtension: 'php',
                urlInput: `${services}/clase-27/enviar.php`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codePhp"]',
            },
        ],
        headerTitle: 'Clase 27 - 4. Método option',
        styles: [
            { href: `${styles}/pages/clase-27/04-metodo-option.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-27/plugins/jquery.advanced-validation.js` },
            { src: `${scripts}/clase-27/04-metodo-option.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
