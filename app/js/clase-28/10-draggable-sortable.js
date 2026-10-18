/*
    *  ------------------------------------------------------------------------------------------  *
    *  -----  10-draggable-sortable.js  --  /src/scripts/clase-28/10-draggable-sortable.js  -----  *
    *  ------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  10-draggable-sortable.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLUListElement>} - Lista que acepta el elemento arrastrado */
    const $sortable = $("#sortable");

    /** @type {JQuery<HTMLLIElement>} - Elemento que se puede soltar en la lista */
    const $draggable = $("#draggable");

    /** @type {JQuery<HTMLElement>} - Listas y elementos de la demo */
    const $seleccionables = $("ul, li");

    //  -----  permitir reordenar la lista y volver si el movimiento no es válido  -----
    $sortable.sortable({ revert: true });

    //  -----  conectar el arrastre con la lista ordenable  -----
    $draggable.draggable({
        connectToSortable: "#sortable",
        helper: "clone",
        revert: "invalid",
    });

    //  -----  evitar que el navegador seleccione el texto al arrastrar  -----
    $seleccionables.disableSelection();

})(jQuery);
