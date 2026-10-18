/*
    *  ----------------------------------------------------------------------------------------------------  *
    *  -----  31-selectable-display-grid.js  --  /src/scripts/clase-28/31-selectable-display-grid.js  -----  *
    *  ----------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  31-selectable-display-grid.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLOListElement>} - Rejilla que admite selección */
    const $selectable = $("#selectable");

    //  -----  permitir seleccionar las celdas  -----
    $selectable.selectable();

})(jQuery);
