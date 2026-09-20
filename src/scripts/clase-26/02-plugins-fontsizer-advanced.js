/*
    *  ----------------------------------------------------------------------------------------------------------  *
    *  -----  02-plugins-fontsizer-advanced.js  --  /src/scripts/clase-26/02-plugins-fontsizer-advanced.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  02-plugins-fontsizer-advanced.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */


    /** @type {JQuery<HTMLButtonElement>} - `Botones del ejemplo con valores por defecto` */
    const $buttonFontSizerDefault = /** @type {JQuery<HTMLButtonElement>} */ ($('.font-sizer-default'));

    /** @type {JQuery<HTMLButtonElement>} - `Botones del ejemplo con settings personalizados` */
    const $buttonFontSizerSettings = /** @type {JQuery<HTMLButtonElement>} */ ($('.font-sizer'));

    /** @type {JQuery<HTMLParagraphElement>} - `Parrafo de feedback del callback onFontResized` */
    const $fontSizerLog = /** @type {JQuery<HTMLParagraphElement>} */ ($('#fontSizerLog'));


    /*
        *  ------------------------------------  *
        *  -----  Ejemplo con defaults  -----  *
        *  ------------------------------------  *
    */


    //  -----  aplicar plugin sin opciones: usa target #fontSizer  -----
    $buttonFontSizerDefault.fontSizerAdvanced();


    /*
        *  ------------------------------------  *
        *  -----  Ejemplo con settings  -----  *
        *  ------------------------------------  *
    */


    /** @type {FontSizerAdvancedOptions} - `opciones personalizadas fusionadas con defaults` */
    const settings = {

        target: '#divFontSizer',

        onFontResized: function (param1, param2, param3) {
            $fontSizerLog.text(
                `Fuente animada — ${param1}, ${param2}, ${param3}`
            );
        }
    };

    //  -----  aplicar plugin con settings: target #divFontSizer y callback  -----
    $buttonFontSizerSettings.fontSizerAdvanced(settings);


})(jQuery);
