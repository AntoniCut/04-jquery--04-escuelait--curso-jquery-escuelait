/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  20-resizable-default.js  --  /src/scripts/clase-28/20-resizable-default.js  -----  *
    *  ----------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  20-resizable-default.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLDivElement>} - Caja que cambia de tamaño */
    const $resizable = $("#resizable");

    //  -----  activar el cambio de tamaño con las opciones por defecto  -----
    $resizable.resizable();

})(jQuery);
