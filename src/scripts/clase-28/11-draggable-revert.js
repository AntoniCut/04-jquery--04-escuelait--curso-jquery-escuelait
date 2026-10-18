/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  11-draggable-revert.js  --  /src/scripts/clase-28/11-draggable-revert.js  -----  *
    *  --------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  11-draggable-revert.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLDivElement>} - Caja que vuelve a su sitio al soltarla */
    const $draggable = $("#draggable");

    /** @type {JQuery<HTMLDivElement>} - Caja cuyo clon vuelve al soltarlo */
    const $draggable2 = $("#draggable2");

    //  -----  devolver la caja original a su posición  -----
    $draggable.draggable({ revert: true });

    //  -----  devolver el clon a su posición  -----
    $draggable2.draggable({ revert: true, helper: "clone" });

})(jQuery);
