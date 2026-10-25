/*
    *  ------------------------------------------------------------------------------------------------  *
    *  -----  21-checkboxradio-default.js  --  /src/scripts/clase-29/21-checkboxradio-default.js  -----  *
    *  ------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  21-checkboxradio-default.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLInputElement>} - `radios y casillas` */
    const $entradas = $("input");

    //  -----  convertir radios y casillas en botones  -----
    $entradas.checkboxradio();
})(jQuery);
