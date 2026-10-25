/*
    *  --------------------------------------------------------------------------------------------------------  *
    *  -----  44-dialog-modal-confirmation.js  --  /src/scripts/clase-29/44-dialog-modal-confirmation.js  -----  *
    *  --------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  44-dialog-modal-confirmation.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `ventana de confirmación` */
    const $dialogo = $("#dialog");

    /** @type {JQuery<HTMLButtonElement>} - `botón que pide confirmación` */
    const $borrar = $("#borrar");

    /** @type {JQuery<HTMLParagraphElement>} - `resultado de la decisión` */
    const $resultado = $("#resultado");

    /**
     * ----------------------------
     * -----  `alEliminar()`  -----
     * ----------------------------
     * - Cierra la ventana y anota que el elemento se eliminó.
     * @return {void}
     */
    const alEliminar = () => {

        //  -----  anotar la eliminación  -----
        $resultado.text("El elemento se ha eliminado.");

        //  -----  cerrar la ventana  -----
        $dialogo.dialog("close");
    };

    /**
     * ----------------------------
     * -----  `alCancelar()`  -----
     * ----------------------------
     * - Cierra la ventana y conserva el elemento.
     * @return {void}
     */
    const alCancelar = () => {

        //  -----  anotar que no hubo cambios  -----
        $resultado.text("El elemento sigue en la lista.");

        //  -----  cerrar la ventana  -----
        $dialogo.dialog("close");
    };

    /**
     * -------------------------------
     * -----  `alAbrir(evento)`  -----
     * -------------------------------
     * - Abre la confirmación.
     * @param {JQuery.TriggeredEvent} evento - Clic en eliminar.
     * @return {void}
     */
    const alAbrir = (evento) => {

        //  -----  no salir de la página  -----
        evento.preventDefault();

        //  -----  abrir la confirmación  -----
        $dialogo.dialog("open");
    };

    //  -----  preparar la confirmación modal  -----
    $dialogo.dialog({
        autoOpen: false,
        modal: true,
        width: 380,
        buttons: [
            { text: "Eliminar", click: alEliminar },
            { text: "Cancelar", click: alCancelar },
        ],
    });

    //  -----  pedir confirmación al pulsar el botón  -----
    $borrar.on("click", alAbrir);
})(jQuery);
