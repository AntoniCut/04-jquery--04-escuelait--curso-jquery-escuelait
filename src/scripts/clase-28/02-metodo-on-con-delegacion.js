/*
    *  ------------------------------------------------------------------------------------------------------  *
    *  -----  02-metodo-on-con-delegacion.js  --  /src/scripts/clase-28/02-metodo-on-con-delegacion.js  -----  *
    *  ------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  02-metodo-on-con-delegacion.js  -----');
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

    /** @type {JQuery<HTMLButtonElement>} - `botón de clonación` */
    const $clone = /** @type {JQuery<HTMLButtonElement>} */ (
        $("#clone")
    );

    /** @type {JQuery<HTMLDivElement>} - `elemento destino` */
    const $target = /** @type {JQuery<HTMLDivElement>} */ (
        $("#target")
    );

    /** @type {JQuery<HTMLDivElement>} - `origen y destino que delegan el click` */
    const $contenedores = /** @type {JQuery<HTMLDivElement>} */ (
        $("#source, #target")
    );


    /*
        *  --------------------- *
        *  -----  Eventos  -----  *
        *  ---------------------  *
    */

    
    //  -----  delegar el click de .clone-delegate__text en el origen y en el destino  -----
    $contenedores.on("click", ".clone-delegate__text", (evento) => {

        /** @type {JQuery<HTMLParagraphElement>} - `párrafo pulsado` */
        const $parrafo = /** @type {JQuery<HTMLParagraphElement>} */ (
            $(evento.currentTarget)
        );

        //  -----  poner el párrafo en negrita  -----
        $parrafo.css("font-weight", "bold");
    });


    //  -----  al pulsar clone, copiar el contenido del origen  -----
    $clone.on("click", () => {

        //  -----  vaciar el destino antes de copiar  -----
        $target.empty();

        //  -----  clonar los hijos del origen dentro del destino  -----
        $source.children().clone().appendTo($target);
    });

})(jQuery);
