/*
    *  ------------------------------------------------------------------------------------------------------  *
    *  -----  22-resizable-constrain-area.js  --  /src/scripts/clase-28/22-resizable-constrain-area.js  -----  *
    *  ------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  22-resizable-constrain-area.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLDivElement>} - Caja limitada al contenedor */
    const $resizable = $("#resizable");

    //  -----  impedir que el tamaño salga del contenedor  -----
    $resizable.resizable({
        containment: "#container",
    });

})(jQuery);
