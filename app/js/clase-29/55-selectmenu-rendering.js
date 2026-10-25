/*
    *  ----------------------------------------------------------------------------------------------  *
    *  -----  55-selectmenu-rendering.js  --  /src/scripts/clase-29/55-selectmenu-rendering.js  -----  *
    *  ----------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    //  -----  marcar el arranque de la demo en la consola  -----
    console.log('\n');

    //  -----  identificar el script de la demo  -----
    console.warn('-----  55-selectmenu-rendering.js  -----');

    //  -----  cerrar el aviso de arranque  -----
    console.log('\n');

    /** @type {JQuery<HTMLSelectElement>} - `select con iconos` */
    const $archivo = $("#archivo");

    //  -----  sustituir el select  -----
    $archivo.selectmenu();

    /** @type {JQueryUI.SelectMenuRendering} - `instancia del menú` */
    const instancia = $archivo.selectmenu("instance");
    
    //  -----  pintar un icono delante de cada opción  -----
    instancia._renderItem = (ul, item) => {

        /** @type {HTMLLIElement} - `fila de la opción` */
        const fila = document.createElement("li");

        /** @type {HTMLDivElement} - `icono y texto` */
        const caja = document.createElement("div");

        /** @type {HTMLSpanElement} - `icono de la opción` */
        const icono = document.createElement("span");

        /** @type {HTMLSpanElement} - `nombre del archivo` */
        const texto = document.createElement("span");

        //  -----  juntar icono y texto  -----
        caja.className = "opcion-icono";

        //  -----  aplicar el icono declarado en la opción  -----
        icono.className = `ui-icon ${item.element.attr("data-icono") || ""}`;

        //  -----  escribir el nombre  -----
        texto.textContent = item.label;

        //  -----  montar la fila  -----
        caja.append(icono, texto);

        //  -----  guardar la fila  -----
        fila.append(caja);

        //  -----  marcar la opción desactivada  -----
        if (item.disabled) {

            //  -----  aplicar el estado desactivado  -----
            fila.classList.add("ui-state-disabled");
        }

        //  -----  añadir la fila al menú  -----
        ul[0].append(fila);

        //  -----  devolver la fila como objeto jQuery  -----
        return $(fila);
    };

    //  -----  volver a pintar el menú con los iconos  -----
    $archivo.selectmenu("refresh");
})(jQuery);
