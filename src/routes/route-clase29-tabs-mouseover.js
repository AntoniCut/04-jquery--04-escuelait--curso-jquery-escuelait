/*
    *  ----------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-tabs-mouseover.js  --  /src/routes/route-clase29-tabs-mouseover.js  -----  *
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
export const routeClase29TabsMouseover = {
        id: 'clase29TabsMouseover',
        favicon: favicon,
        pageTitle: 'Clase 29 - 13. Tabs - 04. Abrir al pasar el ratón',
        path: '/clase29-usando-jquery-ui/13-tabs/04-mouseover',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/77-tabs-mouseover.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/77-tabs-mouseover-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/77-tabs-mouseover-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '77-tabs-mouseover-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/77-tabs-mouseover-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '77-tabs-mouseover-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/77-tabs-mouseover.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '77-tabs-mouseover-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/77-tabs-mouseover.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 13. Tabs - 04. Abrir al pasar el ratón',
        styles: [
            { href: `${styles}/pages/clase-29/77-tabs-mouseover.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/77-tabs-mouseover.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'tabs' },
        ],
};
