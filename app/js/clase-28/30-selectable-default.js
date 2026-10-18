/*
    *  ------------------------------------------------------------------------------------------  *
    *  -----  30-selectable-default.js  --  /src/scripts/clase-28/30-selectable-default.js  -----  *
    *  ------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  30-selectable-default.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLOListElement>} - Lista que admite selección */
    const $selectable = $("#selectable");

    //  -----  permitir seleccionar elementos sueltos o con un recuadro  -----
    $selectable.selectable();

})(jQuery);
