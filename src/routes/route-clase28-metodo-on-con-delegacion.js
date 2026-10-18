/*
    *  ------------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-metodo-on-con-delegacion.js  --  /src/routes/route-clase28-metodo-on-con-delegacion.js  -----  *
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
export const routeClase28MetodoOnConDelegacion = {
        id: 'clase28MetodoOnConDelegacion',
        favicon: favicon,
        pageTitle: 'Clase 28 - 2. Método on con delegación',
        path: '/clase28-libreria-de-componentes-jquery-ui/02-metodo-on-con-delegacion',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/02-metodo-on-con-delegacion.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/02-metodo-on-con-delegacion-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/02-metodo-on-con-delegacion-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-metodo-on-con-delegacion-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/02-metodo-on-con-delegacion-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-metodo-on-con-delegacion-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/02-metodo-on-con-delegacion.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-metodo-on-con-delegacion-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/02-metodo-on-con-delegacion.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 2. Método on con delegación',
        styles: [
            { href: `${styles}/pages/clase-28/02-metodo-on-con-delegacion.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/02-metodo-on-con-delegacion.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
