# Migracion de index2eso

Este repositorio aloja la migracion incremental de
`https://sites.google.com/view/index2eso/inicio`.

El estado del recorrido recursivo se conserva en
[`migration/inventory.json`](migration/inventory.json).

## Estado actual

La portada y las cinco paginas indice de asignaturas se han migrado a HTML
estatico. Los materiales alojados en `chatgpt.com` se conservan como enlaces
externos y no se copian.

## Editor visual

Decap CMS esta disponible en [`/admin/`](https://oxidogit.github.io/markel/admin/).
Las asignaturas se guardan como documentos Markdown en [`_subjects`](_subjects)
y se editan con un editor enriquecido. GitHub Pages genera las paginas HTML
automaticamente mediante Jekyll.

El acceso de escritura del CMS requiere conectar un proveedor OAuth compatible
con el backend de GitHub antes del primer inicio de sesion.

## Fuentes educativas

Los PDF escaneados o proporcionados como material educativo se publican en
[`sources/`](sources/) usando la estructura
`sources/<asignatura>/<tema>/<documento>.pdf`. Cada PDF debe estar enlazado
desde la pagina educativa correspondiente.

La politica completa esta en [`sources/README.md`](sources/README.md). Su
cumplimiento se comprueba con:

```sh
python3 scripts/check_sources.py
```
