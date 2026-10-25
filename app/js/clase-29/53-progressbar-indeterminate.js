/*
    *  --------------------------------------------------------------------------------------------------------  *
    *  -----  53-progressbar-indeterminate.js  --  /src/scripts/clase-29/53-progressbar-indeterminate.js  -----  *
    *  --------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  53-progressbar-indeterminate.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `barra de progreso` */
    const $barra = $("#progressbar");

    /** @type {JQuery<HTMLButtonElement>} - `botón de valor aleatorio` */
    const $valor = $("#valor-aleatorio");

    /** @type {JQuery<HTMLButtonElement>} - `botón de carga` */
    const $indeterminado = $("#indeterminado");

    /** @type {JQuery<HTMLButtonElement>} - `botón de color aleatorio` */
    const $color = $("#color-aleatorio");

    /**
     * ----------------------------------------
     * -----  `alValorAleatorio(evento)`  -----
     * ----------------------------------------
     * - Fija un porcentaje al azar.
     * @param {JQuery.TriggeredEvent} evento - Clic en valor aleatorio.
     * @return {void}
     */
    const alValorAleatorio = (evento) => {

        //  -----  no salir de la página  -----
        evento.preventDefault();

        //  -----  mostrar un porcentaje concreto  -----
        $barra.progressbar("option", "value", Math.floor(Math.random() * 100));
    };

    /**
     * ---------------------------------------
     * -----  `alIndeterminado(evento)`  -----
     * ---------------------------------------
     * - Vuelve a la barra sin porcentaje.
     * @param {JQuery.TriggeredEvent} evento - Clic en indeterminado.
     * @return {void}
     */
    const alIndeterminado = (evento) => {

        //  -----  no salir de la página  -----
        evento.preventDefault();

        //  -----  mostrar la carga  -----
        $barra.progressbar("option", "value", false);
    };

    /**
     * ----------------------------------------
     * -----  `alColorAleatorio(evento)`  -----
     * ----------------------------------------
     * - Pinta el avance con un color al azar.
     * @param {JQuery.TriggeredEvent} evento - Clic en color aleatorio.
     * @return {void}
     */
    const alColorAleatorio = (evento) => {

        //  -----  no salir de la página  -----
        evento.preventDefault();

        /** @type {JQuery<HTMLDivElement>} - `tramo pintado de la barra` */
        const $tramo = $barra.find(".ui-progressbar-value");

        /** - `color hexadecimal` */
        const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;

        //  -----  aplicar el color al avance  -----
        $tramo.css("background", color);
    };

    //  -----  empezar en carga  -----
    $barra.progressbar({
        value: false,
    });

    //  -----  pasar a un valor concreto  -----
    $valor.on("click", alValorAleatorio);

    //  -----  volver a la carga  -----
    $indeterminado.on("click", alIndeterminado);

    //  -----  cambiar el color del avance  -----
    $color.on("click", alColorAleatorio);
})(jQuery);
