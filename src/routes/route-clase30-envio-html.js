/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  route-clase30-envio-html.js  --  /src/routes/route-clase30-envio-html.js  -----  *
    *  --------------------------------------------------------------------------------------  *
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
export const routeClase30EnvioHtml = {
        id: 'clase30EnvioHtml',
        favicon: favicon,
        pageTitle: 'Clase 30 - 01. Envío en texto',
        path: '/clase30-practica-2/01-envio-html',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-30/01-envio-html.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-30/layout-aside-clase-30.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-30/01-envio-html-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-30/01-envio-html-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-envio-html-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-30/01-envio-html-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-30`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-envio-html-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-30/01-envio-html.css`,
                urlOutput: `${markdownShikiHtml}/clase-30`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '01-envio-html-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-30/01-envio-html.js`,
                urlOutput: `${markdownShikiHtml}/clase-30`,
                target: '[data-shiki="codeJs"]',
            },
            {
                fileName: '01-envio-html-demo-plugin.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-30/plugins/jquery.smartform.js`,
                urlOutput: `${markdownShikiHtml}/clase-30`,
                target: '[data-shiki="codePlugin"]',
            },
            {
                fileName: '01-envio-html-demo-php.html',
                fileExtension: 'php',
                urlInput: `${services}/clase-30/guardar.php`,
                urlOutput: `${markdownShikiHtml}/clase-30`,
                target: '[data-shiki="codePhp"]',
            },
        ],
        headerTitle: 'Clase 30 - 01. Envío en texto',
        styles: [
            { href: `${styles}/pages/clase-30/01-envio-html.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-30/plugins/jquery.smartform.js` },
            { src: `${scripts}/clase-30/01-envio-html.js` },
        ],
        libs: [
            { name: 'tooltip' },
        ],
};
