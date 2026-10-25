/*
    *  --------------------------------------------------------------------------------  *
    *  -----  85-tooltip-forms.js  --  /src/scripts/clase-29/85-tooltip-forms.js  -----  *
    *  --------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  85-tooltip-forms.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLFormElement>} - `formulario` */
    const $perfil = $("#perfil");

    /** @type {JQuery<HTMLParagraphElement>} - `resultado del envío` */
    const $resultado = $("#resultado");

    /**
     * --------------------------------
     * -----  `alEnviar(evento)`  -----
     * --------------------------------
     * - Evita el envío y deja un aviso en la página.
     * @param {JQuery.TriggeredEvent} evento - Envío del formulario.
     * @return {void}
     */
    const alEnviar = (evento) => {

        //  -----  no enviar el formulario  -----
        evento.preventDefault();

        //  -----  confirmar que los datos se quedan en la página  -----
        $resultado.text("Los datos se quedan en esta página.");
    };

    //  -----  mostrar la ayuda de cada campo  -----
    $perfil.find("[title]").tooltip();

    //  -----  no salir de la página al guardar  -----
    $perfil.on("submit", alEnviar);
})(jQuery);
