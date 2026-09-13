/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /jquery.boldize.js  --  /src/scripts/clase-25/plugins/jquery.boldize.js  -----  *
    *  -------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../../types/global.d.ts" />


(($) => {


    /**
     * -------------------------
     * -----  `boldize()`  -----
     * -------------------------
     * - Aplica negrita a cada elemento de la coleccion.
     * @return {JQuery} - Cadena jQuery para encadenar metodos.
     */
    $.fn.boldize = function () {

        return this.each(function () {

            const $this = $(this);

            //  -----  aplica negrita a cada elemento de la coleccion  -----
            $this.css('font-weight', 'bold');

        });

    };


})(jQuery);
