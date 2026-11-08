/*
    *  ----------------------------------------------------------------------  *
    *  -----  02-opciones.js  --  /src/scripts/clase-30/02-opciones.js  -----  *
    *  ----------------------------------------------------------------------  *
*/


/// <reference path="../../../types/plugins.d.ts" />


//  -----  iniciar el formulario cuando el dom esté listo  -----
$(() => {

    /** @type {JQuery<HTMLFormElement>} - `formulario de contacto` */
    const $contacto = /** @type {JQuery<HTMLFormElement>} */ ($("#contacto"));

    //  -----  activar el plugin con capa y método explícitos  -----
    $contacto.smartform({

        /** - `capa que ya está en la página` */
        capaMensaje: "#mensaje",

        /** - `envío por post` */
        metodo: "post"
    });

});
