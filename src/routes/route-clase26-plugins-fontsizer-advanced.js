/*
    *  ----------------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase26-plugins-fontsizer-advanced.js  --  /src/routes/route-clase26-plugins-fontsizer-advanced.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase26PluginsFontsizerAdvanced = {
        id: 'clase26PluginsFontsizerAdvanced',
        favicon: favicon,
        pageTitle: 'Clase 26 - 2. Plugin fontSizer advanced',
        path: '/clase26-variables-gestion-opciones-plugins/02-plugins-fontsizer-advanced',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-26/02-plugins-fontsizer-advanced.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-26/layout-aside-clase-26.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-26/02-plugins-fontsizer-advanced-description.html`, target: '[data-component-page="pluginsFontsizerAdvancedDescription"]' },
            { url: `${pagesComponents}/clase-26/02-plugins-fontsizer-advanced-demo.html`, target: '[data-component-page="pluginsFontsizerAdvancedDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-plugins-fontsizer-advanced-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-26/02-plugins-fontsizer-advanced-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-26`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-plugins-fontsizer-advanced-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-26/02-plugins-fontsizer-advanced.css`,
                urlOutput: `${markdownShikiHtml}/clase-26`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-plugins-fontsizer-advanced-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-26/02-plugins-fontsizer-advanced.js`,
                urlOutput: `${markdownShikiHtml}/clase-26`,
                target: '[data-shiki="codeJs"]',
            },
            {
                fileName: '02-plugins-fontsizer-advanced-demo-plugin.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-26/plugins/jquery.fontsizer-advanced.js`,
                urlOutput: `${markdownShikiHtml}/clase-26`,
                target: '[data-shiki="codePlugin"]',
            },
        ],
        headerTitle: 'Clase 26 - 2. Plugin fontSizer advanced',
        styles: [
            { href: `${styles}/pages/clase-26/02-plugins-fontsizer-advanced.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-26/plugins/jquery.fontsizer-advanced.js` },
            { src: `${scripts}/clase-26/02-plugins-fontsizer-advanced.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
