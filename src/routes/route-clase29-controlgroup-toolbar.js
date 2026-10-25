/*
    *  ----------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-controlgroup-toolbar.js  --  /src/routes/route-clase29-controlgroup-toolbar.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------  *
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
export const routeClase29ControlgroupToolbar = {
        id: 'clase29ControlgroupToolbar',
        favicon: favicon,
        pageTitle: 'Clase 29 - 05. Controlgroup - 03. Barra de herramientas',
        path: '/clase29-usando-jquery-ui/05-controlgroup/03-toolbar',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/27-controlgroup-toolbar.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/27-controlgroup-toolbar-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/27-controlgroup-toolbar-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '27-controlgroup-toolbar-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/27-controlgroup-toolbar-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '27-controlgroup-toolbar-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/27-controlgroup-toolbar.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '27-controlgroup-toolbar-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/27-controlgroup-toolbar.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 05. Controlgroup - 03. Barra de herramientas',
        styles: [
            { href: `${styles}/pages/clase-29/27-controlgroup-toolbar.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/27-controlgroup-toolbar.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'checkboxradio' },
            { name: 'selectmenu' },
            { name: 'controlgroup' },
        ],
};
