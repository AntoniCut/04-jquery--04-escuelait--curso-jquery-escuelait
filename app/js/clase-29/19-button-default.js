/*
    *  ----------------------------------------------------------------------------------  *
    *  -----  19-button-default.js  --  /src/scripts/clase-29/19-button-default.js  -----  *
    *  ----------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  19-button-default.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLElement>} - `controles del primer grupo '.widget button, .widget input, .widget a'` */
    const $controles = $(".widget button, .widget input, .widget a");

    /** @type {JQuery<HTMLElement>} - `controles del ejemplo que no deben navegar` */
    const $pulsables = $(".escenario button, .escenario input[type=submit], .escenario a");

    /**
     * --------------------------------
     * -----  `alPulsar(evento)`  -----
     * --------------------------------
     * - Evita el envío y la navegación del ejemplo.
     * @param {JQuery.TriggeredEvent} evento - Clic en un control.
     * @return {void}
     */
    const alPulsar = (evento) => {

        //  -----  no enviar el formulario ni seguir el enlace  -----
        evento.preventDefault();
    };

    //  -----  aplicar el widget al primer grupo  -----
    $controles.button();

    //  -----  quedarse en la página al pulsar  -----
    $pulsables.on("click", alPulsar);
})(jQuery);
