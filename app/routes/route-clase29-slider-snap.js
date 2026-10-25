/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  route-clase29-slider-snap.js  --  /src/routes/route-clase29-slider-snap.js  -----  *
    *  ----------------------------------------------------------------------------------------  *
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
export const routeClase29SliderSnap = {
        id: 'clase29SliderSnap',
        favicon: favicon,
        pageTitle: 'Clase 29 - 11. Slider - 09. Ajuste a incrementos',
        path: '/clase29-usando-jquery-ui/11-slider/09-snap',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/65-slider-snap.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/65-slider-snap-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/65-slider-snap-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '65-slider-snap-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/65-slider-snap-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '65-slider-snap-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/65-slider-snap.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '65-slider-snap-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/65-slider-snap.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 11. Slider - 09. Ajuste a incrementos',
        styles: [
            { href: `${styles}/pages/clase-29/65-slider-snap.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/65-slider-snap.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'slider' },
        ],
};
