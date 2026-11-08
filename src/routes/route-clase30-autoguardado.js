/*
    *  ------------------------------------------------------------------------------------------  *
    *  -----  route-clase30-autoguardado.js  --  /src/routes/route-clase30-autoguardado.js  -----  *
    *  ------------------------------------------------------------------------------------------  *
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
export const routeClase30Autoguardado = {
        id: 'clase30Autoguardado',
        favicon: favicon,
        pageTitle: 'Clase 30 - 03. Autoguardado',
        path: '/clase30-practica-2/03-autoguardado',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-30/03-autoguardado.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-30/layout-aside-clase-30.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-30/03-autoguardado-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-30/03-autoguardado-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '03-autoguardado-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-30/03-autoguardado-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-30`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '03-autoguardado-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-30/03-autoguardado.css`,
                urlOutput: `${markdownShikiHtml}/clase-30`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '03-autoguardado-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-30/03-autoguardado.js`,
                urlOutput: `${markdownShikiHtml}/clase-30`,
                target: '[data-shiki="codeJs"]',
            },
            {
                fileName: '03-autoguardado-demo-plugin.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-30/plugins/jquery.smartform.js`,
                urlOutput: `${markdownShikiHtml}/clase-30`,
                target: '[data-shiki="codePlugin"]',
            },
            {
                fileName: '03-autoguardado-demo-php.html',
                fileExtension: 'php',
                urlInput: `${services}/clase-30/guardar-con-json.php`,
                urlOutput: `${markdownShikiHtml}/clase-30`,
                target: '[data-shiki="codePhp"]',
            },
        ],
        headerTitle: 'Clase 30 - 03. Autoguardado',
        styles: [
            { href: `${styles}/pages/clase-30/03-autoguardado.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-30/plugins/jquery.smartform.js` },
            { src: `${scripts}/clase-30/03-autoguardado.js` },
        ],
        libs: [
            { name: 'tooltip' },
        ],
};
