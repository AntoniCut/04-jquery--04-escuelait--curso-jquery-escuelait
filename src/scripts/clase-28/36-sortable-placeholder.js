/*
    *  ----------------------------------------------------------------------------------------------  *
    *  -----  36-sortable-placeholder.js  --  /src/scripts/clase-28/36-sortable-placeholder.js  -----  *
    *  ----------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  36-sortable-placeholder.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLUListElement>} - Lista que enseña el hueco al arrastrar */
    const $sortable = $("#sortable");

    //  -----  marcar el hueco con la clase de resalte  -----
    $sortable.sortable({
        placeholder: "ui-state-highlight",
        forcePlaceholderSize: true,
    });

    //  -----  evitar que el navegador seleccione el texto al arrastrar  -----
    $sortable.disableSelection();

})(jQuery);
