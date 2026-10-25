/*
    *  ----------------------------------------------------------------------------------  *
    *  -----  42-dialog-default.js  --  /src/scripts/clase-29/42-dialog-default.js  -----  *
    *  ----------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  42-dialog-default.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `ventana de la demo` */
    const $dialogo = $("#dialog");

    //  -----  abrir la ventana con las opciones por defecto  -----
    $dialogo.dialog({
        width: 360,
    });
})(jQuery);
