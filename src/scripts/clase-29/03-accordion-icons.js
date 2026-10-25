/*
    *  ------------------------------------------------------------------------------------  *
    *  -----  03-accordion-icons.js  --  /src/scripts/clase-29/03-accordion-icons.js  -----  *
    *  ------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  03-accordion-icons.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `acordeón con iconos propios` */
    const $acordeon = $("#accordion");

    //  -----  usar flechas circulares en las cabeceras  -----
    $acordeon.accordion({
        icons: {
            header: "ui-icon-circle-arrow-e",
            activeHeader: "ui-icon-circle-arrow-s",
        },
    });
})(jQuery);
