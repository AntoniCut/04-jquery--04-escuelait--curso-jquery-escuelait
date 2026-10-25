/*
    *  ----------------------------------------------------------------------------------------------  *
    *  -----  04-accordion-fill-space.js  --  /src/scripts/clase-29/04-accordion-fill-space.js  -----  *
    *  ----------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  04-accordion-fill-space.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `marco que se puede redimensionar` */
    const $marco = $("#accordion-resizer");

    /** @type {JQuery<HTMLDivElement>} - `acordeón que ocupa la altura del marco` */
    const $acordeon = $("#accordion");

    /**
     * ---------------------------------
     * -----  `alRedimensionar()`  -----
     * ---------------------------------
     * - Recalcula la altura del panel abierto.
     * @return {void}
     */
    const alRedimensionar = () => {

        //  -----  ajustar el panel a la nueva altura del marco  -----
        $acordeon.accordion("refresh");
    };

    //  -----  hacer que el panel abierto rellene el marco  -----
    $acordeon.accordion({
        heightStyle: "fill",
    });

    //  -----  permitir cambiar el tamaño del marco  -----
    $marco.resizable({
        minHeight: 180,
        minWidth: 240,
        resize: alRedimensionar,
    });
})(jQuery);
