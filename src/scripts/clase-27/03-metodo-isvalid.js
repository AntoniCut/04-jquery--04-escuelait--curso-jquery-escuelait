/*
    *  ----------------------------------------------------------------------------------  *
    *  -----  03-metodo-isvalid.js  --  /src/scripts/clase-27/03-metodo-isvalid.js  -----  *
    *  ----------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  03-metodo-isvalid.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */


    /** @type {JQuery<HTMLFormElement>} - `formulario del ejemplo isValid` */
    const $formIsValid = /** @type {JQuery<HTMLFormElement>} */ ($('#formIsValid'));

    /** @type {JQuery<HTMLButtonElement>} - `botón que lee isValid` */
    const $btnIsValid = /** @type {JQuery<HTMLButtonElement>} */ ($('#btnIsValid'));

    /** @type {JQuery<HTMLParagraphElement>} - `párrafo con el resultado de isValid` */
    const $isValidLog = /** @type {JQuery<HTMLParagraphElement>} */ ($('#isValidLog'));


    /*
        *  -----------------------  *
        *  -----  Funciones  -----  *
        *  -----------------------  *
    */


    /**
     * ------------------------------------------
     * -----  `bloquearEnvioNativo($form)`  -----
     * ------------------------------------------
     * - Anula el submit nativo para poder leer isValid sin abandonar la página.
     * @param {JQuery<HTMLFormElement>} $form - Formulario del ejercicio.
     * @return {void}
     */
    const bloquearEnvioNativo = ($form) => {

        /** @type {HTMLFormElement | undefined} - `nodo del formulario` */
        const form = $form.get(0);

        //  -----  si el formulario existe, se anula el envío nativo del plugin  -----
        if (form) {

            /** @type {HTMLFormElement & { submit: () => void }} - `formulario con submit sustituible` */
            const formulario = /** @type {HTMLFormElement & { submit: () => void }} */ (form);

            formulario.submit = () => {};
        }

    };


    /*
        *  ------------------------------------  *
        *  -----  Ejemplo método isValid  -----  *
        *  ------------------------------------  *
    */


    //  -----  aplicar el plugin sin opciones  -----
    $formIsValid.advancedValidation();

    //  -----  el plugin llama a submit() nativo si es válido; aquí se anula para leer isValid  -----
    bloquearEnvioNativo($formIsValid);

    //  -----  este formulario se queda en la página para poder leer isValid  -----
    $formIsValid.on('submit', (event) => {

        //  -----  evitar el envío del formulario  -----
        event.preventDefault();

    });

    //  -----  validate escribe el flag y isValid lo lee  -----
    $btnIsValid.on('click', (event) => {

        //  -----  el botón no envía el formulario  -----
        event.preventDefault();

        //  -----  validate escribe el flag antes de devolver el deferred  -----
        $formIsValid.advancedValidation('validate');

        /** @type {boolean | undefined} - `resultado de la última validación` */
        const valid = $formIsValid.advancedValidation('isValid');

        //  -----  pintar el flag en el párrafo reservado  -----
        $isValidLog.text(valid ? 'isValid: true' : 'isValid: false');

    });


})(jQuery);
