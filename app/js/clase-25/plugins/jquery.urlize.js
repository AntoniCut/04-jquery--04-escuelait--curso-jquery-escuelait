/*
    *  -----------------------------------------------------------------------------------  *
    *  -----  /jquery.urlize.js  --  /src/scripts/clase-25/plugins/jquery.urlize.js  -----  *
    *  -----------------------------------------------------------------------------------  *
*/


/// <reference path="../../../../types/global.d.ts" />


(($) => {


    /**
     * ------------------------
     * -----  `urlize()`  -----
     * ------------------------
     * - Hace clickable cada elemento y redirige a la URL de `data-url`.
     * @return {JQuery} - Cadena jQuery para encadenar metodos.
     */
    $.fn.urlize = function () {

        return this.each(function () {

            const $this = $(this);

            $this.css('cursor', 'pointer');

            $this.on('click', () => {

                /** @type {string} - URL a la que se redirigira */
                const url = $this.data('url');

                if (url)
                    location.href = url;

            });

        });

    };


})(jQuery);
