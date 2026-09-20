/*
    *  ------------------------------------------------------------------------------------  *
    *  -----  jquery.hilight.js  --  /src/scripts/clase-26/plugins/jquery.hilight.js  -----  *
    *  ------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../../types/global.d.ts" />


(($) => {


    /**
     * --------------------------
     * -----  `defaults {}`  -----
     * --------------------------
     * - Valores por defecto del plugin.
     * @type {Required<HilightOptions>}
     */
    const defaults = {
        foreground: 'red',
        background: 'yellow',
        onFormatted: () => {}
    };


    /**
     * --------------------------------
     * -----  `hilight(options)`  -----
     * --------------------------------
     * - Resalta cada elemento: color, fondo y envuelve el contenido en `<strong>`.
     * - Fusiona las opciones recibidas con `defaults` mediante `$.extend`.
     * @param {HilightOptions} [options] - Opciones del plugin.
     * @return {JQuery} - Cadena jQuery para encadenar metodos.
     */
    $.fn.hilight = function (options) {

        /** @type {Required<HilightOptions>} - `opciones fusionadas` */
        const settings = $.extend({}, defaults, options);


        return this.each(function () {

            /** @type {JQuery<HTMLElement>} - `elemento a resaltar` */
            const $this = /** @type {JQuery<HTMLElement>} */ ($(this));

            $this.css({
                color: settings.foreground,
                'background-color': settings.background
            });

            $this.wrapInner($('<strong>'));

            settings.onFormatted.call(this);

        });

    };


    //  -----  exponer los defaults para poder consultarlos o sobreescribirlos  -----
    $.extend($.fn.hilight, { defaults });


})(jQuery);
