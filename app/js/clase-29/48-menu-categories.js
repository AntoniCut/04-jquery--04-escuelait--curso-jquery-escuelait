/*
    *  ------------------------------------------------------------------------------------  *
    *  -----  48-menu-categories.js  --  /src/scripts/clase-29/48-menu-categories.js  -----  *
    *  ------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  48-menu-categories.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLUListElement>} - `menú con categorías` */
    const $menu = $("#menu");

    //  -----  activar el menú saltando las cabeceras  -----
    $menu.menu({
        items: "> :not(.ui-widget-header)",
    });
})(jQuery);
