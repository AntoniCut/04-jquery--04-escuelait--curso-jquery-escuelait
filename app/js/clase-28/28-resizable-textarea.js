/*
    *  ------------------------------------------------------------------------------------------  *
    *  -----  28-resizable-textarea.js  --  /src/scripts/clase-28/28-resizable-textarea.js  -----  *
    *  ------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  28-resizable-textarea.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLTextAreaElement>} - Área de texto que cambia de tamaño */
    const $resizable = $("#resizable");

    //  -----  mostrar solo el asa de la esquina sureste  -----
    $resizable.resizable({
        handles: "se",
    });

})(jQuery);
