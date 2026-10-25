/*
    *  --------------------------------------------------------------------------------  *
    *  -----  86-tooltip-track.js  --  /src/scripts/clase-29/86-tooltip-track.js  -----  *
    *  --------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  86-tooltip-track.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLAnchorElement>} - `enlace con ayuda que sigue al puntero` */
    const $mapa = $("a");

    //  -----  hacer que la ayuda siga al puntero  -----
    $mapa.tooltip({
        track: true,
    });
})(jQuery);
