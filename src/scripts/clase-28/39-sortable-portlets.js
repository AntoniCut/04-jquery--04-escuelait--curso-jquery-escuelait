/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  39-sortable-portlets.js  --  /src/scripts/clase-28/39-sortable-portlets.js  -----  *
    *  ----------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  39-sortable-portlets.js  -----');
    console.log('\n');


    /** @type {NodeListOf<HTMLHeadingElement>} - Cabeceras de los paneles */
    const cabeceras = document.querySelectorAll(".portlets__header");

    /** @type {JQuery<HTMLDivElement>} - Columnas que intercambian paneles */
    const $columnas = $(".portlets__column");

    /**
     * ------------------------------------------
     * -----  `prepararCabecera(cabecera)`  -----
     * ------------------------------------------
     * - Añade el botón que pliega el panel.
     * @param {HTMLHeadingElement} cabecera - Cabecera del panel.
     * @return {void}
     */
    const prepararCabecera = (cabecera) => {

        /** - `botón para plegar o desplegar el panel` */
        const boton = document.createElement("button");

        //  -----  evitar que el botón envíe un formulario  -----
        boton.type = "button";

        //  -----  usar el icono de contraer  -----
        boton.className = "ui-icon ui-icon-minusthick portlets__toggle";

        //  -----  describir la acción  -----
        boton.title = "Contraer";

        //  -----  indicar que el panel está abierto  -----
        boton.setAttribute("aria-expanded", "true");

        //  -----  dejar el texto para el lector de pantalla  -----
        boton.textContent = "Contraer";

        //  -----  colocar el botón al principio de la cabecera  -----
        cabecera.prepend(boton);
    };

    /**
     * -------------------------------
     * -----  `alPlegar(event)`  -----
     * -------------------------------
     * - Pliega o despliega el panel de la cabecera.
     * @param {JQuery.TriggeredEvent} event - Click en el botón de la cabecera.
     * @return {void}
     */
    const alPlegar = (event) => {

        //  -----  el botón no hace nada más  -----
        event.preventDefault();

        /** @type {HTMLButtonElement} - Botón de plegar */
        const boton = /** @type {HTMLButtonElement} */ (event.currentTarget);

        /** - `true si el panel está abierto` */
        const abierto = boton.classList.contains("ui-icon-minusthick");

        //  -----  cambiar al icono de expandir si estaba abierto  -----
        boton.classList.toggle("ui-icon-minusthick", !abierto);

        //  -----  cambiar al icono de contraer si estaba cerrado  -----
        boton.classList.toggle("ui-icon-plusthick", abierto);

        //  -----  actualizar la pista del botón  -----
        boton.title = abierto ? "Expandir" : "Contraer";

        //  -----  actualizar el texto del botón  -----
        boton.textContent = abierto ? "Expandir" : "Contraer";

        //  -----  reflejar el estado en el atributo accesible  -----
        boton.setAttribute("aria-expanded", abierto ? "false" : "true");

        /** @type {HTMLElement} - Contenido del panel */
        const contenido = /** @type {HTMLElement} */ (
            boton.closest(".portlets__panel").querySelector(".portlets__content")
        );

        //  -----  ocultar el contenido si el panel estaba abierto  -----
        contenido.hidden = abierto;
    };


    //  -----  añadir el botón de plegar a cada cabecera  -----
    cabeceras.forEach((cabecera) => {

        //  -----  crear el botón de esa cabecera  -----
        prepararCabecera(cabecera);
    });

    //  -----  ordenar los paneles por la cabecera y entre columnas  -----
    $columnas.sortable({
        connectWith: ".portlets__column",
        handle: ".portlets__header",
        cancel: ".portlets__toggle",
        placeholder: "portlets__placeholder ui-corner-all",
    });

    //  -----  plegar o desplegar al pulsar el botón  -----
    $(".portlets__toggle").on("click", alPlegar);

})(jQuery);
