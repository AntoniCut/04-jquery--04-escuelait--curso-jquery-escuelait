/*
    *  ----------------------------------------------------------------------------------  *
    *  -----  06-metodo-destroy.js  --  /src/scripts/clase-27/06-metodo-destroy.js  -----  *
    *  ----------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  06-metodo-destroy.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */


    /** @type {JQuery<HTMLFormElement>} - `formulario del ejemplo destroy` */
    const $formDestroy = /** @type {JQuery<HTMLFormElement>} */ ($('#formDestroy'));

    /** @type {JQuery<HTMLButtonElement>} - `botón que destruye la instancia` */
    const $btnDestroy = /** @type {JQuery<HTMLButtonElement>} */ ($('#btnDestroy'));

    /** @type {JQuery<HTMLParagraphElement>} - `párrafo del hook onDestroy` */
    const $destroyLog = /** @type {JQuery<HTMLParagraphElement>} */ ($('#destroyLog'));


    /*
        *  ------------------------------------  *
        *  -----  Ejemplo método destroy  -----  *
        *  ------------------------------------  *
    */


    /** @type {AdvancedValidationOptions} - `aviso al destruir la instancia` */
    const optionsDestroy = {
        onDestroy: function () {
            $destroyLog.text(`Plugin destruido — ${this.id}. El envío ya no se valida.`);
        }
    };


    //  -----  crear la instancia con el hook onDestroy  -----
    $formDestroy.advancedValidation(optionsDestroy);

    //  -----  destruir la instancia y desactivar el botón  -----
    $btnDestroy.on('click', (event) => {

        //  -----  el botón no envía el formulario  -----
        event.preventDefault();

        //  -----  quitar listener, mensajes e instancia  -----
        $formDestroy.advancedValidation('destroy');

        //  -----  evitar una segunda destrucción  -----
        $btnDestroy.prop('disabled', true);

    });


})(jQuery);
