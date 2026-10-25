/*
    *  ------------------------------------------------------------------------------------------------  *
    *  -----  66-slider-vertical-range.js  --  /src/scripts/clase-29/66-slider-vertical-range.js  -----  *
    *  ------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  66-slider-vertical-range.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `rango vertical` */
    const $slider = $("#slider");

    /** @type {JQuery<HTMLParagraphElement>} - `intervalo visible` */
    const $importe = $("#importe");

    //  -----  activar un rango vertical  -----
    $slider.slider({
        orientation: "vertical",
        range: true,
        min: 0,
        max: 100,
        values: [20, 80],
        slide: (evento, ui) => {

            //  -----  si hay dos valores, escribirlos  -----
            if (ui.values) {

                //  -----  actualizar el intervalo  -----
                $importe.text(`${ui.values[0]} – ${ui.values[1]}`);
            }
        },
    });
})(jQuery);
