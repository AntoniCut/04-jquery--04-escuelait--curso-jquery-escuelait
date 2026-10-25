/*
    *  --------------------------------------------------------------------------------  *
    *  -----  79-tabs-sortable.js  --  /src/scripts/clase-29/79-tabs-sortable.js  -----  *
    *  --------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  79-tabs-sortable.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `pestañas ordenables` */
    const $pestanas = $("#tabs");

    /**
     * --------------------------
     * -----  `alSoltar()`  -----
     * --------------------------
     * - Actualiza las pestañas tras cambiar el orden.
     * @return {void}
     */
    const alSoltar = () => {

        //  -----  reconstruir las pestañas en el orden nuevo  -----
        $pestanas.tabs("refresh");
    };

    //  -----  activar las pestañas  -----
    $pestanas.tabs();

    //  -----  ordenar las cabeceras en horizontal  -----
    $pestanas.find(".ui-tabs-nav").sortable({
        axis: "x",
        stop: alSoltar,
    });
})(jQuery);
