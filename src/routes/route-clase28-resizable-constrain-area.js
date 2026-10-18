/*
    *  ------------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-resizable-constrain-area.js  --  /src/routes/route-clase28-resizable-constrain-area.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase28ResizableConstrainArea = {
        id: 'clase28ResizableConstrainArea',
        favicon: favicon,
        pageTitle: 'Clase 28 - 22. Limitar el área',
        path: '/clase28-libreria-de-componentes-jquery-ui/22-resizable-constrain-area',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/22-resizable-constrain-area.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/22-resizable-constrain-area-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/22-resizable-constrain-area-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '22-resizable-constrain-area-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/22-resizable-constrain-area-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '22-resizable-constrain-area-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/22-resizable-constrain-area.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '22-resizable-constrain-area-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/22-resizable-constrain-area.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 22. Limitar el área',
        styles: [
            { href: `${styles}/pages/clase-28/22-resizable-constrain-area.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/22-resizable-constrain-area.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
            { name: 'resizable' },
        ],
};
