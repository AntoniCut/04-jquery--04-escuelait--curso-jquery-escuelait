/*
    *  ----------------------------------------------------------------------------------  *
    *  -----  77-tabs-mouseover.js  --  /src/scripts/clase-29/77-tabs-mouseover.js  -----  *
    *  ----------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  77-tabs-mouseover.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `pestañas que se abren al pasar el ratón` */
    const $pestanas = $("#tabs");

    //  -----  abrir el panel al pasar el puntero  -----
    $pestanas.tabs({
        event: "mouseover",
    });
})(jQuery);
