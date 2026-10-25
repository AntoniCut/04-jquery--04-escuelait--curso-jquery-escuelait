/*
    *  --------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-slider-handle.js  --  /src/routes/route-clase29-slider-handle.js  -----  *
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
export const routeClase29SliderHandle = {
        id: 'clase29SliderHandle',
        favicon: favicon,
        pageTitle: 'Clase 29 - 11. Slider - 03. Asa propia',
        path: '/clase29-usando-jquery-ui/11-slider/03-handle',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/59-slider-handle.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/59-slider-handle-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/59-slider-handle-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '59-slider-handle-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/59-slider-handle-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '59-slider-handle-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/59-slider-handle.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '59-slider-handle-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/59-slider-handle.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 11. Slider - 03. Asa propia',
        styles: [
            { href: `${styles}/pages/clase-29/59-slider-handle.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/59-slider-handle.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'slider' },
        ],
};
