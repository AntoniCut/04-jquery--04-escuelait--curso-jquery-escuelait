/*
    *  ------------------------------------------------------------------------------  *
    *  -----  20-button-icons.js  --  /src/scripts/clase-29/20-button-icons.js  -----  *
    *  ------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  20-button-icons.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLButtonElement>} - `botón de reproducir` */
    const $reproducir = $("#reproducir");

    /** @type {JQuery<HTMLButtonElement>} - `botón de anterior` */
    const $anterior = $("#anterior");

    /** @type {JQuery<HTMLButtonElement>} - `botón de siguiente` */
    const $siguiente = $("#siguiente");

    /** @type {JQuery<HTMLButtonElement>} - `botón de parar` */
    const $parar = $("#parar");

    //  -----  mostrar solo el icono de reproducir  -----
    $reproducir.button({
        icon: "ui-icon-play",
        showLabel: false,
    });

    //  -----  colocar el icono al inicio del texto  -----
    $anterior.button({
        icon: "ui-icon-seek-prev",
        iconPosition: "beginning",
    });

    //  -----  colocar el icono al final del texto  -----
    $siguiente.button({
        icon: "ui-icon-seek-next",
        iconPosition: "end",
    });

    //  -----  colocar el icono encima del texto  -----
    $parar.button({
        icon: "ui-icon-stop",
        iconPosition: "top",
    });
})(jQuery);
