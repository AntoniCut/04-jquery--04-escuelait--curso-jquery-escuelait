/*
    *  ----------------------------------------------------------------------------------------------  *
    *  -----  38-datepicker-alternate.js  --  /src/scripts/clase-29/38-datepicker-alternate.js  -----  *
    *  ----------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  38-datepicker-alternate.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLInputElement>} - `fecha que ve la persona` */
    const $visible = $("#visible");

    //  -----  copiar la fecha a otro campo con otro formato  -----
    $visible.datepicker({
        dateFormat: "dd/mm/yy",
        altField: "#alterno",
        altFormat: "yy-mm-dd",
    });
})(jQuery);
