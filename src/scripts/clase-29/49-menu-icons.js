/*
    *  --------------------------------------------------------------------------  *
    *  -----  49-menu-icons.js  --  /src/scripts/clase-29/49-menu-icons.js  -----  *
    *  --------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  49-menu-icons.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLUListElement>} - `menú con iconos` */
    const $menu = $("#menu");

    //  -----  activar el menú  -----
    $menu.menu();
})(jQuery);
