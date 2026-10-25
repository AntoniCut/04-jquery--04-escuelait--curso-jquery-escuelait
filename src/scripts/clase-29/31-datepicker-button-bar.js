/*
    *  ------------------------------------------------------------------------------------------------  *
    *  -----  31-datepicker-button-bar.js  --  /src/scripts/clase-29/31-datepicker-button-bar.js  -----  *
    *  ------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  31-datepicker-button-bar.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLInputElement>} - `campo de fecha` */
    const $fecha = $("#datepicker");

    //  -----  mostrar la barra con hoy y cerrar  -----
    $fecha.datepicker({
        showButtonPanel: true,
        currentText: "Hoy",
        closeText: "Cerrar",
    });
})(jQuery);
