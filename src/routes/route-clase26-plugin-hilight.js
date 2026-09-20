/*
    *  ----------------------------------------------------------------------------------------------  *
    *  -----  route-clase26-plugin-hilight.js  --  /src/routes/route-clase26-plugin-hilight.js  -----  *
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
    markdownShikiHtml,
} = paths;


/** @type {Route} */
export const routeClase26PluginHilight = {
        id: 'clase26PluginHilight',
        favicon: favicon,
        pageTitle: 'Clase 26 - 3. Plugin hilight',
        path: '/clase26-variables-gestion-opciones-plugins/03-plugin-hilight',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-26/03-plugin-hilight.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-26/layout-aside-clase-26.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-26/03-plugin-hilight-description.html`, target: '[data-component-page="pluginHilightDescription"]' },
            { url: `${pagesComponents}/clase-26/03-plugin-hilight-demo.html`, target: '[data-component-page="pluginHilightDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '03-plugin-hilight-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-26/03-plugin-hilight-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-26`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '03-plugin-hilight-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-26/03-plugin-hilight.css`,
                urlOutput: `${markdownShikiHtml}/clase-26`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '03-plugin-hilight-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-26/03-plugin-hilight.js`,
                urlOutput: `${markdownShikiHtml}/clase-26`,
                target: '[data-shiki="codeJs"]',
            },
            {
                fileName: '03-plugin-hilight-demo-plugin.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-26/plugins/jquery.hilight.js`,
                urlOutput: `${markdownShikiHtml}/clase-26`,
                target: '[data-shiki="codePlugin"]',
            },
        ],
        headerTitle: 'Clase 26 - 3. Plugin hilight',
        styles: [
            { href: `${styles}/pages/clase-26/03-plugin-hilight.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-26/plugins/jquery.hilight.js` },
            { src: `${scripts}/clase-26/03-plugin-hilight.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
