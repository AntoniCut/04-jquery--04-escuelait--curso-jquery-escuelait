/*
    *  ----------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-draggable-snap-to.js  --  /src/routes/route-clase28-draggable-snap-to.js  -----  *
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
export const routeClase28DraggableSnapTo = {
        id: 'clase28DraggableSnapTo',
        favicon: favicon,
        pageTitle: 'Clase 28 - 02. Interacción Draggable - 09. Ajuste a un elemento o a una rejilla',
        path: '/clase28-libreria-de-componentes-jquery-ui/02-interaccion-draggable/09-snap-to',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/12-draggable-snap-to.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/12-draggable-snap-to-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/12-draggable-snap-to-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '12-draggable-snap-to-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/12-draggable-snap-to-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '12-draggable-snap-to-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/12-draggable-snap-to.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '12-draggable-snap-to-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/12-draggable-snap-to.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 02. Interacción Draggable - 09. Ajuste a un elemento o a una rejilla',
        styles: [
            { href: `${styles}/pages/clase-28/12-draggable-snap-to.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/12-draggable-snap-to.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
