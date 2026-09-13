/*
    *  ---------------------------------------------------  *
    *  -----  plugins.d.ts  --  /types/plugins.d.ts  -----  *
    *  ---------------------------------------------------  *
*/


declare global {


    /*
        *  ----------------------------------------------------------------------------  *
        *  -----  plugins jQuery (clase 25) — /src/scripts/clase-25/plugins/*.js  -----  *
        *  -----  Documentacion en /src/scripts/clase-25/plugins/*.js             -----  *
        *  ----------------------------------------------------------------------------  *
    */

    interface JQuery {


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


    }

}

//  -----  Exportacion de tipos globales  -----  //
export { };
