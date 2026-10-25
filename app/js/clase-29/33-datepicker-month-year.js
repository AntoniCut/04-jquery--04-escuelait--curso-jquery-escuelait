/*
    *  ------------------------------------------------------------------------------------------------  *
    *  -----  33-datepicker-month-year.js  --  /src/scripts/clase-29/33-datepicker-month-year.js  -----  *
    *  ------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  33-datepicker-month-year.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLInputElement>} - `campo de fecha` */
    const $fecha = $("#datepicker");

    //  -----  elegir mes y año en menús  -----
    $fecha.datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "c-20:c+5",
        dateFormat: "dd/mm/yy",
    });
})(jQuery);
