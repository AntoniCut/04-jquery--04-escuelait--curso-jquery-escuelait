/*
    *  ------------------------------------------------------------------------------------------  *
    *  -----  54-selectmenu-default.js  --  /src/scripts/clase-29/54-selectmenu-default.js  -----  *
    *  ------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  54-selectmenu-default.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLSelectElement>} - `velocidad` */
    const $velocidad = $("#velocidad");

    /** @type {JQuery<HTMLSelectElement>} - `archivo con grupos` */
    const $archivo = $("#archivo");

    /** @type {JQuery<HTMLSelectElement>} - `lista larga` */
    const $numero = $("#numero");

    /** @type {JQuery<HTMLSelectElement>} - `trato` */
    const $trato = $("#trato");

    //  -----  sustituir el select de velocidad  -----
    $velocidad.selectmenu();

    //  -----  sustituir el select de archivos  -----
    $archivo.selectmenu();

    //  -----  sustituir el select de números  -----
    $numero.selectmenu();

    //  -----  limitar la altura del menú de números  -----
    $numero.selectmenu("menuWidget").addClass("lista-larga");

    //  -----  sustituir el select de trato  -----
    $trato.selectmenu();
})(jQuery);
