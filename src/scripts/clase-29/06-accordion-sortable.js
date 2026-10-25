/*
    *  ------------------------------------------------------------------------------------------  *
    *  -----  06-accordion-sortable.js  --  /src/scripts/clase-29/06-accordion-sortable.js  -----  *
    *  ------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  06-accordion-sortable.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `acordeón que también se ordena` */
    const $acordeon = $("#accordion");

    /**
     * ------------------------------------
     * -----  `alSoltar(evento, ui)`  -----
     * ------------------------------------
     * - Quita el foco de la cabecera y actualiza el acordeón.
     * @param {Event} evento - Fin del arrastre.
     * @param {JQueryUI.SortableUIParams} ui - Panel que se ha soltado.
     * @return {void}
     */
    const alSoltar = (evento, ui) => {

        //  -----  el evento de soltar no navega  -----
        evento.preventDefault();

        //  -----  cerrar el estado de foco de la cabecera arrastrada  -----
        ui.item.children("h3").triggerHandler("focusout");

        //  -----  reconstruir los paneles en el orden nuevo  -----
        $acordeon.accordion("refresh");
    };

    //  -----  abrir paneles por la cabecera de cada grupo  -----
    $acordeon.accordion({
        header: "> div > h3",
    });

    //  -----  ordenar los grupos en vertical por la cabecera  -----
    $acordeon.sortable({
        axis: "y",
        handle: "h3",
        stop: alSoltar,
    });
})(jQuery);
