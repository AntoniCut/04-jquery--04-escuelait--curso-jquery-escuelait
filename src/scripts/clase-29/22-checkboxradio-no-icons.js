/*
    *  --------------------------------------------------------------------------------------------------  *
    *  -----  22-checkboxradio-no-icons.js  --  /src/scripts/clase-29/22-checkboxradio-no-icons.js  -----  *
    *  --------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  22-checkboxradio-no-icons.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLInputElement>} - `radios de ubicación` */
    const $entradas = $("input");

    //  -----  convertir los radios en botones sin icono  -----
    $entradas.checkboxradio({
        icon: false,
    });
})(jQuery);
