/*
    *  ------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-slider-vertical-range.js  --  /src/routes/route-clase29-slider-vertical-range.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------  *
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
export const routeClase29SliderVerticalRange = {
        id: 'clase29SliderVerticalRange',
        favicon: favicon,
        pageTitle: 'Clase 29 - 11. Slider - 10. Rango vertical',
        path: '/clase29-usando-jquery-ui/11-slider/10-vertical-range',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/66-slider-vertical-range.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/66-slider-vertical-range-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/66-slider-vertical-range-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '66-slider-vertical-range-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/66-slider-vertical-range-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '66-slider-vertical-range-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/66-slider-vertical-range.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '66-slider-vertical-range-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/66-slider-vertical-range.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 11. Slider - 10. Rango vertical',
        styles: [
            { href: `${styles}/pages/clase-29/66-slider-vertical-range.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/66-slider-vertical-range.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'slider' },
        ],
};
