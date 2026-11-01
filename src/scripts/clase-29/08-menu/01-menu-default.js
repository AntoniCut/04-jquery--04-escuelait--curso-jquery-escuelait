/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  01-menu-default.js  --  /src/scripts/clase-29/08-menu/01-menu-default.js  -----  *
    *  --------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  01-menu-default.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLUListElement>} - `menú de la demo` */
    const $menu = $("#menu");

    //  -----  activar el menú con submenús  -----
    $menu.menu();
})(jQuery);
