/*
    *  ------------------------------------------------------------------------------------------------  *
    *  -----  29-datepicker-animations.js  --  /src/scripts/clase-29/29-datepicker-animations.js  -----  *
    *  ------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  29-datepicker-animations.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLInputElement>} - `calendario con fundido` */
    const $fundido = $("#fundido");

    /** @type {JQuery<HTMLInputElement>} - `calendario que se desliza` */
    const $deslizar = $("#deslizar");

    /** @type {JQuery<HTMLInputElement>} - `calendario en persiana` */
    const $persiana = $("#persiana");

    /** @type {JQuery<HTMLInputElement>} - `calendario que se pliega` */
    const $pliegue = $("#pliegue");

    //  -----  abrir con un fundido  -----
    $fundido.datepicker({ showAnim: "fadeIn" });

    //  -----  abrir deslizando hacia abajo  -----
    $deslizar.datepicker({ showAnim: "slideDown" });

    //  -----  abrir con una persiana  -----
    $persiana.datepicker({ showAnim: "blind", showOptions: { direction: "vertical" } });

    //  -----  abrir plegando el calendario  -----
    $pliegue.datepicker({ showAnim: "fold" });
})(jQuery);
