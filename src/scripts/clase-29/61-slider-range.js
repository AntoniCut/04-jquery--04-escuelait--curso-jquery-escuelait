/*
    *  ------------------------------------------------------------------------------  *
    *  -----  61-slider-range.js  --  /src/scripts/clase-29/61-slider-range.js  -----  *
    *  ------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  61-slider-range.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `deslizador de rango` */
    const $slider = $("#slider");

    /** @type {JQuery<HTMLParagraphElement>} - `intervalo visible` */
    const $importe = $("#importe");

    /**
     * ---------------------------------
     * -----  `escribir(valores)`  -----
     * ---------------------------------
     * - Escribe los dos extremos del intervalo.
     * @param {number[]} valores - Extremo inferior y superior.
     * @return {void}
     */
    const escribir = (valores) => {

        //  -----  publicar el intervalo  -----
        $importe.text(`${valores[0]} € – ${valores[1]} €`);
    };

    //  -----  activar un rango entre 0 y 500  -----
    $slider.slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: (evento, ui) => {

            //  -----  si hay dos valores, escribirlos  -----
            if (ui.values) {

                //  -----  actualizar el intervalo  -----
                escribir(ui.values);
            }
        },
    });
})(jQuery);
