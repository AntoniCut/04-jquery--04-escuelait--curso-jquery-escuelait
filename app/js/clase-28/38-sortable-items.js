/*
    *  ----------------------------------------------------------------------------------  *
    *  -----  38-sortable-items.js  --  /src/scripts/clase-28/38-sortable-items.js  -----  *
    *  ----------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  38-sortable-items.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLUListElement>} - Lista que excluye elementos del orden */
    const $sortable1 = $("#sortable1");

    /** @type {JQuery<HTMLUListElement>} - Lista que cancela el arrastre de algunos */
    const $sortable2 = $("#sortable2");

    /** @type {JQuery<HTMLLIElement>} - Elementos de las dos listas */
    const $elementos = $("#sortable1 li, #sortable2 li");

    //  -----  dejar fuera los elementos desactivados, también como destino  -----
    $sortable1.sortable({
        items: "li:not(.ui-state-disabled)",
    });

    //  -----  impedir arrastrar los desactivados, pero permitir soltar sobre ellos  -----
    $sortable2.sortable({
        cancel: ".ui-state-disabled",
    });

    //  -----  evitar que el navegador seleccione el texto al arrastrar  -----
    $elementos.disableSelection();

})(jQuery);
