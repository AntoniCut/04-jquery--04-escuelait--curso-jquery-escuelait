/*
    *  --------------------------------------------------------------------------------------------------  *
    *  -----  14-datepicker-week.js  --  /src/scripts/clase-29/06-datepicker/14-datepicker-week.js  -----  *
    *  --------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  14-datepicker-week.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLInputElement>} - `campo de fecha` */
    const $fecha = $("#datepicker");

    //  -----  mostrar el número de semana  -----
    $fecha.datepicker({
        showWeek: true,
        firstDay: 1,
        dateFormat: "dd/mm/yy",
    });
})(jQuery);
