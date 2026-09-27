/*
    *  ----------------------------------------------------------------  *
    *  -----  02-hooks.js  --  /src/scripts/clase-27/02-hooks.js  -----  *
    *  ----------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  02-hooks.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */


    /** @type {JQuery<HTMLFormElement>} - `formulario del ejemplo con hooks` */
    const $formHooks = /** @type {JQuery<HTMLFormElement>} */ ($('#formHooks'));

    /** @type {JQuery<HTMLButtonElement>} - `botón que llama al método validate` */
    const $btnValidateHooks = /** @type {JQuery<HTMLButtonElement>} */ ($('#btnValidateHooks'));

    /** @type {JQuery<HTMLParagraphElement>} - `párrafo del hook onInit` */
    const $hooksInit = /** @type {JQuery<HTMLParagraphElement>} */ ($('#hooksInit'));

    /** @type {JQuery<HTMLParagraphElement>} - `párrafo de onIsValid y onIsNotValid` */
    const $hooksState = /** @type {JQuery<HTMLParagraphElement>} */ ($('#hooksState'));

    /** @type {JQuery<HTMLParagraphElement>} - `párrafo del hook onValidated` */
    const $hooksDone = /** @type {JQuery<HTMLParagraphElement>} */ ($('#hooksDone'));


    /*
        *  -----------------------  *
        *  -----  Funciones  -----  *
        *  -----------------------  *
    */


    /**
     * ------------------------------------------
     * -----  `bloquearEnvioNativo($form)`  -----
     * ------------------------------------------
     * - Anula el submit nativo para leer los hooks sin abandonar la página.
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
        *  -------------------------------  *
        *  -----  Ejemplo con hooks  -----  *
        *  -------------------------------  *
    */


    /** @type {AdvancedValidationOptions} - `hooks de la validación` */
    const optionsHooks = {
        onInit: function () {
            $hooksInit.text(`Plugin iniciado — ${this.id}`);
        },
        onValidating: function () {
            $hooksState.text(`Validando — ${this.id}`);
        },
        onIsValid: function () {
            $hooksState.text(`Válido — ${this.id}`);
        },
        onIsNotValid: function () {
            $hooksState.text(`No válido — ${this.id}`);
        },
        onValidated: function () {
            $hooksDone.text('Validación terminada');
        }
    };


    //  -----  crear la instancia con los hooks  -----
    $formHooks.advancedValidation(optionsHooks);

    //  -----  el plugin llama a submit() nativo si es válido; aquí se anula para leer los hooks  -----
    bloquearEnvioNativo($formHooks);

    //  -----  este formulario se queda en la página para poder leer los hooks  -----
    $formHooks.on('submit', (event) => {

        //  -----  evitar el envío del formulario  -----
        event.preventDefault();

    });

    //  -----  llamada al método público validate  -----
    $btnValidateHooks.on('click', (event) => {

        //  -----  el botón no envía el formulario  -----
        event.preventDefault();

        //  -----  validar y disparar los hooks  -----
        $formHooks.advancedValidation('validate');

    });


})(jQuery);
