/*
    *  --------------------------------------------------------------------------------------------  *
    *  -----  39-datepicker-restrict.js  --  /src/scripts/clase-29/39-datepicker-restrict.js  -----  *
    *  --------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  39-datepicker-restrict.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLInputElement>} - `campo de fecha` */
    const $fecha = $("#datepicker");

    //  -----  limitar el calendario a un rango corto  -----
    $fecha.datepicker({
        minDate: -20,
        maxDate: "+1M +10D",
        dateFormat: "dd/mm/yy",
    });
})(jQuery);
