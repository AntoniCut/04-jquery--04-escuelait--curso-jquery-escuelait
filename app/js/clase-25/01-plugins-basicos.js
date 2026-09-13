/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /01-plugins-basicos.js  --  /src/scripts/clase-25/01-plugins-basicos.js  -----  *
    *  -------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  01-plugins-basicos.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */


    /** @type {JQuery<HTMLDivElement>} - `Div para el ejemplo con urlize` */
    const $divUrlize = /** @type {JQuery<HTMLDivElement>} */ ($('#urlize'));

    /** @type {JQuery<HTMLDivElement>} - `Div para el ejemplo con underlinize` */
    const $divUnderlinize = /** @type {JQuery<HTMLDivElement>} */ ($('#underlinize'));

    /** @type {JQuery<HTMLDivElement>} - `Div para el ejemplo con boldize` */
    const $divBoldize = /** @type {JQuery<HTMLDivElement>} */ ($('#boldize'));

    /** @type {JQuery<HTMLDivElement>} - `Div para el ejemplo con colorize` */
    const $divColorize = /** @type {JQuery<HTMLDivElement>} */ ($('#colorize'));

    /** @type {JQuery<HTMLInputElement>} - `Input color para colorize` */
    const $inputColorize = /** @type {JQuery<HTMLInputElement>} */ ($('#colorizeInput'));

    /** @type {JQuery<HTMLButtonElement>} - `Botones fontSizer individuales` */
    const $buttonFontSizer = /** @type {JQuery<HTMLButtonElement>} */ ($('.fontSizer'));


    /*
        *  -------------------------------------  *
        *  -----  Ejemplos individuales  -----  *
        *  -------------------------------------  *
    */


    //  -----  aplicar plugin urlize a un div  -----
    $divUrlize.urlize();

    //  -----  aplicar plugin underlinize a un div  -----
    $divUnderlinize.underlinize();

    //  -----  aplicar plugin boldize a un div  -----
    $divBoldize.boldize();

    //  -----  aplicar plugin colorize a un div  -----
    $divColorize.colorize();

    //  -----  aplicar plugin colorize a un input  -----
    $inputColorize.colorize();

    //  -----  aplicar plugin fontsizer a los botones  -----
    $buttonFontSizer.fontSizer();


    /*
        *  -----------------------------------------------------  *
        *  -----  Ejemplo combinado encadenando metodos  -----  *
        *  -----------------------------------------------------  *
    */


    //  -----  aplicar plugin urlize y underlinize a un div  -----
    $('.urlize')
        .urlize()
        .underlinize();

    //  -----  aplicar plugin boldize y colorize  -----
    $('.boldize, .colorize')
        .boldize()
        .colorize();

    //  -----  aplicar plugin fontsizer al bloque combinado  -----
    $('.font-sizer').fontSizer();


})(jQuery);
