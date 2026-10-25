/*
    *  ------------------------------------------------------------------------------------------  *
    *  -----  58-slider-colorpicker.js  --  /src/scripts/clase-29/58-slider-colorpicker.js  -----  *
    *  ------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  58-slider-colorpicker.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `deslizador del rojo` */
    const $rojo = $("#rojo");

    /** @type {JQuery<HTMLDivElement>} - `deslizador del verde` */
    const $verde = $("#verde");

    /** @type {JQuery<HTMLDivElement>} - `deslizador del azul` */
    const $azul = $("#azul");

    /** @type {HTMLDivElement} - `muestra de color` */
    const muestra = /** @type {HTMLDivElement} */ (document.getElementById("muestra"));

    /**
     * ------------------------
     * -----  `pintar()`  -----
     * ------------------------
     * - Compone el color y escribe los tres valores.
     * @return {void}
     */
    const pintar = () => {

        /** - `cantidad de rojo` */
        const rojo = $rojo.slider("value");

        /** - `cantidad de verde` */
        const verde = $verde.slider("value");

        /** - `cantidad de azul` */
        const azul = $azul.slider("value");

        //  -----  pintar la muestra  -----
        muestra.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;

        //  -----  escribir el rojo  -----
        $("#valor-rojo").text(rojo);

        //  -----  escribir el verde  -----
        $("#valor-verde").text(verde);

        //  -----  escribir el azul  -----
        $("#valor-azul").text(azul);
    };

    //  -----  preparar el rojo  -----
    $rojo.slider({ min: 0, max: 255, value: 255, slide: pintar, change: pintar });

    //  -----  preparar el verde  -----
    $verde.slider({ min: 0, max: 255, value: 140, slide: pintar, change: pintar });

    //  -----  preparar el azul  -----
    $azul.slider({ min: 0, max: 255, value: 60, slide: pintar, change: pintar });
})(jQuery);
