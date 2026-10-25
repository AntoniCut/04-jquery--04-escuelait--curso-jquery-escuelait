/*
    *  ------------------------------------------------------------------------------------  *
    *  -----  67-slider-vertical.js  --  /src/scripts/clase-29/67-slider-vertical.js  -----  *
    *  ------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  67-slider-vertical.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `deslizador vertical` */
    const $slider = $("#slider");

    /** @type {JQuery<HTMLParagraphElement>} - `valor visible` */
    const $valor = $("#valor");

    //  -----  colocar el deslizador en vertical  -----
    $slider.slider({
        orientation: "vertical",
        value: 50,
        slide: (evento, ui) => {

            //  -----  escribir el valor  -----
            $valor.text(ui.value || 0);
        },
    });
})(jQuery);
