/*
    *  ------------------------------------------------------------------------------------  *
    *  -----  83-tooltip-content.js  --  /src/scripts/clase-29/83-tooltip-content.js  -----  *
    *  ------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  83-tooltip-content.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {NodeListOf<HTMLAnchorElement>} - `términos con detalle` */
    const terminos = document.querySelectorAll(".termino");

    //  -----  crear una ayuda por término con su detalle  -----
    terminos.forEach((termino) => {

        //  -----  usar el detalle como contenido de la ayuda  -----
        $(termino).tooltip({
            items: ".termino",
            content: termino.dataset.detalle || "",
        });
    });
})(jQuery);
