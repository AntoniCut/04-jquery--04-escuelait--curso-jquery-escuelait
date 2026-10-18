/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  33-sortable-default.js  --  /src/scripts/clase-28/33-sortable-default.js  -----  *
    *  --------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  33-sortable-default.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLUListElement>} - Lista reordenable */
    const $sortable = $("#sortable");

    /** @type {JQuery<HTMLElement>} - Lista y elementos, para no seleccionar el texto */
    const $seleccionables = $("#sortable, #sortable li");

    //  -----  permitir reordenar la lista  -----
    $sortable.sortable();

    //  -----  evitar que el navegador seleccione el texto al arrastrar  -----
    $seleccionables.disableSelection();

})(jQuery);
