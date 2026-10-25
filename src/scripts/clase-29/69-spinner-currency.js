/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  69-spinner-currency.js  --  /src/scripts/clase-29/69-spinner-currency.js  -----  *
    *  --------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  69-spinner-currency.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLInputElement>} - `importe` */
    const $importe = $("#importe");

    /** @type {JQuery<HTMLParagraphElement>} - `importe en euros` */
    const $formato = $("#formato");

    /** @type {Intl.NumberFormat} - `formato de euros` */
    const euros = new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" });

    /**
     * --------------------------
     * -----  `escribir()`  -----
     * --------------------------
     * - Muestra el valor como euros.
     * @return {void}
     */
    const escribir = () => {

        //  -----  publicar el importe con formato de moneda  -----
        $formato.text(euros.format(Number($importe.spinner("value")) || 0));
    };

    //  -----  crear el control de céntimos  -----
    $importe.spinner({
        min: 0,
        step: 0.05,
        spin: escribir,
        change: escribir,
    });

    //  -----  escribir el importe inicial  -----
    escribir();
})(jQuery);
