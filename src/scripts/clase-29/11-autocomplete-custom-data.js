/*
    *  ------------------------------------------------------------------------------------------------------  *
    *  -----  11-autocomplete-custom-data.js  --  /src/scripts/clase-29/11-autocomplete-custom-data.js  -----  *
    *  ------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  11-autocomplete-custom-data.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /**
     * ----------------------------
     * -----  `proyectos []`  -----
     * ----------------------------
     * - `proyectos con descripción`
     */
    const proyectos = [
        { label: "jQuery", desc: "Escribe menos y haz más" },
        { label: "jQuery UI", desc: "Interacciones, widgets y efectos" },
        { label: "Sizzle", desc: "Motor de selectores" },
        { label: "QUnit", desc: "Pruebas de JavaScript" },
    ];

    /** @type {JQuery<HTMLInputElement>} - `campo de proyecto` */
    const $proyecto = $("#proyecto");

    //  -----  sugerir los proyectos por su nombre  -----
    $proyecto.autocomplete({
        source: proyectos,
    });

    /** @type {JQueryUI.AutocompleteCustomData} - `instancia del autocompletado` */
    const instancia = /** @type {JQueryUI.AutocompleteCustomData} */ (
        $proyecto.autocomplete("instance")
    );

    //  -----  pintar el nombre y la descripción de cada proyecto  -----
    instancia._renderItem = (ul, item) => {

        /** @type {HTMLLIElement} - `fila de la sugerencia` */
        const fila = document.createElement("li");

        /** @type {HTMLDivElement} - `contenido de la fila` */
        const caja = document.createElement("div");

        /** @type {HTMLElement} - `nombre del proyecto` */
        const titulo = document.createElement("strong");

        /** @type {HTMLSpanElement} - `descripción del proyecto` */
        const detalle = document.createElement("span");

        //  -----  escribir el nombre  -----
        titulo.textContent = item.label;

        //  -----  marcar la descripción  -----
        detalle.className = "proyecto-desc";

        //  -----  escribir la descripción  -----
        detalle.textContent = item.desc;

        //  -----  montar la fila  -----
        caja.append(titulo, detalle);

        //  -----  guardar la fila  -----
        fila.append(caja);

        //  -----  añadir la fila al menú  -----
        ul[0].append(fila);

        //  -----  devolver la fila como objeto jQuery  -----
        return $(fila);
    };
})(jQuery);
