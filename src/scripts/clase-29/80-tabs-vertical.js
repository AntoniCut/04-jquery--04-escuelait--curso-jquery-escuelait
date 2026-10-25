/*
    *  --------------------------------------------------------------------------------  *
    *  -----  80-tabs-vertical.js  --  /src/scripts/clase-29/80-tabs-vertical.js  -----  *
    *  --------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  80-tabs-vertical.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `pestañas verticales` */
    const $pestanas = $("#tabs");

    //  -----  activar las pestañas  -----
    $pestanas.tabs();
})(jQuery);
