# AGENTS.md

Guía para agentes que editan este curso. Instalación, base de datos y despliegue están en [README.md](./README.md).

SPA de prácticas del curso **jQuery** de EscuelaIT (Miguel Ángel Alvarez), publicada en `/escuelait/curso-jquery-escuelait/`. El origen de verdad es `src/`. Gulp copia y compila a `app/` (desarrollo) y minifica a `dist/` (producción).

## Alcance

- Edita `src/`. `app/` y `dist/` los regenera Gulp (`pnpm run dev` o `pnpm run build`).
- Las demos enseñan **jQuery 4** y **jQuery UI 1.14**. Mantén esa API (`.on()`, widgets, `$(($) => { … })(jQuery)`).
- Añade dependencias npm solo si el usuario lo pide.
- Haz commit solo si el usuario lo pide. Mensaje en español, centrado en el porqué.
- Deja fuera del commit `.env`, `.env.production` y `deploy.sh` (gitignored; credenciales y datos del VPS).
- `workflow/` son notas locales y también está en `.gitignore`.

## Dónde vive un ejercicio

Clases **01–27**: archivos sueltos dentro de `clase-NN/`.

Clases **28 y 29**: una carpeta por sección, y dentro el ejercicio numerado. La numeración vuelve a empezar en cada sección (`01`, `02`, …). Ejemplo, Checkboxradio de la clase 29:

```
src/pages/clase-29/04-checkboxradio/03-checkboxradio-product.html
src/pages-components/clase-29/04-checkboxradio/03-checkboxradio-product-description.html
src/pages-components/clase-29/04-checkboxradio/03-checkboxradio-product-demo.html
src/scripts/clase-29/04-checkboxradio/03-checkboxradio-product.js
src/scss/pages/clase-29/04-checkboxradio/03-checkboxradio-product.scss
src/routes/route-clase29-checkboxradio-product.js
src/components/layout/pages/clase-29/layout-aside-clase-29.html
src/routes/route-manifest.js
```

`src/markdown-shiki/clase-NN/` lo genera Shiki y queda **plano** (sin subcarpetas de sección). `urlOutput` de la ruta apunta a `…/markdown-shiki/clase-NN`.

PHP, JSON o SQL de una demo van en `src/services/clase-NN/`.

## Alta de un ejercicio (clases 28 y 29)

Copia un ejercicio vecino de la misma sección y cambia solo lo de ese widget. Piezas que tienen que coincidir:

1. **Página** (`src/pages/…`). Slots `data-component-page="description"` y `data-component-page="demo"`. Artículos `data-shiki` (`codeHtml`, `codeCss`, `codeJs`; `codePhp` si hay PHP).
2. **Fragmentos** (`*-description.html` y `*-demo.html`) en `src/pages-components/…`.
3. **Script** en `src/scripts/…`, envuelto en `(($) => { … })(jQuery)`.
4. **Estilo** en `src/scss/pages/…`. En la clase 29, `@use '../clase-29-common' as c29;`. La ruta apunta al **CSS compilado** (`app/css/…`), no al `.scss`.
5. **Ruta** `src/routes/route-claseNN-….js`, copiando `paths` de una ruta hermana. `libs` usa el nombre del widget que carga `src/libs/jquery-module/loader/load-jquery-ui-by-import.js`: `tooltip`, `draggable`, `droppable`, `sortable`, `resizable`, `selectable`, `dialog`, `datepicker`, `button`, `checkboxradio`, `controlgroup`, `menu`, `autocomplete`, `accordion`, `progressbar`, `selectmenu`, `slider`, `spinner`, `tabs`, `effects`.
6. **Manifiesto** `src/routes/route-manifest.js`: `{ id, path, file }`. `file` es el nombre del módulo sin `.js`. `id` es el mismo valor que `data-id` del aside.
7. **Aside** `layout-aside-clase-NN.html`: enlace con `data-id` = `id` del manifiesto y `data-route` = `file` (`route-clase29-checkboxradio-product`).

El menú izquierdo del curso está en `src/components/layout/layout-aside-left.html`. La clase 30 sigue marcada como no implementada.

## Títulos

El mismo texto en `pageTitle`, `headerTitle` y los `<h2>` de la página. En las clases 28 y 29 incluye sección y número **dentro de la sección**:

```
Clase 29 - 04. Checkboxradio - 03. Selector de producto
```

En la página, el bloque de la demo añade ` - Demo` y el de código añade ` - Código Markdown`. El `title` del `<h2>` y la etiqueta del aside llevan solo el nombre del ejercicio (`Selector de producto`).

## Código

En cada `.js`, `.html` o `.scss` nuevo o tocado:

- Banner de tres líneas al inicio. Tras `/*` o `<!--`, las tres líneas interiores empiezan con 4 espacios y tienen la misma longitud. La del medio es `*  -----  {archivo}  --  /{ruta-desde-la-raíz}  -----  *`.
- Un comentario en cada instrucción.
- `const` o `let`. Funciones flecha. JSDoc cuando el tipo no se infiere. Tipos de dominio en `types/types.d.js`; DOM extra en `types/global.d.ts`.
- HTML semántico. Contenido nuevo con `document.createElement` y `appendChild`. En un `submit` o un `click` que no deba navegar, `event.preventDefault()`.
- Feedback en el DOM. Las demos del curso pueden usar los diálogos de jQuery UI cuando el ejercicio trata de eso.

Al mover o renombrar un archivo, actualiza su banner.

## Después de editar

Con `pnpm run dev` en marcha, Gulp recompila `src/` → `app/` y regenera Shiki. Si el watch no está activo:

```bash
pnpm run code-highlight
```

Shiki lee las URLs de `MarkdownShikiHtml`, que apuntan a `app/`. El CSS resaltado sale del CSS ya compilado; por eso el highlight de estilos va después de la compilación Sass.

Comprueba la demo en el navegador (puerto `DEV_SERVER_PORT` del `.env`, base `/escuelait/curso-jquery-escuelait/`) y la consola: el widget tiene que arrancar sin errores.
