/*
    *  ----------------------------------------------------------------------------------------------  *
    *  -----  37-sortable-empty-lists.js  --  /src/scripts/clase-28/37-sortable-empty-lists.js  -----  *
    *  ----------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  37-sortable-empty-lists.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLUListElement>} - Listas que aceptan soltar en vacío */
    const $conVacio = $(".sort-empty__list--drop");

    /** @type {JQuery<HTMLUListElement>} - Lista que no acepta soltar en vacío */
    const $sinVacio = $(".sort-empty__list--keep");

    /** @type {JQuery<HTMLUListElement>} - Las tres listas */
    const $listas = $("#sortable1, #sortable2, #sortable3");

    //  -----  conectar las listas que sí admiten un destino vacío  -----
    $conVacio.sortable({
        connectWith: "ul",
    });

    //  -----  impedir soltar sus elementos en una lista vacía  -----
    $sinVacio.sortable({
        connectWith: "ul",
        dropOnEmpty: false,
    });

    //  -----  evitar que el navegador seleccione el texto al arrastrar  -----
    $listas.disableSelection();

})(jQuery);
