# Fuentes educativas

Todos los PDF escaneados o proporcionados como material educativo deben
guardarse en este directorio y publicarse junto con la web.

## Estructura obligatoria

```text
sources/<asignatura>/<tema>/<documento>.pdf
```

- Los nombres de las carpetas de asignatura y tema usan minusculas, numeros y
  guiones, por ejemplo `sources/socials/edat-mitjana/apunts.pdf`.
- Cada PDF debe estar enlazado desde la pagina HTML o Markdown educativa que lo
  utiliza. Un enlace incluido solamente en este README no cuenta.
- Se debe conservar el PDF original aportado. Se pueden añadir versiones
  derivadas, transcripciones o resumenes, pero no sustituyen al original.
- Los enlaces internos deben respetar la base `/markel`; normalmente es mas
  sencillo usar una ruta relativa desde la pagina educativa.

## Comprobacion

Antes de publicar:

```sh
python3 scripts/check_sources.py
```

La comprobacion falla cuando encuentra un PDF fuera de la estructura
obligatoria, un PDF sin enlace desde una pagina educativa o un enlace a un PDF
local que no existe.
