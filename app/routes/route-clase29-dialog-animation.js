/*
    *  --------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-dialog-animation.js  --  /src/routes/route-clase29-dialog-animation.js  -----  *
    *  --------------------------------------------------------------------------------------------------  *
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
export const routeClase29DialogAnimation = {
        id: 'clase29DialogAnimation',
        favicon: favicon,
        pageTitle: 'Clase 29 - 07. Dialog - 02. Animación',
        path: '/clase29-usando-jquery-ui/07-dialog/02-animation',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/43-dialog-animation.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/43-dialog-animation-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/43-dialog-animation-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '43-dialog-animation-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/43-dialog-animation-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '43-dialog-animation-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/43-dialog-animation.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '43-dialog-animation-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/43-dialog-animation.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 07. Dialog - 02. Animación',
        styles: [
            { href: `${styles}/pages/clase-29/43-dialog-animation.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/43-dialog-animation.js` },
        ],
        libs: [
            { name: 'effects' },
            { name: 'tooltip' },
            { name: 'dialog' },
        ],
};
