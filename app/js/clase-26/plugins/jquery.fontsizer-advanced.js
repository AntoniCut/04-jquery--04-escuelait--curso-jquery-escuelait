/*
    *  ----------------------------------------------------------------------------------------------------------  *
    *  -----  jquery.fontsizer-advanced.js  --  /src/scripts/clase-26/plugins/jquery.fontsizer-advanced.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../../types/global.d.ts" />


(($) => {


    /**
     * -----------------------------------------
     * -----  `fontSizerAdvanced(options)`  -----
     * -----------------------------------------
     * - Anima el tamaño de fuente del objetivo segun `data-fontsizer` al hacer clic.
     * - Fusiona las opciones recibidas con los valores por defecto mediante `$.extend`.
     * @param {FontSizerAdvancedOptions} [options] - Opciones del plugin.
     * @return {JQuery} - Cadena jQuery para encadenar metodos.
     */
    $.fn.fontSizerAdvanced = function (options) {

        /** @type {Required<FontSizerAdvancedOptions>} - `opciones por defecto` */
        const defaults = {
            target: '#fontSizer',
            onFontResized: () => {}
        };

        /** @type {Required<FontSizerAdvancedOptions>} - `opciones fusionadas` */
        const settings = $.extend({}, defaults, options);


        return this.each(function () {

            /** @type {JQuery<HTMLElement>} - `elemento que dispara el plugin` */
            const $this = /** @type {JQuery<HTMLElement>} */ ($(this));

            $this.on('click', (event) => {

                event.preventDefault();

                /** @type {string} - `incremento o decremento de fuente segun el valor de data-fontsizer` */
                const fontSizer = /** @type {string} */ ($this.data('fontsizer'));

                $.when(
                    $(settings.target).animate({ 'font-size': fontSizer })
                )
                    .done(() => {
                        settings
                            .onFontResized
                            .call(this, 'p1', 'p2', 'p3');
                    });

            });

        });

    };


})(jQuery);
