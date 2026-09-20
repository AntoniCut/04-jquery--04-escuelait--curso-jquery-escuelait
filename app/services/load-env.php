<?php

    /*
        *  ---------------------------------------------------------------  *
        *  -----  load-env.php  --  /src/services/load-env.php  -----  *
        *  ---------------------------------------------------------------  *
        *                                                                   *
        *  - Carga un archivo .env desde el directorio del proyecto         *
        *    (subiendo carpetas desde $startDir).                           *
        *  - No sobrescribe variables ya definidas (dev/preview con Node).  *
        *  - En PHP-FPM, getenv()/putenv() pueden no verse entre si:        *
        *    se lee y escribe tambien $_ENV y $_SERVER.                     *
        *                                                                   *
    */

    /**
     * ----------------------------------------
     * -----  `env_get($name, $default)`  -----
     * ----------------------------------------
     * - Lee una variable de entorno desde $_ENV, $_SERVER o getenv.
     * @param string $name
     * @param string|null $default
     * @return string|null
     */
    function env_get(string $name, ?string $default = null): ?string
    {
        if (array_key_exists($name, $_ENV)) {
            return (string) $_ENV[$name];
        }

        if (array_key_exists($name, $_SERVER) && is_string($_SERVER[$name])) {
            return $_SERVER[$name];
        }

        $value = getenv($name);

        if ($value !== false) {
            return $value;
        }

        return $default;
    }


    /**
     * --------------------------------------
     * -----  `env_set($name, $value)`  -----
     * --------------------------------------
     * - Define una variable en putenv, $_ENV y $_SERVER.
     * @param string $name
     * @param string $value
     * @return void
     */
    function env_set(string $name, string $value): void
    {
        if (function_exists('putenv')) {
            @putenv("{$name}={$value}");
        }

        $_ENV[$name] = $value;
        $_SERVER[$name] = $value;
    }


    /**
     * @param string $startDir Directorio desde el que empezar a buscar .env
     */
    function load_dotenv(string $startDir): void
    {
        $dir = $startDir;

        for ($i = 0; $i < 6; $i++) {
            $envFile = $dir . DIRECTORY_SEPARATOR . '.env';

            if (is_file($envFile) && is_readable($envFile)) {
                $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [];

                foreach ($lines as $line) {
                    $line = trim($line);

                    if ($line === '' || str_starts_with($line, '#')) {
                        continue;
                    }

                    if (!str_contains($line, '=')) {
                        continue;
                    }

                    [$name, $value] = explode('=', $line, 2);
                    $name = trim($name);
                    $value = trim($value);

                    if ($name === '') {
                        continue;
                    }

                    if (
                        (str_starts_with($value, '"') && str_ends_with($value, '"'))
                        || (str_starts_with($value, "'") && str_ends_with($value, "'"))
                    ) {
                        $value = substr($value, 1, -1);
                    }

                    if (env_get($name) === null) {
                        env_set($name, $value);
                    }
                }

                return;
            }

            $parent = dirname($dir);

            if ($parent === $dir) {
                break;
            }

            $dir = $parent;
        }
    }
