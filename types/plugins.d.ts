/*
    *  ---------------------------------------------------  *
    *  -----  plugins.d.ts  --  /types/plugins.d.ts  -----  *
    *  ---------------------------------------------------  *
*/


declare global {


    /**
        * -------------------------------------------
        * -----  `FontSizerAdvancedOptions {}`  -----
        * -------------------------------------------
        * Opciones de `fontSizerAdvanced`.
        * Se fusionan con `{ target: '#fontSizer', onFontResized: () => {} }` mediante `$.extend`.
        */
    interface FontSizerAdvancedOptions {
        /** Selector del elemento cuya fuente se animará. */
        target?: string;
        /** Función a ejecutar cuando la fuente se ha animado. Recibe el elemento como `this`. */
        onFontResized?: (this: HTMLElement, param1?: string, param2?: string, param3?: string) => void;
    }


    /**
     * ---------------------------------
     * -----  `HilightOptions {}`  -----
     * ---------------------------------
     * Opciones de `hilight`.
     * Se fusionan con los valores por defecto mediante `$.extend`.
     */
    interface HilightOptions {
        /** Color del texto. */
        foreground?: string;
        /** Color de fondo. */
        background?: string;
        /** Función a ejecutar cuando el elemento ya está resaltado. Recibe el elemento como `this`. */
        onFormatted?: (this: HTMLElement) => void;
    }


    /**
     * ----------------------------------
     * -----  `AjaxFormOptions {}`  -----
     * ----------------------------------
     * Opciones de `ajaxForm`.
     * Se fusionan con `action` / `method` del formulario y con los valores por defecto.
     */
    interface AjaxFormOptions {
        /** URL de envío. Si se omite, se usa el `action` del formulario. */
        url?: string;
        /** Método HTTP. Si se omite, se usa el `method` del formulario o `POST`. */
        type?: string;
        /** Selector donde pintar `respuesta.mensaje`. */
        target?: string;
        /** Callback tras un envío correcto. Recibe el formulario como `this`. */
        onSuccess?: (this: HTMLFormElement, respuesta: AjaxFormResponse) => void;
        /** Callback si el Ajax falla o PHP devuelve `ok: false`. Recibe el formulario como `this`. */
        onError?: (this: HTMLFormElement, status: string) => void;
        /** Callback si el Ajax termina. Recibe el formulario como `this`. */
        onAlways?: (this: HTMLFormElement) => void;
    }


    /**
     * -----------------------------------
     * -----  `AjaxFormResponse {}`  -----
     * -----------------------------------
     * JSON que devuelve `enviar.php`.
     */
    interface AjaxFormResponse {
        /** Indica si nombre y email llegaron informados. */
        ok: boolean;
        /** Mensaje para pintar en el destino. */
        mensaje: string;
    }


    /**
     * -----------------------------------------
     * -----  `BasicValidationOptions {}`  -----
     * -----------------------------------------
     * Opciones de `basicValidation`.
     * Se fusionan con los valores por defecto mediante `$.extend`.
     */
    interface BasicValidationOptions {
        /** Selector de los campos a validar. */
        selector?: string;
        /** Clase que se añade al campo si no es válido. */
        errorClass?: string;
        /** Texto del mensaje de error junto al campo. */
        message?: string;
        /** Callback si el formulario no es válido. Recibe el formulario como `this`. */
        onInvalid?: (this: HTMLFormElement) => void;
    }



    interface JQuery {


        /*
            *  ----------------------------------------------------------------------------  *
            *  -----  plugins jQuery (clase 25) — /src/scripts/clase-25/plugins/*.js  -----  *
            *  -----  Documentacion en /src/scripts/clase-25/plugins/*.js             -----  *
            *  ----------------------------------------------------------------------------  *
        */

        /**
         * ------------------------
         * -----  `urlize()`  -----
         * ------------------------
         * - Hace clickable cada elemento y redirige a la URL de `data-url`.
         * @returns Cadena jQuery para encadenar metodos.
         */
        urlize(): JQuery;


        /**
         * -----------------------------
         * -----  `underlinize()`  -----
         * -----------------------------
         * - Aplica subrayado a cada elemento de la coleccion.
         * @returns Cadena jQuery para encadenar metodos.
         */
        underlinize(): JQuery;


        /**
         * -------------------------
         * -----  `boldize()`  -----
         * -------------------------
         * - Aplica negrita a cada elemento de la coleccion.
         * @returns Cadena jQuery para encadenar metodos.
         */
        boldize(): JQuery;


        /**
         * --------------------------
         * -----  `colorize()`  -----
         * --------------------------
         * - Aplica el color indicado en `data-color` a cada elemento.
         * - En `input[type="color"]`, aplica el valor elegido al destino de `data-colorize-target`.
         * @returns Cadena jQuery para encadenar metodos.
         */
        colorize(): JQuery;


        /**
         * ---------------------------
         * -----  `fontSizer()`  -----
         * ---------------------------
         * - Anima el tamaño de fuente del objetivo segun `data-fontsizer` al hacer clic.
         * - Usa `data-fontsizer-target` para indicar el selector destino (por defecto `#mydiv`).
         * @returns Cadena jQuery para encadenar metodos.
         */
        fontSizer(): JQuery;


        /**
         * ------------------------------------------
         * -----  `templatize(template, data)`  -----
         * ------------------------------------------
         * - Compila una plantilla Handlebars y reemplaza el contenido del elemento.
         * - Si `data` es un objeto, lo usa como contexto Handlebars.
         * - Si `data` es una URL, obtiene un JSON con `$.getJSON` y lo usa como contexto.
         * @param template - Id o selector del `<script>` con la plantilla.
         * @param data - Contexto Handlebars o URL del JSON.
         * @returns Cadena jQuery para encadenar metodos.
         */
        templatize(template: string, data: Record<string, unknown> | string): JQuery;


        /*
            *  ----------------------------------------------------------------------------  *
            *  -----  plugins jQuery (clase 26) — /src/scripts/clase-26/plugins/*.js  -----  *
            *  -----  Documentacion en /src/scripts/clase-26/plugins/*.js             -----  *
            *  ----------------------------------------------------------------------------  *
        */


        /**
         * ------------------------------------------
         * -----  `fontSizerAdvanced(options)`  -----
         * ------------------------------------------
         * - Anima el tamaño de fuente del objetivo segun `data-fontsizer` al hacer clic.
         * - Fusiona las opciones recibidas con `{ target: '#fontSizer' }` mediante `$.extend`.
         * @param options - Opciones del plugin.
         * @returns Cadena jQuery para encadenar metodos.
         */
        fontSizerAdvanced(options?: FontSizerAdvancedOptions): JQuery;


        /**
         * --------------------------------
         * -----  `hilight(options)`  -----
         * --------------------------------
         * - Resalta cada elemento: color, fondo y envuelve el contenido en `<strong>`.
         * - Fusiona las opciones recibidas con los valores por defecto mediante `$.extend`.
         * @param options - Opciones del plugin.
         * @returns Cadena jQuery para encadenar metodos.
         */
        hilight(options?: HilightOptions): JQuery;


        /**
         * ---------------------------------
         * -----  `ajaxForm(options)`  -----
         * ---------------------------------
         * - Envia el formulario por Ajax y evita la recarga de la pagina.
         * - Fusiona los valores por defecto, los atributos del formulario y las opciones.
         * @param options - Opciones del plugin.
         * @returns Cadena jQuery para encadenar metodos.
         */
        ajaxForm(options?: AjaxFormOptions): JQuery;


        /**
         * ----------------------------------------
         * -----  `basicValidation(options)`  -----
         * ----------------------------------------
         * - Valida al enviar los campos con la clase `.basic-validation`.
         * - Fusiona las opciones recibidas con los valores por defecto mediante `$.extend`.
         * @param options - Opciones del plugin.
         * @returns Cadena jQuery para encadenar metodos.
         */
        basicValidation(options?: BasicValidationOptions): JQuery;

    }

}

//  -----  Exportacion de tipos globales  -----  //
export { };
