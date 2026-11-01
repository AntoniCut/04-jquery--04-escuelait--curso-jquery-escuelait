/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  02-tabs-collapse.js  --  /src/scripts/clase-29/13-tabs/02-tabs-collapse.js  -----  *
    *  ----------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  02-tabs-collapse.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `pestañas que se pueden cerrar` */
    const $pestanas = $("#tabs");

    //  -----  permitir cerrar la pestaña activa  -----
    $pestanas.tabs({
        collapsible: true,
    });
})(jQuery);
