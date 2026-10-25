/*
    *  --------------------------------------------------------------------------------------------  *
    *  -----  50-progressbar-default.js  --  /src/scripts/clase-29/50-progressbar-default.js  -----  *
    *  --------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  50-progressbar-default.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `barra de progreso` */
    const $barra = $("#progressbar");

    //  -----  marcar un 37 por ciento  -----
    $barra.progressbar({
        value: 37,
    });
})(jQuery);
