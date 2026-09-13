/*
    *  ---------------------------------------------------------------------------------------------  *
    *  -----  /jquery.underlinize.js  --  /src/scripts/clase-25/plugins/jquery.underlinize.js  -----  *
    *  ---------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../../types/global.d.ts" />


(($) => {


    /**
     * -----------------------------
     * -----  `underlinize()`  -----
     * -----------------------------
     * - Aplica subrayado a cada elemento de la coleccion.
     * @return {JQuery} - Cadena jQuery para encadenar metodos.
     */
    $.fn.underlinize = function () {

        return this.each(function () {

            const $this = $(this);

            //  -----  aplica subrayado a cada elemento de la coleccion  -----
            $this.css('text-decoration', 'underline');

        });

    };


})(jQuery);
