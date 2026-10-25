/*
    *  ------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-accordion-collapse.js  --  /src/routes/route-clase29-accordion-collapse.js  -----  *
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
export const routeClase29AccordionCollapse = {
        id: 'clase29AccordionCollapse',
        favicon: favicon,
        pageTitle: 'Clase 29 - 01. Accordion - 02. Contraer el contenido',
        path: '/clase29-usando-jquery-ui/01-accordion/02-collapse',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/02-accordion-collapse.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/02-accordion-collapse-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/02-accordion-collapse-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-accordion-collapse-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/02-accordion-collapse-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-accordion-collapse-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/02-accordion-collapse.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-accordion-collapse-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/02-accordion-collapse.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 01. Accordion - 02. Contraer el contenido',
        styles: [
            { href: `${styles}/pages/clase-29/02-accordion-collapse.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/02-accordion-collapse.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'accordion' },
        ],
};
