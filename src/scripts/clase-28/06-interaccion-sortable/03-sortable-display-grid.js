/*
    *  ------------------------------------------------------------------------------------------------------------------------  *
    *  -----  03-sortable-display-grid.js  --  /src/scripts/clase-28/06-interaccion-sortable/03-sortable-display-grid.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  03-sortable-display-grid.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLUListElement>} - Rejilla reordenable */
    const $sortable = $("#sortable");

    //  -----  permitir reordenar las celdas  -----
    $sortable.sortable();

    //  -----  evitar que el navegador seleccione el texto al arrastrar  -----
    $sortable.disableSelection();

})(jQuery);
