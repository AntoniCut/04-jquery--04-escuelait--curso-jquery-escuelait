/*
    *  ----------------------------------------------------------------------------------  *
    *  -----  03-plugin-hilight.js  --  /src/scripts/clase-26/03-plugin-hilight.js  -----  *
    *  ----------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  03-plugin-hilight.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */


    /** @type {JQuery<HTMLSpanElement>} - `Span del ejemplo con valores por defecto` */
    const $hilightDefault = /** @type {JQuery<HTMLSpanElement>} */ ($('.hilight-default'));

    /** @type {JQuery<HTMLSpanElement>} - `Span del ejemplo solo con foreground` */
    const $hilightForeground = /** @type {JQuery<HTMLSpanElement>} */ ($('.hilight-foreground'));

    /** @type {JQuery<HTMLSpanElement>} - `Span del ejemplo solo con background` */
    const $hilightBackground = /** @type {JQuery<HTMLSpanElement>} */ ($('.hilight-background'));

    /** @type {JQuery<HTMLSpanElement>} - `Span del ejemplo con foreground y background` */
    const $hilightColors = /** @type {JQuery<HTMLSpanElement>} */ ($('.hilight-colors'));

    /** @type {JQuery<HTMLSpanElement>} - `Span del ejemplo con onFormatted` */
    const $hilightCallback = /** @type {JQuery<HTMLSpanElement>} */ ($('.hilight-callback'));

    /** @type {JQuery<HTMLParagraphElement>} - `Parrafo de feedback del callback onFormatted` */
    const $hilightLog = /** @type {JQuery<HTMLParagraphElement>} */ ($('#hilightLog'));


    /*
        *  ------------------------------------  *
        *  -----  Ejemplo con defaults  -----  *
        *  ------------------------------------  *
    */


    //  -----  aplicar plugin sin opciones: rojo sobre amarillo  -----
    $hilightDefault.hilight();


    /*
        *  --------------------------------------  *
        *  -----  Ejemplo solo foreground  -----  *
        *  --------------------------------------  *
    */


    /** @type {HilightOptions} - `solo color de texto` */
    const optionsForeground = {
        foreground: 'blue'
    };

    $hilightForeground.hilight(optionsForeground);


    /*
        *  --------------------------------------  *
        *  -----  Ejemplo solo background  -----  *
        *  --------------------------------------  *
    */


    /** @type {HilightOptions} - `solo color de fondo` */
    const optionsBackground = {
        background: 'lightblue'
    };

    $hilightBackground.hilight(optionsBackground);


    /*
        *  ---------------------------------------------  *
        *  -----  Ejemplo foreground y background  -----  *
        *  ---------------------------------------------  *
    */


    /** @type {HilightOptions} - `colores personalizados` */
    const optionsColors = {
        foreground: 'navy',
        background: 'orange'
    };

    $hilightColors.hilight(optionsColors);


    /*
        *  ----------------------------------------  *
        *  -----  Ejemplo con onFormatted  -----  *
        *  ----------------------------------------  *
    */


    /** @type {HilightOptions} - `colores y callback al terminar` */
    const optionsCallback = {
        foreground: 'white',
        background: 'purple',
        onFormatted: function () {
            $hilightLog.text(
                `Resaltado — ${this.textContent}`
            );
        }
    };

    $hilightCallback.hilight(optionsCallback);


})(jQuery);
