/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  43-dialog-animation.js  --  /src/scripts/clase-29/43-dialog-animation.js  -----  *
    *  --------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  43-dialog-animation.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `ventana animada` */
    const $dialogo = $("#dialog");

    /** @type {JQuery<HTMLButtonElement>} - `botón que abre la ventana` */
    const $abrir = $("#abrir");

    /**
     * -------------------------------
     * -----  `alAbrir(evento)`  -----
     * -------------------------------
     * - Abre la ventana.
     * @param {JQuery.TriggeredEvent} evento - Clic en el botón.
     * @return {void}
     */
    const alAbrir = (evento) => {

        //  -----  no salir de la página  -----
        evento.preventDefault();

        //  -----  abrir la ventana  -----
        $dialogo.dialog("open");
    };

    //  -----  preparar la ventana cerrada, con animación de entrada y salida  -----
    $dialogo.dialog({
        autoOpen: false,
        width: 360,
        show: { effect: "blind", duration: 400 },
        hide: { effect: "fade", duration: 300 },
    });

    //  -----  abrir la ventana al pulsar el botón  -----
    $abrir.on("click", alAbrir);
})(jQuery);
