/*
    *  ----------------------------------------------------------------------------------  *
    *  -----  57-slider-default.js  --  /src/scripts/clase-29/57-slider-default.js  -----  *
    *  ----------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  57-slider-default.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `deslizador` */
    const $slider = $("#slider");

    //  -----  activar el deslizador con las opciones por defecto  -----
    $slider.slider();
})(jQuery);
