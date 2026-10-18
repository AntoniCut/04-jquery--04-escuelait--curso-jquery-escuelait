/*
    *  ------------------------------------------------------------------------------------------------  *
    *  -----  27-resizable-synchronous.js  --  /src/scripts/clase-28/27-resizable-synchronous.js  -----  *
    *  ------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  27-resizable-synchronous.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLDivElement>} - Caja que arrastra el tamaño de la otra */
    const $resizable = $("#resizable");

    /** @type {JQuery<HTMLDivElement>} - Caja que cambia de tamaño a la vez */
    const $also = $("#also");

    //  -----  cambiar las dos cajas al arrastrar la primera  -----
    $resizable.resizable({
        alsoResize: "#also",
    });

    //  -----  permitir cambiar la segunda caja por separado  -----
    $also.resizable();

})(jQuery);
