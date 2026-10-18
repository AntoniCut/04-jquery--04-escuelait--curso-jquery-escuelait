/*
    *  ----------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-draggable-default.js  --  /src/routes/route-clase28-draggable-default.js  -----  *
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
export const routeClase28DraggableDefault = {
        id: 'clase28DraggableDefault',
        favicon: favicon,
        pageTitle: 'Clase 28 - 4. Funcionalidad por defecto',
        path: '/clase28-libreria-de-componentes-jquery-ui/04-draggable-default',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/04-draggable-default.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/04-draggable-default-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/04-draggable-default-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '04-draggable-default-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/04-draggable-default-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '04-draggable-default-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/04-draggable-default.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '04-draggable-default-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/04-draggable-default.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 4. Funcionalidad por defecto',
        styles: [
            { href: `${styles}/pages/clase-28/04-draggable-default.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/04-draggable-default.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
