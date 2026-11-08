<?php

    /*
        *  -----------------------------------------------------------------------------------  *
        *  -----  guardar-con-json.php  --  /src/services/clase-30/guardar-con-json.php  -----  *
        *  -----------------------------------------------------------------------------------  *
    */


    //  -----  simular la espera del servidor  -----
    sleep(2);

    //  -----  campos recibidos por get o post  -----
    $nombre = isset($_REQUEST["nombre"]) ? (string) $_REQUEST["nombre"] : "";
    $email = isset($_REQUEST["email"]) ? (string) $_REQUEST["email"] : "";
    $telefono = isset($_REQUEST["telefono"]) ? (string) $_REQUEST["telefono"] : "";
    $direccion = isset($_REQUEST["direccion"]) ? (string) $_REQUEST["direccion"] : "";

    /** @var string[] $errores textos de los campos vacíos */
    $errores = array();

    //  -----  el nombre es obligatorio  -----
    if ($nombre === "") {

        //  -----  anotar el fallo del nombre  -----
        $errores[] = "No has indicado el nombre";
    }

    //  -----  el email es obligatorio  -----
    if ($email === "") {

        //  -----  anotar el fallo del email  -----
        $errores[] = "No has indicado el email";
    }

    //  -----  el teléfono es obligatorio  -----
    if ($telefono === "") {

        //  -----  anotar el fallo del teléfono  -----
        $errores[] = "No has indicado el teléfono";
    }

    //  -----  la dirección es obligatoria  -----
    if ($direccion === "") {

        //  -----  anotar el fallo de la dirección  -----
        $errores[] = "No has indicado la dirección";
    }

    //  -----  sin fallos, la respuesta es válida  -----
    if (count($errores) === 0) {

        //  -----  json de éxito  -----
        $respuesta = array("valido" => true);
    }
    //  -----  con fallos, devolver la lista  -----
    else {

        //  -----  json con los textos  -----
        $respuesta = array("valido" => false, "errores" => $errores);
    }

    //  -----  la respuesta es json  -----
    header("Content-Type: application/json; charset=utf-8");

    //  -----  enviar el json sin escapar los acentos  -----
    echo json_encode($respuesta, JSON_UNESCAPED_UNICODE);

?>
