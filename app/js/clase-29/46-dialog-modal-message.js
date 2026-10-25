/*
    *  ----------------------------------------------------------------------------------------------  *
    *  -----  46-dialog-modal-message.js  --  /src/scripts/clase-29/46-dialog-modal-message.js  -----  *
    *  ----------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  46-dialog-modal-message.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `ventana del mensaje` */
    const $dialogo = $("#dialog");

    /** @type {JQuery<HTMLButtonElement>} - `botón que abre el mensaje` */
    const $abrir = $("#abrir");

    /**
     * ---------------------------
     * -----  `alAceptar()`  -----
     * ---------------------------
     * - Cierra el mensaje.
     * @return {void}
     */
    const alAceptar = () => {

        //  -----  cerrar el mensaje  -----
        $dialogo.dialog("close");
    };

    /**
     * -------------------------------
     * -----  `alAbrir(evento)`  -----
     * -------------------------------
     * - Abre el mensaje.
     * @param {JQuery.TriggeredEvent} evento - Clic en mostrar mensaje.
     * @return {void}
     */
    const alAbrir = (evento) => {

        //  -----  no salir de la página  -----
        evento.preventDefault();

        //  -----  abrir el mensaje  -----
        $dialogo.dialog("open");
    };

    //  -----  preparar el mensaje modal  -----
    $dialogo.dialog({
        autoOpen: false,
        modal: true,
        width: 340,
        buttons: [{ text: "Aceptar", click: alAceptar }],
    });

    //  -----  mostrar el mensaje al pulsar el botón  -----
    $abrir.on("click", alAbrir);
})(jQuery);
