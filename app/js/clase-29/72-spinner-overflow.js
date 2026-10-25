/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  72-spinner-overflow.js  --  /src/scripts/clase-29/72-spinner-overflow.js  -----  *
    *  --------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  72-spinner-overflow.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLInputElement>} - `control que da la vuelta` */
    const $vuelta = $("#vuelta");

    /**
     * -----------------------------------
     * -----  `alGirar(evento, ui)`  -----
     * -----------------------------------
     * - Sustituye el valor cuando sale del intervalo 0-10.
     * @param {Event} evento - Giro del control.
     * @param {JQueryUI.SpinnerUIParam} ui - Valor propuesto.
     * @return {boolean | void}
     */
    const alGirar = (evento, ui) => {

        //  -----  si pasa de 10, volver a 0  -----
        if (ui.value > 10) {

            //  -----  fijar el cero  -----
            $vuelta.spinner("value", 0);

            //  -----  no aplicar el valor que se pasaba  -----
            return false;
        }

        //  -----  si baja de 0, volver a 10  -----
        if (ui.value < 0) {

            //  -----  fijar el diez  -----
            $vuelta.spinner("value", 10);

            //  -----  no aplicar el valor que se pasaba  -----
            return false;
        }
    };

    //  -----  crear el control con vuelta de 0 a 10  -----
    $vuelta.spinner({
        spin: alGirar,
    });
})(jQuery);
