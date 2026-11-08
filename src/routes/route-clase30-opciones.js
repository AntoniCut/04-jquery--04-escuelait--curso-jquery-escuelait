/*
    *  ----------------------------------------------------------------------------------  *
    *  -----  route-clase30-opciones.js  --  /src/routes/route-clase30-opciones.js  -----  *
    *  ----------------------------------------------------------------------------------  *
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
export const routeClase30Opciones = {
        id: 'clase30Opciones',
        favicon: favicon,
        pageTitle: 'Clase 30 - 02. Opciones',
        path: '/clase30-practica-2/02-opciones',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-30/02-opciones.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-30/layout-aside-clase-30.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-30/02-opciones-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-30/02-opciones-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-opciones-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-30/02-opciones-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-30`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-opciones-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-30/02-opciones.css`,
                urlOutput: `${markdownShikiHtml}/clase-30`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-opciones-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-30/02-opciones.js`,
                urlOutput: `${markdownShikiHtml}/clase-30`,
                target: '[data-shiki="codeJs"]',
            },
            {
                fileName: '02-opciones-demo-plugin.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-30/plugins/jquery.smartform.js`,
                urlOutput: `${markdownShikiHtml}/clase-30`,
                target: '[data-shiki="codePlugin"]',
            },
            {
                fileName: '02-opciones-demo-php.html',
                fileExtension: 'php',
                urlInput: `${services}/clase-30/guardar-con-json.php`,
                urlOutput: `${markdownShikiHtml}/clase-30`,
                target: '[data-shiki="codePhp"]',
            },
        ],
        headerTitle: 'Clase 30 - 02. Opciones',
        styles: [
            { href: `${styles}/pages/clase-30/02-opciones.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-30/plugins/jquery.smartform.js` },
            { src: `${scripts}/clase-30/02-opciones.js` },
        ],
        libs: [
            { name: 'tooltip' },
        ],
};
