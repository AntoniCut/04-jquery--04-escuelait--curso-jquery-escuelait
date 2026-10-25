/*
    *  ------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-datepicker-animations.js  --  /src/routes/route-clase29-datepicker-animations.js  -----  *
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
export const routeClase29DatepickerAnimations = {
        id: 'clase29DatepickerAnimations',
        favicon: favicon,
        pageTitle: 'Clase 29 - 06. Datepicker - 02. Animaciones',
        path: '/clase29-usando-jquery-ui/06-datepicker/02-animations',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/29-datepicker-animations.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/29-datepicker-animations-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/29-datepicker-animations-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '29-datepicker-animations-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/29-datepicker-animations-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '29-datepicker-animations-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/29-datepicker-animations.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '29-datepicker-animations-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/29-datepicker-animations.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 06. Datepicker - 02. Animaciones',
        styles: [
            { href: `${styles}/pages/clase-29/29-datepicker-animations.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/29-datepicker-animations.js` },
        ],
        libs: [
            { name: 'effects' },
            { name: 'tooltip' },
            { name: 'datepicker' },
        ],
};
