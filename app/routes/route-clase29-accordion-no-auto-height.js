/*
    *  ------------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase29-accordion-no-auto-height.js  --  /src/routes/route-clase29-accordion-no-auto-height.js  -----  *
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
export const routeClase29AccordionNoAutoHeight = {
        id: 'clase29AccordionNoAutoHeight',
        favicon: favicon,
        pageTitle: 'Clase 29 - 01. Accordion - 05. Sin altura automática',
        path: '/clase29-usando-jquery-ui/01-accordion/05-no-auto-height',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-29/05-accordion-no-auto-height.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-29/layout-aside-clase-29.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-29/05-accordion-no-auto-height-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-29/05-accordion-no-auto-height-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '05-accordion-no-auto-height-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-29/05-accordion-no-auto-height-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '05-accordion-no-auto-height-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-29/05-accordion-no-auto-height.css`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '05-accordion-no-auto-height-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-29/05-accordion-no-auto-height.js`,
                urlOutput: `${markdownShikiHtml}/clase-29`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 29 - 01. Accordion - 05. Sin altura automática',
        styles: [
            { href: `${styles}/pages/clase-29/05-accordion-no-auto-height.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-29/05-accordion-no-auto-height.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'accordion' },
        ],
};
