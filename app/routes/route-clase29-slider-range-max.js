/*
    *  --------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-slider-range-max.js  --  /src/routes/route-clase29-slider-range-max.js  -----  *
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
export const routeClase29SliderRangeMax = {
        id: 'clase29SliderRangeMax',
        favicon: favicon,
        pageTitle: 'Clase 29 - 11. Slider - 06. Rango con máximo fijo',
        path: '/clase29-usando-jquery-ui/11-slider/06-range-max',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/62-slider-range-max.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/62-slider-range-max-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/62-slider-range-max-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '62-slider-range-max-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/62-slider-range-max-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '62-slider-range-max-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/62-slider-range-max.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '62-slider-range-max-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/62-slider-range-max.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 11. Slider - 06. Rango con máximo fijo',
        styles: [
            { href: `${styles}/pages/clase-29/62-slider-range-max.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/62-slider-range-max.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'slider' },
        ],
};
