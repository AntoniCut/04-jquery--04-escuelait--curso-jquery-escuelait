/*
    *  ---------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase25-plugins-con-handlebars.js  --  /src/routes/route-clase25-plugins-con-handlebars.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------  *
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
    libs,
    styles,
    scripts,
    markdownShikiHtml,
} = paths;


/** @type {Route} */
export const routeClase25PluginsConHandlebars = {
        id: 'clase25PluginsConHandlebars',
        favicon: favicon,
        pageTitle: 'Clase 25 - 2. Plugins con Handlebars',
        path: '/clase25-jquery-plugins/02-plugins-con-handlebars',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-25/02-plugins-con-handlebars.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-25/layout-aside-clase-25.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-25/02-plugins-con-handlebars-description.html`, target: '[data-component-page="pluginsConHandlebarsDescription"]' },
            { url: `${pagesComponents}/clase-25/02-plugins-con-handlebars-demo.html`, target: '[data-component-page="pluginsConHandlebarsDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-plugins-con-handlebars-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-25/02-plugins-con-handlebars-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-25`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-plugins-con-handlebars-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-25/clase-25-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-25`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-plugins-con-handlebars-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-25/02-plugins-con-handlebars.js`,
                urlOutput: `${markdownShikiHtml}/clase-25`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 25 - 2. Plugins con Handlebars',
        styles: [
            { href: `${styles}/pages/clase-25/clase-25-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${libs}/handlebars/handlebars.min.js` },
            { src: `${scripts}/clase-25/plugins/jquery.templatize.js` },
            { src: `${scripts}/clase-25/02-plugins-con-handlebars.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
