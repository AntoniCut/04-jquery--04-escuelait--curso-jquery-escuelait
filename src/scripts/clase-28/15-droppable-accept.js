/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  15-droppable-accept.js  --  /src/scripts/clase-28/15-droppable-accept.js  -----  *
    *  --------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  15-droppable-accept.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLDivElement>} - Cajas que se pueden arrastrar */
    const $arrastrables = $("#draggable, #draggable-nonvalid");

    /** @type {JQuery<HTMLDivElement>} - Zona que solo admite una de las cajas */
    const $droppable = $("#droppable");

    /**
     * ------------------------------------
     * -----  `marcarSoltado(event)`  -----
     * ------------------------------------
     * - Marca el destino y cambia su texto.
     * @param {JQuery.TriggeredEvent} event - Evento drop del destino.
     * @return {void}
     */
    const marcarSoltado = (event) => {

        /** @type {JQuery<HTMLElement>} - Zona que ha recibido el elemento */
        const $destino = $(event.target);

        //  -----  marcar la zona como ocupada  -----
        $destino.addClass("ui-state-highlight");

        //  -----  cambiar el texto de la zona  -----
        $destino.children("p").text("¡Soltado!");
    };


    //  -----  permitir arrastrar las dos cajas  -----
    $arrastrables.draggable();

    //  -----  aceptar solo la caja indicada en el selector  -----
    $droppable.droppable({
        accept: "#draggable",
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover",
        },
        drop: marcarSoltado,
    });

})(jQuery);
