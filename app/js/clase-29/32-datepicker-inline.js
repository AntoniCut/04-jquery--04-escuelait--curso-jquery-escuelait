/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  32-datepicker-inline.js  --  /src/scripts/clase-29/32-datepicker-inline.js  -----  *
    *  ----------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  32-datepicker-inline.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `calendario visible` */
    const $fecha = $("#datepicker");

    /** @type {JQuery<HTMLParagraphElement>} - `fecha elegida` */
    const $resultado = $("#resultado");

    /**
     * -------------------------------
     * -----  `alElegir(fecha)`  -----
     * -------------------------------
     * - Escribe la fecha elegida.
     * @param {string} fecha - Fecha en el formato del calendario.
     * @return {void}
     */
    const alElegir = (fecha) => {

        //  -----  publicar la fecha elegida  -----
        $resultado.text(`Fecha elegida: ${fecha}.`);
    };

    //  -----  mostrar el calendario en la página  -----
    $fecha.datepicker({
        dateFormat: "dd/mm/yy",
        onSelect: alElegir,
    });
})(jQuery);
