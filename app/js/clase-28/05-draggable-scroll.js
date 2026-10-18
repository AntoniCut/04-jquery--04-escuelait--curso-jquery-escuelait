/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  05-draggable-scroll.js  --  /src/scripts/clase-28/05-draggable-scroll.js  -----  *
    *  --------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  05-draggable-scroll.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLDivElement>} - Arrastre con scroll automático por defecto */
    const $draggable = $("#draggable");

    /** @type {JQuery<HTMLDivElement>} - Arrastre con mayor sensibilidad de scroll */
    const $draggable2 = $("#draggable2");

    /** @type {JQuery<HTMLDivElement>} - Arrastre con mayor velocidad de scroll */
    const $draggable3 = $("#draggable3");

    //  -----  activar el scroll automático con la sensibilidad por defecto  -----
    $draggable.draggable({ scroll: true });

    //  -----  activar el scroll cuando el cursor está a 100 px del borde  -----
    $draggable2.draggable({ scroll: true, scrollSensitivity: 100 });

    //  -----  activar el scroll a mayor velocidad  -----
    $draggable3.draggable({ scroll: true, scrollSpeed: 100 });

})(jQuery);
