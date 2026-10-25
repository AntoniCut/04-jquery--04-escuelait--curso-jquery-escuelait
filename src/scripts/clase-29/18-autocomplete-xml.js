/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  18-autocomplete-xml.js  --  /src/scripts/clase-29/18-autocomplete-xml.js  -----  *
    *  --------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  18-autocomplete-xml.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** - `xml de etiquetas` */
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
        <etiquetas>
            <etiqueta>Java</etiqueta>
            <etiqueta>JavaScript</etiqueta>
            <etiqueta>PHP</etiqueta>
            <etiqueta>Python</etiqueta>
            <etiqueta>Ruby</etiqueta>
            <etiqueta>Scala</etiqueta>
        </etiquetas>`
    ;

    /** @type {XMLDocument} - `documento interpretado una vez` */
    const documento = new DOMParser().parseFromString(xml, "text/xml");

    /** - `etiquetas extraídas del xml` */
    const etiquetas = [...documento.querySelectorAll("etiqueta")].map((nodo) => nodo.textContent || "");

    /** @type {JQuery<HTMLInputElement>} - `campo de etiquetas` */
    const $etiquetas = $("#etiquetas");

    //  -----  sugerir las etiquetas leídas del xml  -----
    $etiquetas.autocomplete({
        source: etiquetas,
    });
})(jQuery);
