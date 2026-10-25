/*
    *  --------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-checkboxradio-no-icons.js  --  /src/routes/route-clase29-checkboxradio-no-icons.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------  *
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
export const routeClase29CheckboxradioNoIcons = {
        id: 'clase29CheckboxradioNoIcons',
        favicon: favicon,
        pageTitle: 'Clase 29 - 04. Checkboxradio - 02. Sin iconos',
        path: '/clase29-usando-jquery-ui/04-checkboxradio/02-no-icons',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/22-checkboxradio-no-icons.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/22-checkboxradio-no-icons-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/22-checkboxradio-no-icons-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '22-checkboxradio-no-icons-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/22-checkboxradio-no-icons-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '22-checkboxradio-no-icons-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/22-checkboxradio-no-icons.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '22-checkboxradio-no-icons-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/22-checkboxradio-no-icons.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 04. Checkboxradio - 02. Sin iconos',
        styles: [
            { href: `${styles}/pages/clase-29/22-checkboxradio-no-icons.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/22-checkboxradio-no-icons.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'checkboxradio' },
        ],
};
