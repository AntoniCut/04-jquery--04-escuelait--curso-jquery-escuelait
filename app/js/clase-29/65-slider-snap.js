/*
    *  ----------------------------------------------------------------------------  *
    *  -----  65-slider-snap.js  --  /src/scripts/clase-29/65-slider-snap.js  -----  *
    *  ----------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  65-slider-snap.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `deslizador por incrementos` */
    const $slider = $("#slider");

    /** @type {JQuery<HTMLParagraphElement>} - `valor visible` */
    const $valor = $("#valor");

    //  -----  ajustar el asa de 50 en 50  -----
    $slider.slider({
        min: 0,
        max: 500,
        step: 50,
        value: 100,
        slide: (evento, ui) => {

            //  -----  escribir el valor ajustado  -----
            $valor.text(ui.value || 0);
        },
    });
})(jQuery);
