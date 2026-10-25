/*
    *  ------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-slider-range.js  --  /src/routes/route-clase29-slider-range.js  -----  *
    *  ------------------------------------------------------------------------------------------  *
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
export const routeClase29SliderRange = {
        id: 'clase29SliderRange',
        favicon: favicon,
        pageTitle: 'Clase 29 - 11. Slider - 05. Rango',
        path: '/clase29-usando-jquery-ui/11-slider/05-range',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/61-slider-range.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/61-slider-range-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/61-slider-range-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '61-slider-range-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/61-slider-range-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '61-slider-range-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/61-slider-range.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '61-slider-range-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/61-slider-range.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 11. Slider - 05. Rango',
        styles: [
            { href: `${styles}/pages/clase-29/61-slider-range.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/61-slider-range.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'slider' },
        ],
};
