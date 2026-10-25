/*
    *  ----------------------------------------------------------------------------------------------  *
    *  -----  07-autocomplete-default.js  --  /src/scripts/clase-29/07-autocomplete-default.js  -----  *
    *  ----------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  07-autocomplete-default.js  -----');

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
        "JQuery",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme",
    ];

    /** @type {JQuery<HTMLInputElement>} - `campo de etiquetas` */
    const $etiquetas = $("#etiquetas");

    //  -----  sugerir las etiquetas que coinciden con lo escrito  -----
    $etiquetas.autocomplete({
        source: etiquetas,
    });
})(jQuery);
