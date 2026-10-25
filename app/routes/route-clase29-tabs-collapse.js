/*
    *  --------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-tabs-collapse.js  --  /src/routes/route-clase29-tabs-collapse.js  -----  *
    *  --------------------------------------------------------------------------------------------  *
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
export const routeClase29TabsCollapse = {
        id: 'clase29TabsCollapse',
        favicon: favicon,
        pageTitle: 'Clase 29 - 13. Tabs - 02. Contraer el contenido',
        path: '/clase29-usando-jquery-ui/13-tabs/02-collapse',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/75-tabs-collapse.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/75-tabs-collapse-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/75-tabs-collapse-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '75-tabs-collapse-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/75-tabs-collapse-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '75-tabs-collapse-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/75-tabs-collapse.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '75-tabs-collapse-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/75-tabs-collapse.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 13. Tabs - 02. Contraer el contenido',
        styles: [
            { href: `${styles}/pages/clase-29/75-tabs-collapse.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/75-tabs-collapse.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'tabs' },
        ],
};
