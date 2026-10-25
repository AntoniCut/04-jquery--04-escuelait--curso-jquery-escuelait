/*
    *  --------------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-dialog-modal-confirmation.js  --  /src/routes/route-clase29-dialog-modal-confirmation.js  -----  *
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
export const routeClase29DialogModalConfirmation = {
        id: 'clase29DialogModalConfirmation',
        favicon: favicon,
        pageTitle: 'Clase 29 - 07. Dialog - 03. Confirmación modal',
        path: '/clase29-usando-jquery-ui/07-dialog/03-modal-confirmation',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/44-dialog-modal-confirmation.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/44-dialog-modal-confirmation-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/44-dialog-modal-confirmation-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '44-dialog-modal-confirmation-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/44-dialog-modal-confirmation-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '44-dialog-modal-confirmation-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/44-dialog-modal-confirmation.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '44-dialog-modal-confirmation-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/44-dialog-modal-confirmation.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 07. Dialog - 03. Confirmación modal',
        styles: [
            { href: `${styles}/pages/clase-29/44-dialog-modal-confirmation.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/44-dialog-modal-confirmation.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'dialog' },
        ],
};
