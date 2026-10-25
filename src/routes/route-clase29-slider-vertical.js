/*
    *  ------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-slider-vertical.js  --  /src/routes/route-clase29-slider-vertical.js  -----  *
    *  ------------------------------------------------------------------------------------------------  *
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
export const routeClase29SliderVertical = {
        id: 'clase29SliderVertical',
        favicon: favicon,
        pageTitle: 'Clase 29 - 11. Slider - 11. Vertical',
        path: '/clase29-usando-jquery-ui/11-slider/11-vertical',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/67-slider-vertical.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/67-slider-vertical-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/67-slider-vertical-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '67-slider-vertical-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/67-slider-vertical-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '67-slider-vertical-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/67-slider-vertical.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '67-slider-vertical-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/67-slider-vertical.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 11. Slider - 11. Vertical',
        styles: [
            { href: `${styles}/pages/clase-29/67-slider-vertical.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/67-slider-vertical.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'slider' },
        ],
};
