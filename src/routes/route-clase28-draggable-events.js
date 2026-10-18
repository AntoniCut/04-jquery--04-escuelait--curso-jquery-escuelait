/*
    *  --------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-draggable-events.js  --  /src/routes/route-clase28-draggable-events.js  -----  *
    *  --------------------------------------------------------------------------------------------------  *
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
export const routeClase28DraggableEvents = {
        id: 'clase28DraggableEvents',
        favicon: favicon,
        pageTitle: 'Clase 28 - 8. Eventos',
        path: '/clase28-libreria-de-componentes-jquery-ui/08-draggable-events',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/08-draggable-events.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/08-draggable-events-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/08-draggable-events-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '08-draggable-events-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/08-draggable-events-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '08-draggable-events-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/08-draggable-events.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '08-draggable-events-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/08-draggable-events.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 8. Eventos',
        styles: [
            { href: `${styles}/pages/clase-28/08-draggable-events.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/08-draggable-events.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
