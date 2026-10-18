/*
    *  --------------------------------------------------------------------------------------------------  *
    *  -----  34-sortable-connect-lists.js  --  /src/scripts/clase-28/34-sortable-connect-lists.js  -----  *
    *  --------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  34-sortable-connect-lists.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLUListElement>} - Listas que intercambian elementos */
    const $listas = $("#sortable1, #sortable2");

    //  -----  permitir pasar elementos de una lista a la otra  -----
    $listas.sortable({
        connectWith: ".sort-lists__list",
    });

    //  -----  evitar que el navegador seleccione el texto al arrastrar  -----
    $listas.disableSelection();

})(jQuery);
