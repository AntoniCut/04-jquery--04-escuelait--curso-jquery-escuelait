/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  23-resizable-helper.js  --  /src/scripts/clase-28/23-resizable-helper.js  -----  *
    *  --------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  23-resizable-helper.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLDivElement>} - Caja que enseña un contorno al cambiar de tamaño */
    const $resizable = $("#resizable");

    //  -----  arrastrar el contorno en lugar de la caja  -----
    $resizable.resizable({
        helper: "ui-resizable-helper",
    });

})(jQuery);
