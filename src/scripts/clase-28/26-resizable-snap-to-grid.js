/*
    *  --------------------------------------------------------------------------------------------------  *
    *  -----  26-resizable-snap-to-grid.js  --  /src/scripts/clase-28/26-resizable-snap-to-grid.js  -----  *
    *  --------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  26-resizable-snap-to-grid.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLDivElement>} - Caja que crece de 50 en 50 píxeles */
    const $resizable = $("#resizable");

    //  -----  ajustar el tamaño a una rejilla de 50 píxeles  -----
    $resizable.resizable({
        grid: 50,
    });

})(jQuery);
