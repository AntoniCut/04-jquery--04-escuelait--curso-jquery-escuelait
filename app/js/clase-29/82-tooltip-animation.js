/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  82-tooltip-animation.js  --  /src/scripts/clase-29/82-tooltip-animation.js  -----  *
    *  ----------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  82-tooltip-animation.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLAnchorElement>} - `ayuda con animación de entrada` */
    const $entrada = $("#entrada");

    /** @type {JQuery<HTMLAnchorElement>} - `ayuda con animación de salida` */
    const $salida = $("#salida");

    /** @type {JQuery<HTMLAnchorElement>} - `ayuda con las dos animaciones` */
    const $ambas = $("#ambas");

    //  -----  deslizar la ayuda al abrirla  -----
    $entrada.tooltip({
        show: { effect: "slideDown", delay: 200 },
    });

    //  -----  fundir la ayuda al cerrarla  -----
    $salida.tooltip({
        hide: { effect: "fade", duration: 400 },
    });

    //  -----  animar la entrada y la salida  -----
    $ambas.tooltip({
        show: { effect: "slideDown", delay: 150 },
        hide: { effect: "fade", duration: 300 },
    });
})(jQuery);
