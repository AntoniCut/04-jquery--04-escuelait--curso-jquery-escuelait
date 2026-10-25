/*
    *  ----------------------------------------------------------------------------------------------------  *
    *  -----  17-autocomplete-scrollable.js  --  /src/scripts/clase-29/17-autocomplete-scrollable.js  -----  *
    *  ----------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  17-autocomplete-scrollable.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** - `etiquetas de programación` */
    const etiquetas = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme",
    ];

    /** @type {JQuery<HTMLInputElement>} - `campo de búsqueda` */
    const $etiquetas = $("#etiquetas");

    //  -----  sugerir etiquetas en un menú con desplazamiento  -----
    $etiquetas.autocomplete({
        source: etiquetas,
    });
})(jQuery);
