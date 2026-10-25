/*
    *  ------------------------------------------------------------------------------------  *
    *  -----  36-datepicker-icon.js  --  /src/scripts/clase-29/36-datepicker-icon.js  -----  *
    *  ------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  36-datepicker-icon.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLInputElement>} - `campo de fecha` */
    const $fecha = $("#datepicker");

    //  -----  abrir el calendario desde el botón  -----
    $fecha.datepicker({
        showOn: "button",
        buttonText: "Abrir el calendario",
        dateFormat: "dd/mm/yy",
    });
})(jQuery);
