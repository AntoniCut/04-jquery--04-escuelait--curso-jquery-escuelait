/*
    *  --------------------------------------------------------------------------------  *
    *  -----  route-clase30-eventos.js  --  /src/routes/route-clase30-eventos.js  -----  *
    *  --------------------------------------------------------------------------------  *
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
export const routeClase30Eventos = {
        id: 'clase30Eventos',
        favicon: favicon,
        pageTitle: 'Clase 30 - 04. Eventos',
        path: '/clase30-practica-2/04-eventos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-30/04-eventos.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-30/layout-aside-clase-30.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-30/04-eventos-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-30/04-eventos-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '04-eventos-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-30/04-eventos-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-30`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '04-eventos-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-30/04-eventos.css`,
                urlOutput: `${markdownShikiHtml}/clase-30`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '04-eventos-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-30/04-eventos.js`,
                urlOutput: `${markdownShikiHtml}/clase-30`,
                target: '[data-shiki="codeJs"]',
            },
            {
                fileName: '04-eventos-demo-plugin.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-30/plugins/jquery.smartform.js`,
                urlOutput: `${markdownShikiHtml}/clase-30`,
                target: '[data-shiki="codePlugin"]',
            },
            {
                fileName: '04-eventos-demo-php.html',
                fileExtension: 'php',
                urlInput: `${services}/clase-30/guardar-con-json.php`,
                urlOutput: `${markdownShikiHtml}/clase-30`,
                target: '[data-shiki="codePhp"]',
            },
        ],
        headerTitle: 'Clase 30 - 04. Eventos',
        styles: [
            { href: `${styles}/pages/clase-30/04-eventos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-30/plugins/jquery.smartform.js` },
            { src: `${scripts}/clase-30/04-eventos.js` },
        ],
        libs: [
            { name: 'tooltip' },
        ],
};
