/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  21-resizable-animate.js  --  /src/scripts/clase-28/21-resizable-animate.js  -----  *
    *  ----------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  21-resizable-animate.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLDivElement>} - Caja que anima el cambio de tamaño */
    const $resizable = $("#resizable");

    /** - `true si el usuario pide menos movimiento` */
    const movimientoReducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    //  -----  animar hasta el tamaño nuevo al soltar  -----
    $resizable.resizable({
        animate: true,
        animateDuration: movimientoReducido ? 0 : "slow",
    });

})(jQuery);
