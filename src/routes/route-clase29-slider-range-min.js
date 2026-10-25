/*
    *  --------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-slider-range-min.js  --  /src/routes/route-clase29-slider-range-min.js  -----  *
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
export const routeClase29SliderRangeMin = {
        id: 'clase29SliderRangeMin',
        favicon: favicon,
        pageTitle: 'Clase 29 - 11. Slider - 07. Rango con mínimo fijo',
        path: '/clase29-usando-jquery-ui/11-slider/07-range-min',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/63-slider-range-min.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/63-slider-range-min-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/63-slider-range-min-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '63-slider-range-min-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/63-slider-range-min-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '63-slider-range-min-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/63-slider-range-min.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '63-slider-range-min-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/63-slider-range-min.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 11. Slider - 07. Rango con mínimo fijo',
        styles: [
            { href: `${styles}/pages/clase-29/63-slider-range-min.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/63-slider-range-min.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'slider' },
        ],
};
