/*
    *  ------------------------------------------------------------------------------------------------------  *
    *  -----  05-accordion-no-auto-height.js  --  /src/scripts/clase-29/05-accordion-no-auto-height.js  -----  *
    *  ------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  05-accordion-no-auto-height.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `acordeón con la altura de cada panel` */
    const $acordeon = $("#accordion");

    //  -----  dejar que cada panel use la altura de su contenido  -----
    $acordeon.accordion({
        heightStyle: "content",
    });
})(jQuery);
