/*
    *  -------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase25-plugins-basicos.js  --  /src/routes/route-clase25-plugins-basicos.js  -----  *
    *  -------------------------------------------------------------------------------------------------  *
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
export const routeClase25PluginsBasicos = {
        id: 'clase25PluginsBasicos',
        favicon: favicon,
        pageTitle: 'Clase 25 - 1. Plugins básicos',
        path: '/clase25-jquery-plugins/01-plugins-basicos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-25/01-plugins-basicos.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-25/layout-aside-clase-25.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-25/01-plugins-basicos-description.html`, target: '[data-component-page="pluginsBasicosDescription"]' },
            { url: `${pagesComponents}/clase-25/01-plugins-basicos-demo.html`, target: '[data-component-page="pluginsBasicosDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-plugins-basicos-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-25/01-plugins-basicos-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-25`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-plugins-basicos-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-25/01-plugins-basicos.css`,
                urlOutput: `${markdownShikiHtml}/clase-25`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '01-plugins-basicos-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-25/01-plugins-basicos.js`,
                urlOutput: `${markdownShikiHtml}/clase-25`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 25 - 1. Plugins básicos',
        styles: [
            { href: `${styles}/pages/clase-25/01-plugins-basicos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-25/plugins/jquery.urlize.js` },
            { src: `${scripts}/clase-25/plugins/jquery.boldize.js` },
            { src: `${scripts}/clase-25/plugins/jquery.underlinize.js` },
            { src: `${scripts}/clase-25/plugins/jquery.colorize.js` },
            { src: `${scripts}/clase-25/plugins/jquery.fontSizer.js` },
            { src: `${scripts}/clase-25/01-plugins-basicos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
