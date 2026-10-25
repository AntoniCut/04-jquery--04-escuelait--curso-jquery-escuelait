/*
    *  ------------------------------------------------------------------------------------------  *
    *  -----  28-datepicker-default.js  --  /src/scripts/clase-29/28-datepicker-default.js  -----  *
    *  ------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  28-datepicker-default.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLInputElement>} - `campo de fecha` */
    const $fecha = $("#datepicker");

    //  -----  abrir el calendario con las opciones por defecto  -----
    $fecha.datepicker();
})(jQuery);
