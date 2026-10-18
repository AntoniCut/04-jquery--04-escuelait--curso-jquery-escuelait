/*
    *  --------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-draggable-scroll.js  --  /src/routes/route-clase28-draggable-scroll.js  -----  *
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
export const routeClase28DraggableScroll = {
        id: 'clase28DraggableScroll',
        favicon: favicon,
        pageTitle: 'Clase 28 - 5. Desplazamiento automático',
        path: '/clase28-libreria-de-componentes-jquery-ui/05-draggable-scroll',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/05-draggable-scroll.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/05-draggable-scroll-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/05-draggable-scroll-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '05-draggable-scroll-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/05-draggable-scroll-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '05-draggable-scroll-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/05-draggable-scroll.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '05-draggable-scroll-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/05-draggable-scroll.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 5. Desplazamiento automático',
        styles: [
            { href: `${styles}/pages/clase-28/05-draggable-scroll.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/05-draggable-scroll.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
