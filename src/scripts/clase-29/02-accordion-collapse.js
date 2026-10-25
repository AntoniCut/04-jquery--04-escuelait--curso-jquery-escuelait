/*
    *  ------------------------------------------------------------------------------------------  *
    *  -----  02-accordion-collapse.js  --  /src/scripts/clase-29/02-accordion-collapse.js  -----  *
    *  ------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  02-accordion-collapse.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `acordeón que admite cerrarse por completo` */
    const $acordeon = $("#accordion");

    //  -----  permitir cerrar el panel que está abierto  -----
    $acordeon.accordion({
        collapsible: true,
    });
})(jQuery);
