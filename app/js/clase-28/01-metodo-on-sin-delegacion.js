/*
    *  ------------------------------------------------------------------------------------------------------  *
    *  -----  01-metodo-on-sin-delegacion.js  --  /src/scripts/clase-28/01-metodo-on-sin-delegacion.js  -----  *
    *  ------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  01-metodo-on-sin-delegacion.js  -----');
    console.log('\n');

    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */


    /** @type {JQuery<HTMLDivElement>} - `elemento fuente` */
    const $source = /** @type {JQuery<HTMLDivElement>} */ (
        $("#source")
    );

    /** @type {JQuery<HTMLParagraphElement>} - `párrafo que ya existe` */
    const $texto = /** @type {JQuery<HTMLParagraphElement>} */ (
        $(".clone__text")
    );

    /** @type {JQuery<HTMLButtonElement>} - `botón de clonación` */
    const $clone = /** @type {JQuery<HTMLButtonElement>} */ (
        $("#clone")
    );

    /** @type {JQuery<HTMLDivElement>} - `elemento destino` */
    const $target = /** @type {JQuery<HTMLDivElement>} */ (
        $("#target")
    );


    //  -----  enlazar el click solo al párrafo que ya está en el origen  -----
    $texto.on("click", (evento) => {

        /** @type {JQuery<HTMLParagraphElement>} - `párrafo pulsado` */
        const $parrafo = /** @type {JQuery<HTMLParagraphElement>} */ (
            $(evento.currentTarget)
        );

        //  -----  poner el párrafo en negrita  -----
        $parrafo.css("font-weight", "bold");
    });


    //  -----  al pulsar clonar, copiar el párrafo sin su manejador  -----
    $clone.on("click", (evento) => {

        //  -----  el botón no hace otra cosa  -----
        evento.preventDefault();

        /** @type {HTMLDivElement} - `origen del clon` */
        const origen = /** @type {HTMLDivElement} */ ($source.get(0));

        /** @type {HTMLDivElement} - `destino del clon` */
        const destino = /** @type {HTMLDivElement} */ ($target.get(0));

        //  -----  vaciar el destino antes de copiar  -----
        destino.replaceChildren();

        //  -----  copiar cada hijo con cloneNode, sin los manejadores  -----
        Array.from(origen.childNodes).forEach((nodo) => {

            //  -----  añadir la copia al destino  -----
            destino.appendChild(nodo.cloneNode(true));
        });
    });

})(jQuery);
