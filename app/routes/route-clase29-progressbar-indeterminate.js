/*
    *  --------------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-progressbar-indeterminate.js  --  /src/routes/route-clase29-progressbar-indeterminate.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase29ProgressbarIndeterminate = {
        id: 'clase29ProgressbarIndeterminate',
        favicon: favicon,
        pageTitle: 'Clase 29 - 09. Progressbar - 04. Valor indeterminado',
        path: '/clase29-usando-jquery-ui/09-progressbar/04-indeterminate',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/53-progressbar-indeterminate.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/53-progressbar-indeterminate-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/53-progressbar-indeterminate-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '53-progressbar-indeterminate-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/53-progressbar-indeterminate-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '53-progressbar-indeterminate-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/53-progressbar-indeterminate.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '53-progressbar-indeterminate-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/53-progressbar-indeterminate.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 09. Progressbar - 04. Valor indeterminado',
        styles: [
            { href: `${styles}/pages/clase-29/53-progressbar-indeterminate.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/53-progressbar-indeterminate.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'progressbar' },
        ],
};
