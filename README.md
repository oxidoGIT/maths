# Migracion de index2eso

Este repositorio aloja la migracion incremental de
`https://sites.google.com/view/index2eso/inicio`.

El estado del recorrido recursivo se conserva en
[`migration/inventory.json`](migration/inventory.json). Las paginas indice
internas de Google Sites se migran a HTML estatico por lotes pequenos. Los
destinos externos, incluidas las rutas de `chatgpt.com`, se conservan como
enlaces y no se copian.

## Estado actual

La URL raiz aun no se ha podido inspeccionar porque el acceso a
`sites.google.com` esta bloqueado en el entorno de ejecucion. No se han
generado paginas HTML locales.
