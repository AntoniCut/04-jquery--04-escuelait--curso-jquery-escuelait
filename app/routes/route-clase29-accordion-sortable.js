/*
    *  ------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-accordion-sortable.js  --  /src/routes/route-clase29-accordion-sortable.js  -----  *
    *  ------------------------------------------------------------------------------------------------------  *
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
export const routeClase29AccordionSortable = {
        id: 'clase29AccordionSortable',
        favicon: favicon,
        pageTitle: 'Clase 29 - 01. Accordion - 06. Ordenable',
        path: '/clase29-usando-jquery-ui/01-accordion/06-sortable',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/06-accordion-sortable.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/06-accordion-sortable-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/06-accordion-sortable-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '06-accordion-sortable-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/06-accordion-sortable-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '06-accordion-sortable-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/06-accordion-sortable.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '06-accordion-sortable-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/06-accordion-sortable.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 01. Accordion - 06. Ordenable',
        styles: [
            { href: `${styles}/pages/clase-29/06-accordion-sortable.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/06-accordion-sortable.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'sortable' },
            { name: 'accordion' },
        ],
};
