/*
    *  --------------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-resizable-visual-feedback.js  --  /src/routes/route-clase28-resizable-visual-feedback.js  -----  *
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
export const routeClase28ResizableVisualFeedback = {
        id: 'clase28ResizableVisualFeedback',
        favicon: favicon,
        pageTitle: 'Clase 28 - 29. Respuesta visual',
        path: '/clase28-libreria-de-componentes-jquery-ui/29-resizable-visual-feedback',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/29-resizable-visual-feedback.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/29-resizable-visual-feedback-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/29-resizable-visual-feedback-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '29-resizable-visual-feedback-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/29-resizable-visual-feedback-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '29-resizable-visual-feedback-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/29-resizable-visual-feedback.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '29-resizable-visual-feedback-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/29-resizable-visual-feedback.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 29. Respuesta visual',
        styles: [
            { href: `${styles}/pages/clase-28/29-resizable-visual-feedback.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/29-resizable-visual-feedback.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
            { name: 'resizable' },
        ],
};
