/*
    *  --------------------------------------------------------------------------------------------  *
    *  -----  34-datepicker-multiple.js  --  /src/scripts/clase-29/34-datepicker-multiple.js  -----  *
    *  --------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  34-datepicker-multiple.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLInputElement>} - `campo de fecha` */
    const $fecha = $("#datepicker");

    //  -----  mostrar tres meses a la vez  -----
    $fecha.datepicker({
        numberOfMonths: 3,
        dateFormat: "dd/mm/yy",
    });
})(jQuery);
