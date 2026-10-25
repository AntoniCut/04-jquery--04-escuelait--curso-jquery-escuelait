/*
    *  --------------------------------------------------------------------------------------------------------------  *
    *  -----  13-autocomplete-multiple-remote.js  --  /src/scripts/clase-29/13-autocomplete-multiple-remote.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  13-autocomplete-multiple-remote.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** - `ciudades para la búsqueda` */
    const ciudades = [
        "Madrid",
        "Barcelona",
        "Valencia",
        "Sevilla",
        "Zaragoza",
        "Málaga",
        "Murcia",
        "Palma",
        "Bilbao",
        "Alicante",
        "Córdoba",
        "Valladolid",
        "Vigo",
        "Gijón",
        "Granada",
        "A Coruña",
        "Vitoria",
        "Oviedo",
        "Salamanca",
        "Santander",
        "Logroño",
        "Pamplona",
        "Donostia",
        "Toledo",
    ];

    /** @type {JQuery<HTMLInputElement>} - `campo de varias ciudades` */
    const $ciudades = $("#ciudades");

    /** @type {JQuery<HTMLParagraphElement>} - `aviso de la búsqueda` */
    const $estado = $("#estado");

    /**
     * -----------------------------
     * -----  `partir(valor)`  -----
     * -----------------------------
     * - Separa las ciudades escritas por comas.
     * @param {string} valor - Texto del campo.
     * @return {string[]}
     */
    const partir = (valor) => {

        //  -----  separar por comas y espacios  -----
        return valor.split(/,\s*/);
    };

    /**
     * ---------------------------------------------
     * -----  `alBuscar(peticion, responder)`  -----
     * ---------------------------------------------
     * - Busca el último fragmento y responde tras una espera.
     * @param {{ term: string }} peticion - Texto del campo.
     * @param {(coincidencias: string[]) => void} responder - Recibe las coincidencias.
     * @return {void}
     */
    const alBuscar = (peticion, responder) => {

        /** - `fragmento que se está escribiendo` */
        const termino = partir(peticion.term).pop() || "";

        /** - `fragmento en minúsculas` */
        const filtro = termino.toLowerCase();

        //  -----  si el fragmento está vacío, no buscar  -----
        if (!filtro) {

            //  -----  vaciar la lista  -----
            responder([]);

            //  -----  no lanzar la espera  -----
            return;
        }

        //  -----  avisar de que la búsqueda está en curso  -----
        $estado.text("Buscando…");

        //  -----  imitar la espera de un origen remoto  -----
        window.setTimeout(() => {

            //  -----  publicar las ciudades que coinciden  -----
            responder(ciudades.filter((ciudad) => ciudad.toLowerCase().includes(filtro)));

            //  -----  quitar el aviso de búsqueda  -----
            $estado.text("Escribe otra ciudad tras la coma.");
        }, 300);
    };

    /**
     * ------------------------------------
     * -----  `alElegir(evento, ui)`  -----
     * ------------------------------------
     * - Sustituye el último fragmento por la ciudad elegida.
     * @param {Event} evento - Elección en la lista.
     * @param {JQueryUI.AutocompleteUIParams} ui - Ciudad elegida.
     * @return {boolean}
     */
    const alElegir = (evento, ui) => {

        //  -----  no dejar el valor por defecto del autocompletado  -----
        evento.preventDefault();

        /** - `ciudades ya escritas` */
        const partes = partir(String($ciudades.val()));

        //  -----  quitar el fragmento incompleto  -----
        partes.pop();

        //  -----  añadir la ciudad elegida  -----
        partes.push(ui.item.value);

        //  -----  dejar una coma lista para la siguiente  -----
        partes.push("");

        //  -----  volver a componer el campo  -----
        $ciudades.val(partes.join(", "));

        //  -----  indicar que el valor ya está escrito  -----
        return false;
    };

    //  -----  completar ciudades separadas por comas  -----
    $ciudades.autocomplete({
        minLength: 2,
        source: alBuscar,
        focus: () => false,
        select: alElegir,
    });
})(jQuery);
