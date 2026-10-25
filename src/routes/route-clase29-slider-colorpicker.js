/*
    *  ------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-slider-colorpicker.js  --  /src/routes/route-clase29-slider-colorpicker.js  -----  *
    *  ------------------------------------------------------------------------------------------------------  *
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
export const routeClase29SliderColorpicker = {
        id: 'clase29SliderColorpicker',
        favicon: favicon,
        pageTitle: 'Clase 29 - 11. Slider - 02. Selector de color',
        path: '/clase29-usando-jquery-ui/11-slider/02-colorpicker',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/58-slider-colorpicker.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/58-slider-colorpicker-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/58-slider-colorpicker-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '58-slider-colorpicker-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/58-slider-colorpicker-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '58-slider-colorpicker-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/58-slider-colorpicker.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '58-slider-colorpicker-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/58-slider-colorpicker.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 11. Slider - 02. Selector de color',
        styles: [
            { href: `${styles}/pages/clase-29/58-slider-colorpicker.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/58-slider-colorpicker.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'slider' },
        ],
};
