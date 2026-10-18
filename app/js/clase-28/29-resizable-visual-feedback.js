/*
    *  --------------------------------------------------------------------------------------------------------  *
    *  -----  29-resizable-visual-feedback.js  --  /src/scripts/clase-28/29-resizable-visual-feedback.js  -----  *
    *  --------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  29-resizable-visual-feedback.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLDivElement>} - Caja que muestra una copia semitransparente */
    const $resizable = $("#resizable");

    //  -----  enseñar el fantasma durante el cambio de tamaño  -----
    $resizable.resizable({
        ghost: true,
    });

})(jQuery);
