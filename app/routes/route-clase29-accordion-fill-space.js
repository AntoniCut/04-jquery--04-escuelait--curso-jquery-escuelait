/*
    *  ----------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-accordion-fill-space.js  --  /src/routes/route-clase29-accordion-fill-space.js  -----  *
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
export const routeClase29AccordionFillSpace = {
        id: 'clase29AccordionFillSpace',
        favicon: favicon,
        pageTitle: 'Clase 29 - 01. Accordion - 04. Rellenar el espacio',
        path: '/clase29-usando-jquery-ui/01-accordion/04-fill-space',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/04-accordion-fill-space.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/04-accordion-fill-space-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/04-accordion-fill-space-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '04-accordion-fill-space-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/04-accordion-fill-space-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '04-accordion-fill-space-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/04-accordion-fill-space.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '04-accordion-fill-space-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/04-accordion-fill-space.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 01. Accordion - 04. Rellenar el espacio',
        styles: [
            { href: `${styles}/pages/clase-29/04-accordion-fill-space.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/04-accordion-fill-space.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'accordion' },
        ],
};
