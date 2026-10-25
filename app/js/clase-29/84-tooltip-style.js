/*
    *  --------------------------------------------------------------------------------  *
    *  -----  84-tooltip-style.js  --  /src/scripts/clase-29/84-tooltip-style.js  -----  *
    *  --------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  84-tooltip-style.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLAnchorElement>} - `enlace con ayuda propia` */
    const $aviso = $("a");

    //  -----  aplicar la clase aviso a la ayuda  -----
    $aviso.tooltip({
        classes: {
            "ui-tooltip": "aviso",
        },
    });
})(jQuery);
