/*
    *  ----------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-dialog-modal-form.js  --  /src/routes/route-clase29-dialog-modal-form.js  -----  *
    *  ----------------------------------------------------------------------------------------------------  *
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
export const routeClase29DialogModalForm = {
        id: 'clase29DialogModalForm',
        favicon: favicon,
        pageTitle: 'Clase 29 - 07. Dialog - 04. Formulario modal',
        path: '/clase29-usando-jquery-ui/07-dialog/04-modal-form',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/45-dialog-modal-form.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/45-dialog-modal-form-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/45-dialog-modal-form-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '45-dialog-modal-form-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/45-dialog-modal-form-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '45-dialog-modal-form-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/45-dialog-modal-form.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '45-dialog-modal-form-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/45-dialog-modal-form.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 07. Dialog - 04. Formulario modal',
        styles: [
            { href: `${styles}/pages/clase-29/45-dialog-modal-form.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/45-dialog-modal-form.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'dialog' },
        ],
};
