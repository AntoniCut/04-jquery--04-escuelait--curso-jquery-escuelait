/*
    *  ------------------------------------------------------------------------------------------  *
    *  -----  26-controlgroup-split.js  --  /src/scripts/clase-29/26-controlgroup-split.js  -----  *
    *  ------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  26-controlgroup-split.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLButtonElement>} - `botón de la acción` */
    const $ejecutar = $("#ejecutar");

    /** @type {JQuery<HTMLSelectElement>} - `menú de acciones` */
    const $accion = $("#accion");

    /** @type {JQuery<HTMLDivElement>} - `grupo del botón dividido` */
    const $dividido = $("#dividido");

    /** @type {JQuery<HTMLParagraphElement>} - `resultado de la acción` */
    const $resultado = $("#resultado");

    /**
     * ----------------------------------
     * -----  `alEjecutar(evento)`  -----
     * ----------------------------------
     * - Escribe la acción visible en el botón.
     * @param {JQuery.TriggeredEvent} evento - Clic en el botón.
     * @return {void}
     */
    const alEjecutar = (evento) => {

        //  -----  no salir de la página  -----
        evento.preventDefault();

        //  -----  publicar la acción del botón  -----
        $resultado.text(`Acción ejecutada: ${String($ejecutar.button("option", "label"))}.`);
    };

    /**
     * ---------------------------
     * -----  `alCambiar()`  -----
     * ---------------------------
     * - Copia la opción elegida al botón.
     * @return {void}
     */
    const alCambiar = () => {

        //  -----  poner en el botón el texto de la opción  -----
        $ejecutar.button("option", "label", String($accion.val()));
    };

    //  -----  crear el botón principal  -----
    $ejecutar.button();

    //  -----  crear el menú estrecho de acciones  -----
    $accion.selectmenu({
        width: 48,
        change: alCambiar,
    });

    //  -----  unir el botón y el menú  -----
    $dividido.controlgroup();

    //  -----  ejecutar la acción visible  -----
    $ejecutar.on("click", alEjecutar);
})(jQuery);
