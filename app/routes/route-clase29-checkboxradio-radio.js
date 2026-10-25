/*
    *  --------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-checkboxradio-radio.js  --  /src/routes/route-clase29-checkboxradio-radio.js  -----  *
    *  --------------------------------------------------------------------------------------------------------  *
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
export const routeClase29CheckboxradioRadio = {
        id: 'clase29CheckboxradioRadio',
        favicon: favicon,
        pageTitle: 'Clase 29 - 04. Checkboxradio - 04. Grupo de radios',
        path: '/clase29-usando-jquery-ui/04-checkboxradio/04-radio',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/24-checkboxradio-radio.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/24-checkboxradio-radio-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/24-checkboxradio-radio-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '24-checkboxradio-radio-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/24-checkboxradio-radio-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '24-checkboxradio-radio-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/24-checkboxradio-radio.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '24-checkboxradio-radio-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/24-checkboxradio-radio.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 04. Checkboxradio - 04. Grupo de radios',
        styles: [
            { href: `${styles}/pages/clase-29/24-checkboxradio-radio.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/24-checkboxradio-radio.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'checkboxradio' },
        ],
};
