/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  63-slider-range-min.js  --  /src/scripts/clase-29/63-slider-range-min.js  -----  *
    *  --------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  63-slider-range-min.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `deslizador con mínimo fijo` */
    const $slider = $("#slider");

    /** @type {JQuery<HTMLParagraphElement>} - `valor visible` */
    const $valor = $("#valor");

    //  -----  rellenar desde el mínimo hasta el asa  -----
    $slider.slider({
        range: "min",
        min: 0,
        max: 100,
        value: 60,
        slide: (evento, ui) => {

            //  -----  escribir el porcentaje  -----
            $valor.text(`${ui.value || 0} %`);
        },
    });
})(jQuery);
