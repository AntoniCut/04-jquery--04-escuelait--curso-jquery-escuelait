/*
    *  ----------------------------------------------------------------------------------------------------  *
    *  -----  09-autocomplete-categories.js  --  /src/scripts/clase-29/09-autocomplete-categories.js  -----  *
    *  ----------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  09-autocomplete-categories.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /**
     * ------------------------
     * -----  `datos []`  -----
     * ------------------------
     * - `lenguajes y librerías agrupados`
     */
    const datos = [
        { label: "Java", category: "Lenguajes" },
        { label: "JavaScript", category: "Lenguajes" },
        { label: "Python", category: "Lenguajes" },
        { label: "jQuery", category: "Librerías" },
        { label: "jQuery UI", category: "Librerías" },
        { label: "React", category: "Librerías" },
    ];

    /** @type {JQuery<HTMLInputElement>} - `campo de búsqueda` */
    const $buscar = $("#buscar");

    //  -----  sugerir elementos con su categoría  -----
    $buscar.autocomplete({
        source: datos,
    });

    /** @type {JQueryUI.AutocompleteCategories} - `instancia del autocompletado` */
    const instancia = /** @type {JQueryUI.AutocompleteCategories} */ (
        $buscar.autocomplete("instance")
    );

    /**
     * -------------------------------------
     * -----  `pintarMenu(ul, items)`  -----
     * -------------------------------------
     * - Pinta una cabecera cuando cambia la categoría.
     * @param {JQuery<HTMLUListElement>} ul - Lista del menú.
     * @param {JQueryUI.AutocompleteCategoryItem[]} items - Coincidencias filtradas.
     * @return {void}
     */
    const pintarMenu = (ul, items) => {

        /** - `categoría que se está pintando` */
        let categoria = "";

        //  -----  recorrer las coincidencias en orden  -----
        items.forEach((item) => {

            //  -----  si empieza otra categoría, pintar su cabecera  -----
            if (item.category !== categoria) {

                /** @type {HTMLLIElement} - `cabecera de la categoría` */
                const cabecera = document.createElement("li");

                //  -----  marcar la cabecera para que no se pueda elegir  -----
                cabecera.className = "ui-autocomplete-category";

                //  -----  escribir el nombre de la categoría  -----
                cabecera.textContent = item.category;

                //  -----  colocar la cabecera en el menú  -----
                ul[0].append(cabecera);

                //  -----  recordar la categoría actual  -----
                categoria = item.category;
            }

            //  -----  pintar el elemento dentro de su categoría  -----
            instancia._renderItemData(ul, item);
        });
    };

    //  -----  pintar las sugerencias agrupadas  -----
    instancia._renderMenu = pintarMenu;

    //  -----  saltar las cabeceras al moverse con el teclado  -----
    instancia.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
})(jQuery);
