/*
    *  ---------------------------------------------------------------------------------------  *
    *  -----  /jquery.colorize.js  --  /src/scripts/clase-25/plugins/jquery.colorize.js  -----  *
    *  ---------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../../types/global.d.ts" />


(($) => {


    /**
     * --------------------------
     * -----  `colorize()`  -----
     * --------------------------
     * - Aplica el color indicado en `data-color` a cada elemento.
     * - En `input[type="color"]`, aplica el valor elegido al destino de `data-colorize-target`.
     * @return {JQuery} - Cadena jQuery para encadenar metodos.
     */
    $.fn.colorize = function () {

        return this.each(function () {

            const $this = $(this);

            //  -----  input color: pinta el destino al cambiar el valor  -----
            if ($this.is('input[type="color"]')) {

                /** @type {string} - Selector del elemento cuyo color de texto se actualizara */
                const target = $this.data('colorizeTarget') || '#colorize';

                /**
                 * ----------------------------
                 * -----  `applyColor()`  -----
                 * ----------------------------
                 * - Aplica el color elegido en el input al destino de `data-colorize-target`.
                 * @return {void}
                 */
                const applyColor = () => {

                    /** @type {string} - Color elegido en el input */
                    const color = String($this.val());

                    $(target).css('color', color);

                };


                applyColor();

                $this.on('input change', applyColor);

                return;
            }

            const color = $this.data('color');

            if (color) {
                $this.css('color', color);
            }

        });

    };


})(jQuery);
