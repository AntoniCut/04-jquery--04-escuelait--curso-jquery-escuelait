/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  04-draggable-default.js  --  /src/scripts/clase-28/04-draggable-default.js  -----  *
    *  ----------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  04-draggable-default.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLDivElement>} - Caja que se puede arrastrar */
    const $draggable = $("#draggable");

    //  -----  activar el arrastre con las opciones por defecto  -----
    $draggable.draggable();

})(jQuery);
