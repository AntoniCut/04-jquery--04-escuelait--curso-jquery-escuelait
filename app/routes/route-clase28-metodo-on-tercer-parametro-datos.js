/*
    *  ----------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  route-clase28-metodo-on-tercer-parametro-datos.js  --  /src/routes/route-clase28-metodo-on-tercer-parametro-datos.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase28MetodoOnTercerParametroDatos = {
        id: 'clase28MetodoOnTercerParametroDatos',
        favicon: favicon,
        pageTitle: 'Clase 28 - 3. Método on con datos',
        path: '/clase28-libreria-de-componentes-jquery-ui/03-metodo-on-tercer-parametro-datos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-28/03-metodo-on-tercer-parametro-datos.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-28/layout-aside-clase-28.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-28/03-metodo-on-tercer-parametro-datos-description.html`, target: '[data-component-page="description"]' },
            { url: `${pagesComponents}/clase-28/03-metodo-on-tercer-parametro-datos-demo.html`, target: '[data-component-page="demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '03-metodo-on-tercer-parametro-datos-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-28/03-metodo-on-tercer-parametro-datos-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '03-metodo-on-tercer-parametro-datos-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-28/03-metodo-on-tercer-parametro-datos.css`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '03-metodo-on-tercer-parametro-datos-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-28/03-metodo-on-tercer-parametro-datos.js`,
                urlOutput: `${markdownShikiHtml}/clase-28`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 28 - 3. Método on con datos',
        styles: [
            { href: `${styles}/pages/clase-28/03-metodo-on-tercer-parametro-datos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-28/03-metodo-on-tercer-parametro-datos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
