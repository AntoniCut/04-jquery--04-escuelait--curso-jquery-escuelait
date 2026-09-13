/*
    *  ---------------------------------------------------------------------------------------------------  *
    *  -----  /02-plugins-con-handlebars.js  --  /src/scripts/clase-25/02-plugins-con-handlebars.js  -----  *
    *  ---------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  02-plugins-con-handlebars.js  -----');
    console.log('\n');


    /** - `URL base del JSON de contexto` */
    const URL_BASE = '/escuelait/curso-jquery-escuelait/app/services/clase-25';


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */


    /** @type {JQuery<HTMLDivElement>} - `Contenedor con contexto como objeto` */
    const $templateTarget = /** @type {JQuery<HTMLDivElement>} */ ($('#templateTarget'));

    /** @type {JQuery<HTMLDivElement>} - `Contenedor con contexto desde URL JSON` */
    const $templateTargetAjax = /** @type {JQuery<HTMLDivElement>} */ ($('#templateTargetAjax'));

    /** @type {string} - `URL del JSON de contexto` */
    const url = `${URL_BASE}/template-data.json`;


    /*
        *  -------------------------------------  *
        *  -----  Ejemplos individuales  -----  *
        *  -------------------------------------  *
    */


    //  -----  2 parametro: objeto json  -----
    $templateTarget.templatize(
        'template',
        {
            title: 'Titulo como h4',
            body: 'Cuerpo como p',
        }
    );

    //  -----  2 parametro: url que devuelve json  -----
    $templateTargetAjax.templatize('template', url);


})(jQuery);
