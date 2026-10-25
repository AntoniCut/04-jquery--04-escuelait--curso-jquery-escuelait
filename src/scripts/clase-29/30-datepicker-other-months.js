/*
    *  ----------------------------------------------------------------------------------------------------  *
    *  -----  30-datepicker-other-months.js  --  /src/scripts/clase-29/30-datepicker-other-months.js  -----  *
    *  ----------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  30-datepicker-other-months.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLInputElement>} - `campo de fecha` */
    const $fecha = $("#datepicker");

    //  -----  mostrar y permitir elegir los días de los meses contiguos  -----
    $fecha.datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
    });
})(jQuery);
