/*
    *  --------------------------------------------------------------------------------------------  *
    *  -----  01-valores-por-defecto.js  --  /src/scripts/clase-27/01-valores-por-defecto.js  -----  *
    *  --------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  01-valores-por-defecto.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */


    /** @type {JQuery<HTMLFormElement>} - `formulario con valores por defecto` */
    const $formDefault = /** @type {JQuery<HTMLFormElement>} */ ($('#formDefault'));


    /*
        *  ------------------------------------  *
        *  -----  Ejemplo con defaults  -----  *
        *  ------------------------------------  *
    */


    //  -----  aplicar el plugin sin opciones: clase, mensaje y borde por defecto  -----
    $formDefault.advancedValidation();


})(jQuery);
