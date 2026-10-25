/*
    *  ------------------------------------------------------------------------------------------  *
    *  -----  56-selectmenu-product.js  --  /src/scripts/clase-29/56-selectmenu-product.js  -----  *
    *  ------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  56-selectmenu-product.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `círculo de muestra` */
    const $circulo = $("#circulo");

    /** @type {JQuery<HTMLSelectElement>} - `radio del círculo` */
    const $radio = $("#radio");

    /** @type {JQuery<HTMLSelectElement>} - `color del círculo` */
    const $color = $("#color");

    /**
     * ------------------------------------------
     * -----  `alCambiarRadio(evento, ui)`  -----
     * ------------------------------------------
     * - Ajusta el tamaño del círculo.
     * @param {Event} evento - Cambio de radio.
     * @param {JQueryUI.SelectMenuUIParams} ui - Opción elegida.
     * @return {void}
     */
    const alCambiarRadio = (evento, ui) => {

        //  -----  no dejar el cambio nativo del select  -----
        evento.preventDefault();

        /** @type {{ value?: string }} - `opción elegida` */
        const opcion = /** @type {{ value?: string }} */ (ui.item);

        /** - `medida elegida` */
        const medida = opcion?.value || String($radio.val());

        //  -----  igualar ancho y alto al radio elegido  -----
        $circulo.css({
            width: medida,
            height: medida,
        });
    };

    /**
     * ------------------------------------------
     * -----  `alCambiarColor(evento, ui)`  -----
     * ------------------------------------------
     * - Pinta el círculo con el color elegido.
     * @param {Event} evento - Cambio de color.
     * @param {JQueryUI.SelectMenuUIParams} ui - Opción elegida.
     * @return {void}
     */
    const alCambiarColor = (evento, ui) => {

        //  -----  no dejar el cambio nativo del select  -----
        evento.preventDefault();

        /** @type {{ value?: string }} - `opción elegida` */
        const opcion = /** @type {{ value?: string }} */ (ui.item);

        /** - `color elegido` */
        const color = opcion?.value || String($color.val());

        //  -----  aplicar el color elegido  -----
        $circulo.css("background", color);
    };

    //  -----  sustituir el select de radio  -----
    $radio.selectmenu({
        change: alCambiarRadio,
    });

    //  -----  sustituir el select de color  -----
    $color.selectmenu({
        change: alCambiarColor,
    });
})(jQuery);
