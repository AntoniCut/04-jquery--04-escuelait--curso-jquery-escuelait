/*
    *  ------------------------------------------------------------------------  *
    *  -----  04-ajax-form.js  --  /src/scripts/clase-26/04-ajax-form.js  -----  *
    *  ------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  04-ajax-form.js  -----');
    console.log('\n');


    /** - `URL base de los servicios PHP de la clase 26` */
    const URL_BASE = '/escuelait/curso-jquery-escuelait/app/services/clase-26';


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */


    /** @type {JQuery<HTMLFormElement>} - `Formulario del ejemplo con valores por defecto` */
    const $formDefault = /** @type {JQuery<HTMLFormElement>} */ ($('#formDefault'));

    /** @type {JQuery<HTMLFormElement>} - `Formulario del ejemplo solo con target` */
    const $formTarget = /** @type {JQuery<HTMLFormElement>} */ ($('#formTarget'));

    /** @type {JQuery<HTMLFormElement>} - `Formulario del ejemplo con type GET` */
    const $formGet = /** @type {JQuery<HTMLFormElement>} */ ($('#formGet'));

    /** @type {JQuery<HTMLFormElement>} - `Formulario del ejemplo con onSuccess` */
    const $formSuccess = /** @type {JQuery<HTMLFormElement>} */ ($('#formSuccess'));

    /** @type {JQuery<HTMLFormElement>} - `Formulario del ejemplo con onError` */
    const $formError = /** @type {JQuery<HTMLFormElement>} */ ($('#formError'));

    /** @type {JQuery<HTMLFormElement>} - `Formulario del ejemplo con onAlways` */
    const $formAlways = /** @type {JQuery<HTMLFormElement>} */ ($('#formAlways'));

    /** @type {JQuery<HTMLParagraphElement>} - `Parrafo de feedback del callback onSuccess` */
    const $ajaxFormLog = /** @type {JQuery<HTMLParagraphElement>} */ ($('#ajaxFormLog'));

    /** @type {JQuery<HTMLParagraphElement>} - `Parrafo de feedback del callback onError` */
    const $resultadoError = /** @type {JQuery<HTMLParagraphElement>} */ ($('#resultadoError'));

    /** @type {JQuery<HTMLParagraphElement>} - `Parrafo de feedback del callback onAlways` */
    const $ajaxFormAlwaysLog = /** @type {JQuery<HTMLParagraphElement>} */ ($('#ajaxFormAlwaysLog'));

    /** @type {JQuery<HTMLParagraphElement>} - `Parrafo de feedback del callback onInvalid` */
    const $ajaxFormValidationLog = /** @type {JQuery<HTMLParagraphElement>} */ ($('#ajaxFormValidationLog'));


    /*
        *  -----------------------  *
        *  -----  Funciones  -----  *
        *  -----------------------  *
    */


    /**
     * --------------------------------------
     * -----  `construirUrl(endpoint)`  -----
     * --------------------------------------
     * - Compone la URL absoluta de un servicio PHP de la clase.
     * @param {string} endpoint - Nombre del archivo PHP.
     * @return {string} - URL absoluta del servicio.
     */
    const construirUrl = (endpoint) => `${URL_BASE}/${endpoint}`;


    /*
        *  ---------------------------  *
        *  -----  Configuracion  -----  *
        *  ---------------------------  *
    */


    /** @type {BasicValidationOptions} - `mensaje y callback si el formulario no es valido` */
    const optionsValidation = {
        message: 'Rellena este campo',
        onInvalid: function () {
            $ajaxFormValidationLog.text('El formulario no es válido');
        }
    };


    /*
        *  ------------------------------------  *
        *  -----  Ejemplo con defaults  -----  *
        *  ------------------------------------  *
    */


    //  -----  aplicar plugin sin opciones: action, method y data-ajaxform-target  -----
    $formDefault
        .basicValidation()
        .ajaxForm();


    /*
        *  ----------------------------------  *
        *  -----  Ejemplo solo target  -----  *
        *  ----------------------------------  *
    */


    /** @type {AjaxFormOptions} - `solo destino de la respuesta` */
    const optionsTarget = {
        target: '#resultadoTarget'
    };

    $formTarget
        .basicValidation(optionsValidation)
        .ajaxForm(optionsTarget);


    /*
        *  -------------------------------  *
        *  -----  Ejemplo type GET  -----  *
        *  -------------------------------  *
    */


    /** @type {AjaxFormOptions} - `envio GET y destino` */
    const optionsGet = {
        type: 'GET',
        target: '#resultadoGet'
    };

    $formGet
        .basicValidation(optionsValidation)
        .ajaxForm(optionsGet);


    /*
        *  -------------------------------------  *
        *  -----  Ejemplo con onSuccess  -----  *
        *  -------------------------------------  *
    */


    /** @type {AjaxFormOptions} - `destino y callback al terminar` */
    const optionsSuccess = {
        target: '#resultadoSuccess',
        onSuccess: function (respuesta) {
            $ajaxFormLog.text(
                `Enviado — ${respuesta.mensaje}`
            );
        }
    };

    $formSuccess
        .basicValidation(optionsValidation)
        .ajaxForm(optionsSuccess);


    /*
        *  -----------------------------------  *
        *  -----  Ejemplo con onError  -----  *
        *  -----------------------------------  *
    */


    /** @type {AjaxFormOptions} - `url inexistente y callback de error` */
    const optionsError = {
        url: construirUrl('no-existe.php'),
        onError: function (status) {
            $resultadoError.text(
                `Error Ajax — ${status}`
            );
        }
    };

    $formError
        .basicValidation(optionsValidation)
        .ajaxForm(optionsError);


    /*
        *  ------------------------------------  *
        *  -----  Ejemplo con onAlways  -----  *
        *  ------------------------------------  *
    */


    /** @type {AjaxFormOptions} - `destino y callback al terminar siempre` */
    const optionsAlways = {
        target: '#resultadoAlways',
        onAlways: function () {
            $ajaxFormAlwaysLog.text('Petición terminada');
        }
    };

    $formAlways
        .basicValidation(optionsValidation)
        .ajaxForm(optionsAlways);


})(jQuery);
