# Migracion de index2eso

Este repositorio aloja la migracion incremental de
`https://sites.google.com/view/index2eso/inicio`.

El estado del recorrido recursivo se conserva en
[`migration/inventory.json`](migration/inventory.json).

## Estado actual

La portada y las cinco paginas indice de asignaturas se han migrado a HTML
estatico. Los materiales alojados en `chatgpt.com` se conservan como enlaces
externos y no se copian.

## Edicion visual

El contenido publico se gestiona desde [`content.json`](content.json). El panel
visual esta disponible en [`admin/index.html`](admin/index.html): guarda un
borrador local en el navegador y permite exportar un nuevo `content.json` sin
almacenar credenciales de GitHub en la web.
