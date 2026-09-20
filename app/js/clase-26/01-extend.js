/*
    *  ------------------------------------------------------------------  *
    *  -----  01-extend.js  --  /src/scripts/clase-26/01-extend.js  -----  *
    *  ------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


/**
 * @typedef {Object} ExtendDemoObject
 * @property {number} [propiedad1] - Solo esta en el objeto destino.
 * @property {number} propiedad2 - Esta en los dos objetos y se sobreescribe.
 * @property {{ p31?: number, p32?: number, p33?: number }} propiedad3 - Objeto anidado para ver la diferencia entre extend superficial y profundo.
 */


(($) => {


    console.log('\n');
    console.warn('-----  01-extend.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------  *
        *  -----  Referencias al HTML  -----  *
        *  ---------------------------------  *
    */


    /** @type {JQuery<HTMLDivElement>} - `Contenedor de salida de los casos` */
    const $output = /** @type {JQuery<HTMLDivElement>} */ ($('#output'));


    /*
        *  -------------------------  *
        *  -----  Objetos base  -----  *
        *  -------------------------  *
    */


    /** @type {ExtendDemoObject} - `objeto destino del ejemplo` */
    const object1 = {
        propiedad1: 100,
        propiedad2: 250,
        propiedad3: {
            p33: 330
        }
    };

    
    /** @type {ExtendDemoObject} - `objeto origen del ejemplo` */
    const object2 = {
        propiedad2: 200,
        propiedad3: {
            p31: 310,
            p32: 320
        }
    };


    /*
        *  -----------------------  *
        *  -----  Funciones  -----  *
        *  -----------------------  *
    */


    /**
     * -----------------------------------
     * -----  `write(text, objeto)`  -----
     * -----------------------------------
     * - Pinta un titulo y el valor JSON de un dato en el contenedor de salida.
     * @param {string} text - Titulo descriptivo del caso.
     * @param {*} objeto - Valor a serializar y mostrar.
     * @return {void}
     */
    const write = (text, objeto) => {

        /** @type {JQuery<HTMLElement>} - `Bloque de cada caso` */
        const $bloque = /** @type {JQuery<HTMLElement>} */ (
            $('<article>').addClass('extend__case')
        );

        /** @type {JQuery<HTMLHeadingElement>} - `Titulo del caso` */
        const $titulo = /** @type {JQuery<HTMLHeadingElement>} */ (
            $('<h4>').addClass('extend__case-title').text(text)
        );

        /** @type {string} - `JSON del valor a mostrar` */
        const serializado = objeto === undefined
            ? 'undefined'
            : JSON.stringify(objeto, null, 2);

        /** @type {JQuery<HTMLPreElement>} - `Valor serializado` */
        const $valor = /** @type {JQuery<HTMLPreElement>} */ (
            $('<pre>').addClass('extend__case-value').text(serializado)
        );

        $bloque.append($titulo, $valor);
        $output.append($bloque);
    };


    //  -----  vaciar la salida para no duplicar casos al volver a la ruta  -----
    $output.empty();


    /*
        *  ---------------------------------  *
        *  -----  Objetos originales  -----  *
        *  ---------------------------------  *
    */


    write('Objeto 1 original', object1);
    write('Objeto 1 - Propiedad 1', object1.propiedad1);
    write('Objeto 1 - Propiedad 2', object1.propiedad2);
    write('Objeto 1 - Propiedad 3', object1.propiedad3);
    write('Objeto 1 - Propiedad 3 - p33', object1.propiedad3.p33);

    write('Objeto 2 original', object2);
    write('Objeto 2 - Propiedad 2', object2.propiedad2);
    write('Objeto 2 - Propiedad 3', object2.propiedad3);
    write('Objeto 2 - Propiedad 3 - p31', object2.propiedad3.p31);
    write('Objeto 2 - Propiedad 3 - p32', object2.propiedad3.p32);


    /*
        *  ---------------------------------------------------------------  *
        *  -----  Extend superficial sobre copia (no muta origenes)  -----  *
        *  ---------------------------------------------------------------  *
    */


    //  -----  patron tipico de opciones de plugin: destino vacio  -----
    const objectShallow = $.extend({}, object1, object2);

    write('Extend superficial - resultado', objectShallow);
    write('Extend superficial - Propiedad 1 (se conserva)', objectShallow.propiedad1);
    write('Extend superficial - Propiedad 2 (se sobreescribe)', objectShallow.propiedad2);
    write('Extend superficial - Propiedad 3 (objeto anidado sustituido)', objectShallow.propiedad3);
    write('Extend superficial - p31', objectShallow.propiedad3.p31);
    write('Extend superficial - p32', objectShallow.propiedad3.p32);
    write('Extend superficial - p33 (se pierde)', objectShallow.propiedad3.p33);


    /*
        *  -----------------------------------------  *
        *  -----  Extend profundo sobre copia  -----  *
        *  -----------------------------------------  *
    */


    const objectDeep = $.extend(true, {}, object1, object2);

    write('Extend profundo - resultado', objectDeep);
    write('Extend profundo - Propiedad 1 (se conserva)', objectDeep.propiedad1);
    write('Extend profundo - Propiedad 2 (se sobreescribe)', objectDeep.propiedad2);
    write('Extend profundo - Propiedad 3 (objetos anidados fusionados)', objectDeep.propiedad3);
    write('Extend profundo - p31', objectDeep.propiedad3.p31);
    write('Extend profundo - p32', objectDeep.propiedad3.p32);
    write('Extend profundo - p33 (se conserva)', objectDeep.propiedad3.p33);


    /*
        *  ---------------------------------------------------  *
        *  -----  Extend superficial mutando el destino  -----  *
        *  ---------------------------------------------------  *
    */


    $.extend(object1, object2);

    write('Objeto 1 mutado con $.extend(object1, object2)', object1);
    write('Objeto 1 mutado - Propiedad 1', object1.propiedad1);
    write('Objeto 1 mutado - Propiedad 2', object1.propiedad2);
    write('Objeto 1 mutado - Propiedad 3', object1.propiedad3);
    write('Objeto 1 mutado - p31', object1.propiedad3.p31);
    write('Objeto 1 mutado - p32', object1.propiedad3.p32);
    write('Objeto 1 mutado - p33 (se pierde)', object1.propiedad3.p33);
    write('Objeto 2 (no cambia)', object2);


})(jQuery);
