/*
    *  --------------------------------------------------------------------------------  *
    *  -----  04-metodo-option.js  --  /src/scripts/clase-27/04-metodo-option.js  -----  *
    *  --------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  04-metodo-option.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */


    /** @type {JQuery<HTMLFormElement>} - `formulario del ejemplo option` */
    const $formOption = /** @type {JQuery<HTMLFormElement>} */ ($('#formOption'));

    /** @type {JQuery<HTMLButtonElement>} - `botón que lee la opción message` */
    const $btnOptionRead = /** @type {JQuery<HTMLButtonElement>} */ ($('#btnOptionRead'));

    /** @type {JQuery<HTMLButtonElement>} - `botón que escribe la opción message` */
    const $btnOptionWrite = /** @type {JQuery<HTMLButtonElement>} */ ($('#btnOptionWrite'));

    /** @type {JQuery<HTMLParagraphElement>} - `párrafo con la opción message` */
    const $optionLog = /** @type {JQuery<HTMLParagraphElement>} */ ($('#optionLog'));


    /*
        *  -----------------------------------  *
        *  -----  Ejemplo método option  -----  *
        *  -----------------------------------  *
    */


    //  -----  aplicar el plugin sin opciones  -----
    $formOption.advancedValidation();

    //  -----  leer el mensaje de error de la instancia  -----
    $btnOptionRead.on('click', (event) => {

        //  -----  el botón no envía el formulario  -----
        event.preventDefault();

        /** @type {string | undefined} - `mensaje de error de la instancia` */
        const message = $formOption.advancedValidation('option', 'message');

        //  -----  pintar el mensaje vigente  -----
        $optionLog.text(`Mensaje actual: ${message ?? ''}`);

    });

    //  -----  cambiar el mensaje y volver a leerlo  -----
    $btnOptionWrite.on('click', (event) => {

        //  -----  el botón no envía el formulario  -----
        event.preventDefault();

        //  -----  escribir la opción message de esta instancia  -----
        $formOption.advancedValidation('option', 'message', 'Rellena este campo');

        /** @type {string | undefined} - `mensaje de error ya actualizado` */
        const message = $formOption.advancedValidation('option', 'message');

        //  -----  pintar el mensaje ya actualizado  -----
        $optionLog.text(`Mensaje actualizado: ${message ?? ''}`);

    });


})(jQuery);
