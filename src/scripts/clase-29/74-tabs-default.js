/*
    *  ------------------------------------------------------------------------------  *
    *  -----  74-tabs-default.js  --  /src/scripts/clase-29/74-tabs-default.js  -----  *
    *  ------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  74-tabs-default.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `pestañas` */
    const $pestanas = $("#tabs");

    //  -----  activar las pestañas  -----
    $pestanas.tabs();
})(jQuery);
