/*
    *  --------------------------------------------------------------------------------------------  *
    *  -----  37-datepicker-localize.js  --  /src/scripts/clase-29/37-datepicker-localize.js  -----  *
    *  --------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  37-datepicker-localize.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLInputElement>} - `campo de fecha` */
    const $fecha = $("#datepicker");

    //  -----  definir los textos del calendario en español  -----
    $.datepicker.regional.es = {
        closeText: "Cerrar",
        prevText: "Anterior",
        nextText: "Siguiente",
        currentText: "Hoy",
        monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
        monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
        dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
        dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
        dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
        weekHeader: "Sm",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: "",
    };

    //  -----  usar esos textos como valores por defecto  -----
    $.datepicker.setDefaults($.datepicker.regional.es);

    //  -----  abrir el calendario en español  -----
    $fecha.datepicker();
})(jQuery);
