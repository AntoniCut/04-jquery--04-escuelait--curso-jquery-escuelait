/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /jquery.fontSizer.js  --  /src/scripts/clase-25/plugins/jquery.fontSizer.js  -----  *
    *  -----------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../../types/global.d.ts" />


(($) => {


    /**
     * ---------------------------
     * -----  `fontSizer()`  -----
     * ---------------------------
     * - Anima el tamaño de fuente del objetivo segun `data-fontsizer` al hacer clic.
     * - Usa `data-fontsizer-target` para indicar el selector destino (por defecto `#mydiv`).
     * @return {JQuery} - Cadena jQuery para encadenar metodos.
     */
    $.fn.fontSizer = function () {

        return this.each(function () {

            const $this = $(this);

            $this.on('click', (event) => {

                event.preventDefault();

                /** @type {string} - Selector del elemento cuya fuente se animara */
                const target = $this.data('fontsizerTarget') || '#mydiv';

                $(target).animate({ 'font-size': $this.data('fontsizer') });
            });

        });

    };


})(jQuery);
