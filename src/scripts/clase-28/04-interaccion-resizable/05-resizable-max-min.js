/*
    *  -----------------------------------------------------------------------------------------------------------------  *
    *  -----  05-resizable-max-min.js  --  /src/scripts/clase-28/04-interaccion-resizable/05-resizable-max-min.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  05-resizable-max-min.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLDivElement>} - Caja con tamaño mínimo y máximo */
    const $resizable = $("#resizable");

    //  -----  limitar el ancho y el alto  -----
    $resizable.resizable({
        maxHeight: 250,
        maxWidth: 350,
        minHeight: 150,
        minWidth: 200,
    });

})(jQuery);
