/*
    *  --------------------------------------------------------------------------------  *
    *  -----  64-slider-select.js  --  /src/scripts/clase-29/64-slider-select.js  -----  *
    *  --------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  64-slider-select.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLSelectElement>} - `número de camas` */
    const $camas = $("#camas");

    /** @type {JQuery<HTMLDivElement>} - `deslizador unido al select` */
    const $slider = $("#slider");

    /**
     * --------------------------------------
     * -----  `alDeslizar(evento, ui)`  -----
     * --------------------------------------
     * - Copia el valor del deslizador al select.
     * @param {Event} evento - Movimiento del asa.
     * @param {JQueryUI.SliderUIParams} ui - Valor nuevo.
     * @return {void}
     */
    const alDeslizar = (evento, ui) => {

        //  -----  seleccionar el mismo número en la lista  -----
        $camas.val(String(ui.value || 1));
    };

    /**
     * ---------------------------
     * -----  `alCambiar()`  -----
     * ---------------------------
     * - Copia el valor del select al deslizador.
     * @return {void}
     */
    const alCambiar = () => {

        //  -----  mover el asa al número elegido  -----
        $slider.slider("value", Number($camas.val()));
    };

    //  -----  preparar el deslizador con el valor del select  -----
    $slider.slider({
        min: 1,
        max: $camas.find("option").length,
        value: Number($camas.val()),
        slide: alDeslizar,
    });

    //  -----  mover el deslizador al cambiar el select  -----
    $camas.on("change", alCambiar);
})(jQuery);
