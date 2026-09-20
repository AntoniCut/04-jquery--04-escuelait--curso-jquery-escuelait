<?php

    /*
        *  ---------------------------------------------------------------  *
        *  -----  enviar.php  --  /src/services/clase-26/enviar.php  -----  *
        *  ---------------------------------------------------------------  *
    */


    header('Content-Type: application/json; charset=utf-8');


    //  -----  datos recibidos por GET o POST  -----
    $nombre = isset($_REQUEST['nombre']) ? trim((string) $_REQUEST['nombre']) : '';
    $email = isset($_REQUEST['email']) ? trim((string) $_REQUEST['email']) : '';


    //  -----  la validación de servidor exige nombre y email  -----
    $ok = $nombre !== '' && $email !== '';

    $mensaje = $ok
        ? 'Recibido: ' . $nombre . ' <' . $email . '>'
        : 'Faltan nombre o email';


    //  -----  enviar la respuesta como JSON  -----
    echo json_encode(
        array(
            'ok' => $ok,
            'mensaje' => $mensaje,
        ),
        JSON_UNESCAPED_UNICODE
    );


?>
