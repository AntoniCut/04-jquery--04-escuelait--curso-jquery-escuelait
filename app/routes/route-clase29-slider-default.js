/*
    *  ----------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-slider-default.js  --  /src/routes/route-clase29-slider-default.js  -----  *
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
export const routeClase29SliderDefault = {
        id: 'clase29SliderDefault',
        favicon: favicon,
        pageTitle: 'Clase 29 - 11. Slider - 01. Funcionalidad por defecto',
        path: '/clase29-usando-jquery-ui/11-slider/01-default',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/57-slider-default.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/57-slider-default-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/57-slider-default-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '57-slider-default-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/57-slider-default-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '57-slider-default-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/57-slider-default.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '57-slider-default-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/57-slider-default.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 11. Slider - 01. Funcionalidad por defecto',
        styles: [
            { href: `${styles}/pages/clase-29/57-slider-default.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/57-slider-default.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'slider' },
        ],
};
