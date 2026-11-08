/*
    *  --------------------------------------------------------------------------  *
    *  -----  01-envio-html.js  --  /src/scripts/clase-30/01-envio-html.js  -----  *
    *  --------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/plugins.d.ts" />


//  -----  iniciar el formulario cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLFormElement>} - `formulario de contacto` */
    const $contacto = /** @type {JQuery<HTMLFormElement>} */ ($("#contacto"));

    //  -----  activar el plugin sin opciones  -----
    $contacto.smartform();

});
