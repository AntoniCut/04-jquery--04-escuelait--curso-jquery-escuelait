/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  01-accordion-default.js  --  /src/scripts/clase-29/01-accordion-default.js  -----  *
    *  ----------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  01-accordion-default.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `acordeón de la demo` */
    const $acordeon = $("#accordion");

    //  -----  abrir el primer panel y cerrar los demás al pulsar una cabecera  -----
    $acordeon.accordion();
})(jQuery);
