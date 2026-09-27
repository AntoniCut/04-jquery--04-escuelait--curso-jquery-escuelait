<?php

    /*
        *  ---------------------------------------------------------------  *
        *  -----  enviar.php  --  /src/services/clase-27/enviar.php  -----  *
        *  ---------------------------------------------------------------  *
    */


    $nombre = isset($_POST['nombre']) ? trim((string) $_POST['nombre']) : '';
    $telefono = isset($_POST['telefono']) ? trim((string) $_POST['telefono']) : '';
    $comentario = isset($_POST['comentario']) ? trim((string) $_POST['comentario']) : '';

    $ok = $nombre !== '' && $telefono !== '';

    $mensaje = $ok
        ? 'Todo Ok: ' . $nombre . ' — ' . $telefono
        : 'Algo no ha ido bien';

    $volver = '/escuelait/curso-jquery-escuelait/clase27-tecnicas-desarrollo-plugins-complejos';

    if (isset($_SERVER['HTTP_REFERER'])) {

        $partes = parse_url((string) $_SERVER['HTTP_REFERER']);
        $ruta = isset($partes['path']) ? (string) $partes['path'] : '';

        if (str_contains($ruta, 'clase27-tecnicas-desarrollo-plugins-complejos')) {
            $volver = $ruta;
        }

    }

?>


<!doctype html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/escuelait/curso-jquery-escuelait/assets/favicon/jquery-favicon.ico" type="image/x-icon" />
    <title>Clase 27 - Advanced Validation - Resultado</title>
    <style>
        body {
            margin: 0;
            min-height: 100vh;
            display: grid;
            place-items: center;
            font-family: system-ui, sans-serif;
            background: #f8f9fc;
            color: #1a1a2e;
        }

        main {
            width: min(40rem, calc(100% - 2rem));
            padding: 2rem;
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 10px 40px rgba(102, 126, 234, 0.12);
        }

        h1 {
            margin: 0 0 1rem;
            font-size: 1.6rem;
        }

        p {
            margin: 0 0 1rem;
            line-height: 1.5;
        }

        a {
            color: #4c51bf;
        }
    </style>
</head>

<body>

    <main>
        <h1><?php echo htmlspecialchars($mensaje, ENT_QUOTES, 'UTF-8'); ?></h1>

        <?php if ($comentario !== '') { ?>
            <p>Comentario: <?php echo htmlspecialchars($comentario, ENT_QUOTES, 'UTF-8'); ?></p>
        <?php } ?>

        <p><a href="<?php echo htmlspecialchars($volver, ENT_QUOTES, 'UTF-8'); ?>">Volver al ejercicio</a></p>
    </main>

</body>

</html>
