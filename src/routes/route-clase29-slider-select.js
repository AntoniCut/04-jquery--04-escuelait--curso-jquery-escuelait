/*
    *  --------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-slider-select.js  --  /src/routes/route-clase29-slider-select.js  -----  *
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
export const routeClase29SliderSelect = {
        id: 'clase29SliderSelect',
        favicon: favicon,
        pageTitle: 'Clase 29 - 11. Slider - 08. Unido a un select',
        path: '/clase29-usando-jquery-ui/11-slider/08-select',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/64-slider-select.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/64-slider-select-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/64-slider-select-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '64-slider-select-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/64-slider-select-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '64-slider-select-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/64-slider-select.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '64-slider-select-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/64-slider-select.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 11. Slider - 08. Unido a un select',
        styles: [
            { href: `${styles}/pages/clase-29/64-slider-select.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/64-slider-select.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'slider' },
        ],
};
