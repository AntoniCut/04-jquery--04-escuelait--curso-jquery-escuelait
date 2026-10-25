/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  51-progressbar-label.js  --  /src/scripts/clase-29/51-progressbar-label.js  -----  *
    *  ----------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  51-progressbar-label.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLDivElement>} - `barra de progreso` */
    const $barra = $("#progressbar");

    /** @type {JQuery<HTMLParagraphElement>} - `porcentaje visible` */
    const $etiqueta = $(".progress-label");

    /**
     * ---------------------------
     * -----  `alCambiar()`  -----
     * ---------------------------
     * - Escribe el porcentaje actual.
     * @return {void}
     */
    const alCambiar = () => {

        //  -----  escribir el porcentaje  -----
        $etiqueta.text(`${Number($barra.progressbar("value")) || 0} %`);
    };

    /**
     * -----------------------------
     * -----  `alCompletar()`  -----
     * -----------------------------
     * - Sustituye el porcentaje por el texto final.
     * @return {void}
     */
    const alCompletar = () => {

        //  -----  indicar que la carga ha terminado  -----
        $etiqueta.text("Completo");
    };

    /**
     * -------------------------
     * -----  `avanzar()`  -----
     * -------------------------
     * - Sube el valor y se vuelve a programar hasta el final.
     * @return {void}
     */
    const avanzar = () => {

        /** - `valor actual de la barra` */
        const actual = Number($barra.progressbar("value")) || 0;

        //  -----  subir dos puntos sin pasar de 100  -----
        $barra.progressbar("value", Math.min(100, actual + 2));

        //  -----  si todavía no está llena, seguir un poco más tarde  -----
        if (actual < 98) {

            //  -----  programar el siguiente avance  -----
            window.setTimeout(avanzar, 80);
        }
    };

    //  -----  empezar en carga, con las rayas y el texto «Cargando…»  -----
    $barra.progressbar({
        value: false,
        change: alCambiar,
        complete: alCompletar,
    });

    //  -----  pasar al porcentaje un momento después  -----
    window.setTimeout(avanzar, 2000);
})(jQuery);
