/*
    *  ------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-slider-multiple.js  --  /src/routes/route-clase29-slider-multiple.js  -----  *
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
export const routeClase29SliderMultiple = {
        id: 'clase29SliderMultiple',
        favicon: favicon,
        pageTitle: 'Clase 29 - 11. Slider - 04. Varios deslizadores',
        path: '/clase29-usando-jquery-ui/11-slider/04-multiple',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/60-slider-multiple.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/60-slider-multiple-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/60-slider-multiple-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '60-slider-multiple-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/60-slider-multiple-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '60-slider-multiple-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/60-slider-multiple.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '60-slider-multiple-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/60-slider-multiple.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 11. Slider - 04. Varios deslizadores',
        styles: [
            { href: `${styles}/pages/clase-29/60-slider-multiple.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/60-slider-multiple.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'slider' },
        ],
};
