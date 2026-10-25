/*
    *  ----------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-dialog-modal-message.js  --  /src/routes/route-clase29-dialog-modal-message.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------  *
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
export const routeClase29DialogModalMessage = {
        id: 'clase29DialogModalMessage',
        favicon: favicon,
        pageTitle: 'Clase 29 - 07. Dialog - 05. Mensaje modal',
        path: '/clase29-usando-jquery-ui/07-dialog/05-modal-message',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/46-dialog-modal-message.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/46-dialog-modal-message-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/46-dialog-modal-message-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '46-dialog-modal-message-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/46-dialog-modal-message-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '46-dialog-modal-message-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/46-dialog-modal-message.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '46-dialog-modal-message-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/46-dialog-modal-message.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 07. Dialog - 05. Mensaje modal',
        styles: [
            { href: `${styles}/pages/clase-29/46-dialog-modal-message.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/46-dialog-modal-message.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'dialog' },
        ],
};
