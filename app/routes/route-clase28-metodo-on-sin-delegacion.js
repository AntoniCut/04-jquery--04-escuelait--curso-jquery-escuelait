/*
    *  ------------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-metodo-on-sin-delegacion.js  --  /src/routes/route-clase28-metodo-on-sin-delegacion.js  -----  *
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
export const routeClase28MetodoOnSinDelegacion = {
        id: 'clase28MetodoOnSinDelegacion',
        favicon: favicon,
        pageTitle: 'Clase 28 - 1. Método on sin delegación',
        path: '/clase28-libreria-de-componentes-jquery-ui/01-metodo-on-sin-delegacion',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/01-metodo-on-sin-delegacion.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/01-metodo-on-sin-delegacion-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/01-metodo-on-sin-delegacion-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-metodo-on-sin-delegacion-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/01-metodo-on-sin-delegacion-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-metodo-on-sin-delegacion-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/01-metodo-on-sin-delegacion.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '01-metodo-on-sin-delegacion-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/01-metodo-on-sin-delegacion.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 1. Método on sin delegación',
        styles: [
            { href: `${styles}/pages/clase-28/01-metodo-on-sin-delegacion.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/01-metodo-on-sin-delegacion.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
