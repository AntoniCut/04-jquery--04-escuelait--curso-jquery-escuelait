/*
    *  --------------------------------------------------------------------------------  *
    *  -----  59-slider-handle.js  --  /src/scripts/clase-29/59-slider-handle.js  -----  *
    *  --------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  59-slider-handle.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `deslizador` */
    const $slider = $("#slider");

    /** @type {JQuery<HTMLDivElement>} - `asa con el valor` */
    const $asa = $("#custom-handle");

    /**
     * -------------------------------
     * -----  `escribir(valor)`  -----
     * -------------------------------
     * - Escribe el valor en el asa.
     * @param {number} valor - Valor del deslizador.
     * @return {void}
     */
    const escribir = (valor) => {

        //  -----  mostrar el valor en el asa  -----
        $asa.text(valor);
    };

    //  -----  usar un asa que muestra el valor  -----
    $slider.slider({
        value: 40,
        create: () => {

            //  -----  escribir el valor inicial  -----
            escribir($slider.slider("value"));
        },
        slide: (evento, ui) => {

            //  -----  escribir el valor mientras se arrastra  -----
            escribir(ui.value || 0);
        },
    });
})(jQuery);
