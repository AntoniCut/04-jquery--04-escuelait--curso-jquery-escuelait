/*
    *  ----------------------------------------------------------------------------------------------  *
    *  -----  route-clase27-metodo-isvalid.js  --  /src/routes/route-clase27-metodo-isvalid.js  -----  *
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
export const routeClase27MetodoIsValid = {
        id: 'clase27MetodoIsValid',
        favicon: favicon,
        pageTitle: 'Clase 27 - 3. Método isValid',
        path: '/clase27-tecnicas-desarrollo-plugins-complejos/03-metodo-isvalid',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-27/03-metodo-isvalid.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-27/layout-aside-clase-27.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-27/03-metodo-isvalid-description.html`, target: '[data-component-page="isValidDescription"]' },
            { url: `${pagesComponents}/clase-27/03-metodo-isvalid-demo.html`, target: '[data-component-page="isValidDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '03-metodo-isvalid-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-27/03-metodo-isvalid-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '03-metodo-isvalid-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-27/03-metodo-isvalid.css`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '03-metodo-isvalid-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-27/03-metodo-isvalid.js`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codeJs"]',
            },
            {
                fileName: '03-metodo-isvalid-demo-plugin.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-27/plugins/jquery.advanced-validation.js`,
                urlOutput: `${markdownShikiHtml}/clase-27`,
                target: '[data-shiki="codePlugin"]',
            },
        ],
        headerTitle: 'Clase 27 - 3. Método isValid',
        styles: [
            { href: `${styles}/pages/clase-27/03-metodo-isvalid.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-27/plugins/jquery.advanced-validation.js` },
            { src: `${scripts}/clase-27/03-metodo-isvalid.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
