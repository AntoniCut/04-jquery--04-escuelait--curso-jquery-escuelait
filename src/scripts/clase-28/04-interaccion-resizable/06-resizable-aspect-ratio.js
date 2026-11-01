/*
    *  ---------------------------------------------------------------------------------------------------------------------------  *
    *  -----  06-resizable-aspect-ratio.js  --  /src/scripts/clase-28/04-interaccion-resizable/06-resizable-aspect-ratio.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  06-resizable-aspect-ratio.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLDivElement>} - Caja que conserva la proporción 16:9 */
    const $resizable = $("#resizable");

    //  -----  mantener la proporción al cambiar el tamaño  -----
    $resizable.resizable({
        aspectRatio: 16 / 9,
    });

})(jQuery);
