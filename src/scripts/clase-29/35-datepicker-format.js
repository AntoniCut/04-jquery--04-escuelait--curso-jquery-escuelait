/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  35-datepicker-format.js  --  /src/scripts/clase-29/35-datepicker-format.js  -----  *
    *  ----------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  35-datepicker-format.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLInputElement>} - `fecha corta` */
    const $corto = $("#corto");

    /** @type {JQuery<HTMLInputElement>} - `fecha larga` */
    const $largo = $("#largo");

    //  -----  mostrar día, mes y año en cifras  -----
    $corto.datepicker({
        dateFormat: "dd/mm/yy",
        appendText: " (dd/mm/aa)",
    });

    //  -----  mostrar el día y el mes con su nombre  -----
    $largo.datepicker({
        dateFormat: "DD, d 'de' MM 'de' yy",
    });
})(jQuery);
