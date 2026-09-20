/*
    *  ------------------------------------------------------------------------------------  *
    *  -----  route-clase26-ajax-form.js  --  /src/routes/route-clase26-ajax-form.js  -----  *
    *  ------------------------------------------------------------------------------------  *
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
    services,
    markdownShikiHtml,
} = paths;


/** @type {Route} */
export const routeClase26AjaxForm = {
        id: 'clase26AjaxForm',
        favicon: favicon,
        pageTitle: 'Clase 26 - 4. Ajax Form',
        path: '/clase26-variables-gestion-opciones-plugins/04-ajax-form',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-26/04-ajax-form.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-26/layout-aside-clase-26.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-26/04-ajax-form-description.html`, target: '[data-component-page="ajaxFormDescription"]' },
            { url: `${pagesComponents}/clase-26/04-ajax-form-demo.html`, target: '[data-component-page="ajaxFormDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '04-ajax-form-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-26/04-ajax-form-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-26`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '04-ajax-form-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-26/04-ajax-form.css`,
                urlOutput: `${markdownShikiHtml}/clase-26`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '04-ajax-form-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-26/04-ajax-form.js`,
                urlOutput: `${markdownShikiHtml}/clase-26`,
                target: '[data-shiki="codeJs"]',
            },
            {
                fileName: '04-ajax-form-demo-plugin-ajax-form.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-26/plugins/jquery.ajax.form.js`,
                urlOutput: `${markdownShikiHtml}/clase-26`,
                target: '[data-shiki="codePluginAjaxForm"]',
            },
            {
                fileName: '04-ajax-form-demo-plugin-basic-validation.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-26/plugins/jquery.basic-validation.js`,
                urlOutput: `${markdownShikiHtml}/clase-26`,
                target: '[data-shiki="codePluginBasicValidation"]',
            },
            {
                fileName: '04-ajax-form-demo-php.html',
                fileExtension: 'php',
                urlInput: `${services}/clase-26/enviar.php`,
                urlOutput: `${markdownShikiHtml}/clase-26`,
                target: '[data-shiki="codePhp"]',
            },
        ],
        headerTitle: 'Clase 26 - 4. Ajax Form',
        styles: [
            { href: `${styles}/pages/clase-26/04-ajax-form.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-26/plugins/jquery.ajax.form.js` },
            { src: `${scripts}/clase-26/plugins/jquery.basic-validation.js` },
            { src: `${scripts}/clase-26/04-ajax-form.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
