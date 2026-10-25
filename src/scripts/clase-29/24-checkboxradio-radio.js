/*
    *  --------------------------------------------------------------------------------------------  *
    *  -----  24-checkboxradio-radio.js  --  /src/scripts/clase-29/24-checkboxradio-radio.js  -----  *
    *  --------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  24-checkboxradio-radio.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLInputElement>} - `radios de ubicación` */
    const $lugares = $("input[name=lugar]");

    /** @type {JQuery<HTMLParagraphElement>} - `ubicación elegida` */
    const $resultado = $("#resultado");

    /**
     * ---------------------------
     * -----  `alCambiar()`  -----
     * ---------------------------
     * - Escribe la ubicación marcada.
     * @return {void}
     */
    const alCambiar = () => {

        //  -----  publicar la ubicación marcada  -----
        $resultado.text(`Ubicación: ${String($lugares.filter(":checked").val())}.`);
    };

    //  -----  convertir el grupo en botones  -----
    $lugares.checkboxradio();

    //  -----  actualizar el texto al cambiar de ubicación  -----
    $lugares.on("change", alCambiar);
})(jQuery);
