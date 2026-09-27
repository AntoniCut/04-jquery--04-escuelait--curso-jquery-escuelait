/*
    *  --------------------------------------------------------------------------------------------  *
    *  -----  05-validacion-avanzada.js  --  /src/scripts/clase-27/05-validacion-avanzada.js  -----  *
    *  --------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  05-validacion-avanzada.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */


    /** @type {JQuery<HTMLFormElement>} - `formulario de validación avanzada` */
    const $formAdvanced = /** @type {JQuery<HTMLFormElement>} */ ($('#formAdvanced'));

    /** @type {JQuery<HTMLButtonElement>} - `botón que valida sin submit` */
    const $btnValidateAdvanced = /** @type {JQuery<HTMLButtonElement>} */ ($('#btnValidateAdvanced'));

    /** @type {JQuery<HTMLParagraphElement>} - `párrafo con el resultado de la validación` */
    const $advancedLog = /** @type {JQuery<HTMLParagraphElement>} */ ($('#advancedLog'));


    /*
        *  -------------------------------------------  *
        *  -----  Ejemplo validación avanzada  -----  *
        *  -------------------------------------------  *
    */


    //  -----  aplicar el plugin sin opciones  -----
    $formAdvanced.advancedValidation();

    //  -----  validar sin enviar el formulario  -----
    $btnValidateAdvanced.on('click', (event) => {

        //  -----  el botón no envía el formulario  -----
        event.preventDefault();

        //  -----  la promesa pinta el resultado en el párrafo reservado  -----
        $formAdvanced.advancedValidation('validate')
            .done(() => {
                $advancedLog.text('El formulario es válido.');
            })
            .fail(() => {
                $advancedLog.text('Hay campos con errores.');
            });

    });


})(jQuery);
