/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  62-slider-range-max.js  --  /src/scripts/clase-29/62-slider-range-max.js  -----  *
    *  --------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  62-slider-range-max.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `deslizador con máximo fijo` */
    const $slider = $("#slider");

    /** @type {JQuery<HTMLParagraphElement>} - `valor visible` */
    const $valor = $("#valor");

    //  -----  rellenar desde el asa hasta el máximo  -----
    $slider.slider({
        range: "max",
        min: 1,
        max: 10,
        value: 2,
        slide: (evento, ui) => {

            //  -----  escribir el valor  -----
            $valor.text(`${ui.value || 0} de 10`);
        },
    });
})(jQuery);
