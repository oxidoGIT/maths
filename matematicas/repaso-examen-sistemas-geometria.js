function diagram(content, viewBox = "0 0 320 180") {
  return `<svg viewBox="${viewBox}" role="img" aria-label="Figura del ejercicio">${content}</svg>`;
}

const topics = [
  {
    rubric: "Punto 1",
    title: "Sistemas: significado y tipos de solución",
    intro: "Comprueba soluciones y distingue sistemas compatibles determinados, compatibles indeterminados e incompatibles.",
    exercises: [
      { title: "¿Qué es la solución?", tag: "Concepto", prompt: "¿Qué significa que (x, y) sea solución de un sistema?", type: "choice", options: ["Cumple al menos una ecuación", "Cumple las dos ecuaciones a la vez", "Hace que x sea igual a y"], answer: "Cumple las dos ecuaciones a la vez", hint: "Una solución debe funcionar en todo el sistema.", explanation: "La pareja solución hace verdaderas simultáneamente todas las ecuaciones del sistema." },
      { title: "Comprueba la pareja", tag: "Sustitución", prompt: "¿Es (3, 2) solución del sistema?", equations: "x + y = 5\n2x − y = 4", type: "choice", options: ["Sí", "No"], answer: "Sí", hint: "Sustituye x = 3 e y = 2 en ambas ecuaciones.", explanation: "3 + 2 = 5 y 2·3 − 2 = 4. Cumple las dos ecuaciones." },
      { title: "Una única solución", tag: "Clasificación", prompt: "Un sistema tiene exactamente una solución. ¿Cómo se clasifica?", type: "choice", options: ["Compatible determinado (SCD)", "Compatible indeterminado (SCI)", "Incompatible (SI)"], answer: "Compatible determinado (SCD)", hint: "Determinado significa que la solución queda fijada.", explanation: "Un sistema compatible determinado tiene una única solución." },
      { title: "Ecuaciones equivalentes", tag: "Clasificación", prompt: "Clasifica este sistema sin dibujarlo.", equations: "x + 2y = 5\n3x + 6y = 15", type: "choice", options: ["SCD", "SCI", "SI"], answer: "SCI", hint: "Compara la segunda ecuación con tres veces la primera.", explanation: "La segunda ecuación es tres veces la primera. Son equivalentes y hay infinitas soluciones: SCI." },
      { title: "Mismos coeficientes, distinto resultado", tag: "Clasificación", prompt: "Clasifica este sistema sin dibujarlo.", equations: "2x − y = 4\n4x − 2y = 11", type: "choice", options: ["SCD", "SCI", "SI"], answer: "SI", hint: "Duplica la primera ecuación y compara los términos independientes.", explanation: "Al duplicar la primera aparece 4x − 2y = 8, no 11. El sistema no tiene solución: SI." },
      { title: "Pareja que sí sirve", tag: "Comprobación", prompt: "¿Es (1, 4) solución del sistema?", equations: "3x + y = 7\nx − y = −3", type: "choice", options: ["Sí", "No"], answer: "Sí", hint: "Comprueba las dos igualdades.", explanation: "3·1 + 4 = 7 y 1 − 4 = −3. Sí es solución." },
      { title: "Infinitas soluciones", tag: "Texto breve", prompt: "Escribe las siglas del sistema compatible indeterminado.", type: "text", accepted: ["sci"], answer: "SCI", hint: "Sus iniciales son S, C e I.", explanation: "SCI significa sistema compatible indeterminado: tiene infinitas soluciones." }
    ]
  },
  {
    rubric: "Punto 2",
    title: "Resolver sistemas algebraicamente",
    intro: "Practica sustitución, igualación y reducción. No se incluye representación gráfica.",
    exercises: [
      { title: "Sustitución directa", tag: "Sustitución", prompt: "Resuelve el sistema.", equations: "x = y + 4\nx + y = 10", type: "labels", labels: ["x", "y"], answer: [7, 3], hint: "Sustituye x por y + 4 en la segunda.", explanation: "y + 4 + y = 10 → y = 3; x = 7." },
      { title: "Despeja primero", tag: "Sustitución", prompt: "Resuelve el sistema.", equations: "x − 2y = 1\n3x + y = 10", type: "labels", labels: ["x", "y"], answer: [3, 1], hint: "Despeja x = 1 + 2y.", explanation: "3(1 + 2y) + y = 10 → 7y = 7 → y = 1; x = 3." },
      { title: "Igualación", tag: "Igualación", prompt: "Resuelve el sistema.", equations: "y = 2x − 1\ny = −x + 8", type: "labels", labels: ["x", "y"], answer: [3, 5], hint: "Iguala las dos expresiones que valen y.", explanation: "2x − 1 = −x + 8 → 3x = 9 → x = 3; y = 5." },
      { title: "Reducción al sumar", tag: "Reducción", prompt: "Resuelve el sistema.", equations: "x + y = 9\nx − y = 1", type: "labels", labels: ["x", "y"], answer: [5, 4], hint: "Suma ambas ecuaciones para eliminar y.", explanation: "2x = 10 → x = 5. Después y = 4." },
      { title: "Reducción con multiplicación", tag: "Reducción", prompt: "Resuelve el sistema.", equations: "2x + 3y = 13\n3x − 2y = 0", type: "labels", labels: ["x", "y"], answer: [2, 3], hint: "Multiplica la primera por 2 y la segunda por 3.", explanation: "4x + 6y = 26 y 9x − 6y = 0. Sumando: 13x = 26 → x = 2; después y = 3." },
      { title: "Elige el método cómodo", tag: "Método", prompt: "¿Qué método resulta más directo cuando una ecuación ya dice x = 3y + 2?", type: "choice", options: ["Sustitución", "Igualación", "Reducción"], answer: "Sustitución", hint: "Ya tienes una incógnita despejada.", explanation: "Sustitución es lo más directo porque x ya está aislada." },
      { title: "Problema de entradas", tag: "Problema", prompt: "3 entradas infantiles y 2 adultas cuestan 31 €. Una infantil y una adulta cuestan 13 €. ¿Cuánto cuesta cada una?", equations: "3i + 2a = 31\ni + a = 13", type: "labels", labels: ["infantil (€)", "adulta (€)"], answer: [5, 8], hint: "Multiplica la segunda ecuación por −2 y suma.", explanation: "i = 5 € y a = 8 €." }
    ]
  },
  {
    rubric: "Punto 4",
    title: "Nombres de polígonos hasta 12 lados",
    intro: "Relaciona el número de lados con el nombre correcto del polígono.",
    exercises: [
      { title: "Cinco lados", tag: "Polígonos", prompt: "¿Cómo se llama un polígono de 5 lados?", type: "text", accepted: ["pentagono"], answer: "Pentágono", hint: "Empieza por penta-.", explanation: "Un polígono de 5 lados es un pentágono." },
      { title: "Cuenta los lados", tag: "Visual", prompt: "¿Cómo se llama esta figura?", visual: diagram('<polygon class="shape shape--soft" points="80,35 240,35 285,90 240,145 80,145 35,90"/>'), type: "choice", options: ["Pentágono", "Hexágono", "Heptágono"], answer: "Hexágono", hint: "Cuenta cada segmento del contorno.", explanation: "Tiene 6 lados: es un hexágono." },
      { title: "Siete lados", tag: "Polígonos", prompt: "¿Cómo se llama un polígono de 7 lados?", type: "text", accepted: ["heptagono"], answer: "Heptágono", hint: "Empieza por hepta-.", explanation: "Un polígono de 7 lados es un heptágono." },
      { title: "Octógono", tag: "Polígonos", prompt: "¿Cuántos lados tiene un octógono?", type: "number", label: "lados", answer: 8, hint: "Octo- significa ocho.", explanation: "Un octógono tiene 8 lados." },
      { title: "Diez lados", tag: "Polígonos", prompt: "¿Cómo se llama un polígono de 10 lados?", type: "choice", options: ["Eneágono", "Decágono", "Dodecágono"], answer: "Decágono", hint: "Deca- significa diez.", explanation: "El polígono de 10 lados es el decágono." },
      { title: "Once lados", tag: "Polígonos", prompt: "Escribe el nombre de un polígono de 11 lados.", type: "text", accepted: ["endecagono", "undecagono"], answer: "Endecágono", hint: "Se acepta endecágono o undecágono.", explanation: "Un polígono de 11 lados se llama endecágono o undecágono." },
      { title: "Dodecágono", tag: "Polígonos", prompt: "¿Cuántos lados tiene un dodecágono?", type: "number", label: "lados", answer: 12, hint: "Dodeca- significa doce.", explanation: "Un dodecágono tiene 12 lados." }
    ]
  },
  {
    rubric: "Punto 5",
    title: "Clasificar triángulos",
    intro: "Clasifica por la longitud de los lados y por la medida de los ángulos.",
    exercises: [
      { title: "Tres lados iguales", tag: "Lados", prompt: "¿Qué tipo de triángulo tiene tres lados iguales?", type: "choice", options: ["Equilátero", "Isósceles", "Escaleno"], answer: "Equilátero", hint: "Equi- indica igualdad.", explanation: "Es un triángulo equilátero." },
      { title: "Dos lados iguales", tag: "Lados", prompt: "¿Qué tipo de triángulo tiene exactamente dos lados iguales?", type: "choice", options: ["Equilátero", "Isósceles", "Escaleno"], answer: "Isósceles", hint: "Es el caso intermedio.", explanation: "Es un triángulo isósceles." },
      { title: "Tres lados distintos", tag: "Lados", prompt: "¿Qué tipo de triángulo tiene todos sus lados distintos?", type: "text", accepted: ["escaleno"], answer: "Escaleno", hint: "Empieza por escala-.", explanation: "Es un triángulo escaleno." },
      { title: "Un ángulo recto", tag: "Ángulos", prompt: "Un triángulo tiene un ángulo de 90°. ¿Cómo se clasifica por sus ángulos?", type: "choice", options: ["Acutángulo", "Rectángulo", "Obtusángulo"], answer: "Rectángulo", hint: "90° es un ángulo recto.", explanation: "Es un triángulo rectángulo." },
      { title: "Un ángulo obtuso", tag: "Ángulos", prompt: "Un triángulo tiene ángulos de 110°, 40° y 30°. ¿Cómo se clasifica?", type: "choice", options: ["Acutángulo", "Rectángulo", "Obtusángulo"], answer: "Obtusángulo", hint: "Busca un ángulo mayor de 90°.", explanation: "Tiene un ángulo de 110°, por tanto es obtusángulo." },
      { title: "Clasificación visual", tag: "Visual", prompt: "Clasifica el triángulo por sus lados.", visual: diagram('<polygon class="shape shape--soft" points="55,145 160,35 265,145"/><text x="82" y="91">8 cm</text><text x="210" y="91">8 cm</text><text x="140" y="168">12 cm</text>'), type: "choice", options: ["Equilátero", "Isósceles", "Escaleno"], answer: "Isósceles", hint: "Compara las tres medidas.", explanation: "Tiene dos lados de 8 cm: es isósceles." },
      { title: "Doble clasificación", tag: "Reto", prompt: "Un triángulo tiene lados 3, 4 y 5, y un ángulo de 90°. Elige su clasificación completa.", type: "choice", options: ["Isósceles rectángulo", "Escaleno rectángulo", "Escaleno acutángulo"], answer: "Escaleno rectángulo", hint: "Clasifica una vez por lados y otra por ángulos.", explanation: "Sus lados son distintos y tiene un ángulo recto: escaleno rectángulo." }
    ]
  },
  {
    rubric: "Punto 6",
    title: "Clasificar cuadriláteros",
    intro: "Distingue cuadriláteros según el paralelismo entre sus lados opuestos.",
    exercises: [
      { title: "Dos pares paralelos", tag: "Familias", prompt: "¿Cómo se llama la familia de cuadriláteros con dos pares de lados opuestos paralelos?", type: "choice", options: ["Paralelogramos", "Trapecios", "Trapezoides"], answer: "Paralelogramos", hint: "Su nombre contiene la palabra paralelo.", explanation: "Son paralelogramos." },
      { title: "Un solo par paralelo", tag: "Familias", prompt: "¿Cómo se llama un cuadrilátero con exactamente un par de lados paralelos?", type: "text", accepted: ["trapecio"], answer: "Trapecio", hint: "Tiene dos bases paralelas.", explanation: "Es un trapecio." },
      { title: "Ningún lado paralelo", tag: "Familias", prompt: "¿Cómo se llama un cuadrilátero sin lados paralelos?", type: "choice", options: ["Romboide", "Trapecio", "Trapezoide"], answer: "Trapezoide", hint: "No es un trapecio.", explanation: "Un trapezoide no tiene lados paralelos." },
      { title: "Cuatro lados y ángulos iguales", tag: "Paralelogramo", prompt: "Tiene cuatro lados iguales y cuatro ángulos rectos. ¿Qué es?", type: "choice", options: ["Cuadrado", "Rombo", "Rectángulo"], answer: "Cuadrado", hint: "Reúne las propiedades del rombo y del rectángulo.", explanation: "Es un cuadrado." },
      { title: "Ángulos rectos", tag: "Paralelogramo", prompt: "Tiene cuatro ángulos rectos, pero no todos sus lados tienen que ser iguales. ¿Qué es?", type: "choice", options: ["Rectángulo", "Rombo", "Romboide"], answer: "Rectángulo", hint: "Fíjate en los ángulos.", explanation: "Es un rectángulo." },
      { title: "Reconoce la figura", tag: "Visual", prompt: "Clasifica el cuadrilátero mostrado.", visual: diagram('<polygon class="shape shape--soft" points="85,45 235,45 285,140 35,140"/><line class="guide" x1="85" y1="45" x2="235" y2="45"/><line class="guide" x1="35" y1="140" x2="285" y2="140"/>'), type: "choice", options: ["Paralelogramo", "Trapecio", "Trapezoide"], answer: "Trapecio", hint: "Solo las bases son paralelas.", explanation: "Tiene un único par de lados paralelos: es un trapecio." },
      { title: "Cuatro lados iguales", tag: "Paralelogramo", prompt: "Tiene cuatro lados iguales y ángulos que no tienen por qué ser rectos. ¿Qué es?", type: "text", accepted: ["rombo"], answer: "Rombo", hint: "No confundas lados iguales con ángulos rectos.", explanation: "Es un rombo." }
    ]
  },
  {
    rubric: "Punto 7",
    title: "Elementos de una circunferencia",
    intro: "Reconoce centro, radio, diámetro, cuerda, arco, semicircunferencia y sector circular.",
    exercises: [
      { title: "Del centro al borde", tag: "Circunferencia", prompt: "¿Cómo se llama el segmento que une el centro con un punto de la circunferencia?", type: "text", accepted: ["radio"], answer: "Radio", hint: "Es la mitad del diámetro.", explanation: "Ese segmento es un radio." },
      { title: "Pasa por el centro", tag: "Circunferencia", prompt: "¿Cómo se llama la cuerda que pasa por el centro?", type: "choice", options: ["Radio", "Diámetro", "Arco"], answer: "Diámetro", hint: "Mide dos radios.", explanation: "La cuerda que pasa por el centro es el diámetro." },
      { title: "Une dos puntos", tag: "Circunferencia", prompt: "¿Cómo se llama un segmento que une dos puntos de la circunferencia?", type: "text", accepted: ["cuerda"], answer: "Cuerda", hint: "El diámetro es un caso especial.", explanation: "Ese segmento es una cuerda." },
      { title: "Parte curva", tag: "Circunferencia", prompt: "¿Cómo se llama una porción de la propia circunferencia entre dos puntos?", type: "choice", options: ["Arco", "Sector", "Radio"], answer: "Arco", hint: "No es un segmento recto.", explanation: "La porción curva es un arco." },
      { title: "Radio y diámetro", tag: "Cálculo", prompt: "Una circunferencia tiene radio 7 cm. ¿Cuánto mide su diámetro?", type: "number", label: "cm", answer: 14, hint: "Multiplica el radio por 2.", explanation: "d = 2r = 14 cm." },
      { title: "Identifica el segmento", tag: "Visual", prompt: "¿Qué elemento está marcado en color discontinuo?", visual: diagram('<circle class="shape shape--soft" cx="160" cy="90" r="70"/><circle cx="160" cy="90" r="5" fill="#285d63"/><line class="guide" x1="160" y1="90" x2="225" y2="64"/><text x="185" y="92">?</text>'), type: "choice", options: ["Radio", "Diámetro", "Cuerda"], answer: "Radio", hint: "Uno de sus extremos está en el centro.", explanation: "Une el centro con la circunferencia: es un radio." },
      { title: "Región entre radios", tag: "Circunferencia", prompt: "¿Cómo se llama la región limitada por dos radios y el arco comprendido entre ellos?", type: "choice", options: ["Sector circular", "Semicircunferencia", "Cuerda"], answer: "Sector circular", hint: "Se parece a una porción de pizza.", explanation: "Esa región es un sector circular." }
    ]
  },
  {
    rubric: "Punto 8",
    title: "Ángulos de polígonos y sistema sexagesimal",
    intro: "Calcula sumas interiores y opera con grados, minutos y segundos.",
    exercises: [
      { title: "Suma de un pentágono", tag: "Ángulos", prompt: "¿Cuánto suman los ángulos interiores de un pentágono?", type: "number", label: "grados", answer: 540, hint: "Usa 180° · (n − 2).", explanation: "180° · (5 − 2) = 540°." },
      { title: "Suma de un decágono", tag: "Ángulos", prompt: "¿Cuánto suman los ángulos interiores de un decágono?", type: "number", label: "grados", answer: 1440, hint: "Un decágono tiene 10 lados.", explanation: "180° · (10 − 2) = 1440°." },
      { title: "Ángulo de hexágono regular", tag: "Ángulos", prompt: "¿Cuánto mide cada ángulo interior de un hexágono regular?", type: "number", label: "grados", answer: 120, hint: "Calcula la suma y divide entre 6.", explanation: "La suma es 720°. 720° ÷ 6 = 120°." },
      { title: "¿Cuántos lados?", tag: "Reto", prompt: "La suma de los ángulos interiores de un polígono es 1260°. ¿Cuántos lados tiene?", type: "number", label: "lados", answer: 9, hint: "Resuelve 180(n − 2) = 1260.", explanation: "n − 2 = 7, así que n = 9." },
      { title: "Suma sexagesimal", tag: "Sexagesimal", prompt: "Suma los dos ángulos.", equations: "28° 45′ 50″\n+ 16° 30′ 25″", type: "labels", labels: ["grados", "minutos", "segundos"], answer: [45, 16, 15], hint: "60 segundos forman 1 minuto y 60 minutos forman 1 grado.", explanation: "50″ + 25″ = 75″ = 1′15″; 45′ + 30′ + 1′ = 76′ = 1°16′. Resultado: 45°16′15″." },
      { title: "Resta sexagesimal", tag: "Sexagesimal", prompt: "Resta los dos ángulos.", equations: "70° 10′ 20″\n− 25° 35′ 45″", type: "labels", labels: ["grados", "minutos", "segundos"], answer: [44, 34, 35], hint: "Pide prestado primero para los segundos y después para los minutos.", explanation: "Resultado: 44°34′35″." },
      { title: "Conversión a segundos", tag: "Sexagesimal", prompt: "¿Cuántos segundos son 2° 5′ 10″?", type: "number", label: "segundos", answer: 7510, hint: "1° = 3600″ y 1′ = 60″.", explanation: "2·3600 + 5·60 + 10 = 7510 segundos." }
    ]
  },
  {
    rubric: "Punto 9",
    title: "Teorema de Pitágoras",
    intro: "Aplica Pitágoras para encontrar lados de triángulos y resolver situaciones geométricas.",
    exercises: [
      { title: "Hipotenusa clásica", tag: "Pitágoras", prompt: "Los catetos miden 6 cm y 8 cm. ¿Cuánto mide la hipotenusa?", type: "number", label: "cm", answer: 10, hint: "Calcula √(6² + 8²).", explanation: "√(36 + 64) = √100 = 10 cm." },
      { title: "Encuentra un cateto", tag: "Pitágoras", prompt: "La hipotenusa mide 13 cm y un cateto 5 cm. ¿Cuánto mide el otro cateto?", type: "number", label: "cm", answer: 12, hint: "Calcula √(13² − 5²).", explanation: "√(169 − 25) = √144 = 12 cm." },
      { title: "Lado mayor", tag: "Concepto", prompt: "¿Qué lado se coloca solo en un miembro de la fórmula de Pitágoras?", type: "choice", options: ["La hipotenusa", "El cateto más corto", "Cualquier lado"], answer: "La hipotenusa", hint: "Es el lado opuesto al ángulo recto.", explanation: "La hipotenusa es el lado mayor y cumple h² = a² + b²." },
      { title: "Diagonal de rectángulo", tag: "Aplicación", prompt: "Un rectángulo mide 9 m por 12 m. ¿Cuánto mide su diagonal?", type: "number", label: "m", answer: 15, hint: "La diagonal es la hipotenusa.", explanation: "√(9² + 12²) = √225 = 15 m." },
      { title: "Sobre la figura", tag: "Visual", prompt: "Calcula la hipotenusa marcada con x.", visual: diagram('<polygon class="shape shape--soft" points="55,145 55,45 275,145"/><path class="right-angle" d="M55 125 H75 V145"/><text x="18" y="100">20 cm</text><text x="145" y="168">21 cm</text><text x="165" y="82">x</text>'), type: "number", label: "cm", answer: 29, hint: "Usa x² = 20² + 21².", explanation: "x = √(400 + 441) = √841 = 29 cm." },
      { title: "¿Es rectángulo?", tag: "Comprobación", prompt: "Un triángulo tiene lados 8, 15 y 17. ¿Es rectángulo?", type: "choice", options: ["Sí", "No"], answer: "Sí", hint: "Comprueba si 8² + 15² = 17².", explanation: "64 + 225 = 289 = 17². Sí es rectángulo." },
      { title: "Escalera", tag: "Problema", prompt: "Una escalera de 10 m llega a una ventana situada a 8 m de altura. ¿A qué distancia está el pie de la pared?", type: "number", label: "m", answer: 6, hint: "La escalera es la hipotenusa.", explanation: "√(10² − 8²) = √36 = 6 m." }
    ]
  },
  {
    rubric: "Punto 10",
    title: "Áreas y descomposición de figuras",
    intro: "Calcula áreas de triángulos, cuadriláteros, polígonos regulares y figuras compuestas.",
    exercises: [
      { title: "Área de triángulo", tag: "Áreas", prompt: "Calcula el área de un triángulo de base 14 cm y altura 9 cm.", type: "number", label: "cm²", answer: 63, hint: "A = base · altura ÷ 2.", explanation: "14 · 9 ÷ 2 = 63 cm²." },
      { title: "Área de paralelogramo", tag: "Áreas", prompt: "Calcula el área de un paralelogramo de base 11 cm y altura 7 cm.", type: "number", label: "cm²", answer: 77, hint: "A = base · altura.", explanation: "11 · 7 = 77 cm²." },
      { title: "Área de rombo", tag: "Áreas", prompt: "Las diagonales de un rombo miden 16 cm y 10 cm. ¿Cuál es su área?", type: "number", label: "cm²", answer: 80, hint: "A = D · d ÷ 2.", explanation: "16 · 10 ÷ 2 = 80 cm²." },
      { title: "Área de trapecio", tag: "Áreas", prompt: "Un trapecio tiene bases de 18 cm y 10 cm, y altura de 6 cm. ¿Cuál es su área?", type: "number", label: "cm²", answer: 84, hint: "A = (B + b) · h ÷ 2.", explanation: "(18 + 10) · 6 ÷ 2 = 84 cm²." },
      { title: "Polígono regular", tag: "Áreas", prompt: "Un polígono regular tiene perímetro 60 cm y apotema 8 cm. ¿Cuál es su área?", type: "number", label: "cm²", answer: 240, hint: "A = perímetro · apotema ÷ 2.", explanation: "60 · 8 ÷ 2 = 240 cm²." },
      { title: "Figura compuesta", tag: "Visual", prompt: "La figura es un rectángulo de 10 m × 5 m más un triángulo de base 10 m y altura 4 m. ¿Cuál es el área total?", visual: diagram('<rect class="shape shape--soft" x="65" y="85" width="190" height="75"/><polygon class="shape" points="65,85 160,30 255,85"/><line class="guide" x1="160" y1="30" x2="160" y2="85"/><text x="135" y="178">10 m</text><text x="20" y="130">5 m</text><text x="170" y="62">4 m</text>'), type: "number", label: "m²", answer: 70, hint: "Suma el área del rectángulo y la del triángulo.", explanation: "Rectángulo: 10·5 = 50. Triángulo: 10·4÷2 = 20. Total: 70 m²." },
      { title: "Área sombreada", tag: "Descomposición", prompt: "Un rectángulo de 12 cm × 8 cm contiene un hueco rectangular de 4 cm × 3 cm. ¿Qué área queda?", equations: "Área grande − área del hueco", type: "number", label: "cm²", answer: 84, hint: "Resta el área pequeña al área grande.", explanation: "12·8 − 4·3 = 96 − 12 = 84 cm²." }
    ]
  }
];

const exercises = topics.flatMap((topic) => topic.exercises.map((exercise) => ({ ...exercise, topic })));
const template = document.querySelector("#exercise-template");
const levels = document.querySelector("#levels");
const done = new Set(JSON.parse(localStorage.getItem("exam-systems-geometry-progress") || "[]"));
const acceptedError = 0.011;

function normalize(value) {
  return String(value).trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, " ");
}

function input(label, text = false) {
  const wrapper = document.createElement("label");
  const field = document.createElement("input");
  field.type = text ? "text" : "text";
  field.inputMode = text ? "text" : "decimal";
  wrapper.append(label, field);
  return wrapper;
}

function createAnswer(exercise) {
  const container = document.createDocumentFragment();
  if (exercise.type === "choice") {
    const select = document.createElement("select");
    select.innerHTML = `<option value="">Selecciona...</option>${exercise.options.map((option) => `<option>${option}</option>`).join("")}`;
    container.append(select);
  } else if (exercise.type === "text") {
    container.append(input("Respuesta", true));
  } else if (exercise.type === "number") {
    container.append(input(exercise.label));
  } else {
    exercise.labels.forEach((label) => container.append(input(label)));
  }
  return container;
}

function valuesFor(card, exercise) {
  if (exercise.type === "choice") return [card.querySelector("select").value];
  return [...card.querySelectorAll("input")].map((field) => field.value.trim());
}

function isCorrect(values, exercise) {
  if (exercise.type === "choice") return values[0] === exercise.answer;
  if (exercise.type === "text") return exercise.accepted.map(normalize).includes(normalize(values[0]));
  const answers = Array.isArray(exercise.answer) ? exercise.answer : [exercise.answer];
  return answers.every((answer, index) => values[index] !== "" && Math.abs(answer - Number(values[index].replace(",", "."))) < acceptedError);
}

function updateProgress() {
  document.querySelector("#progress-label").textContent = `${done.size} de ${exercises.length} ejercicios completados`;
  document.querySelector("#score-label").textContent = `${done.size * 10} puntos`;
  document.querySelector("#progress-bar").style.width = `${done.size / exercises.length * 100}%`;
  localStorage.setItem("exam-systems-geometry-progress", JSON.stringify([...done]));
}

topics.forEach((topic, topicIndex) => {
  const id = `apartado-${topic.rubric.replace(/\D/g, "")}`;
  const link = document.createElement("a");
  link.href = `#${id}`;
  link.innerHTML = `<small>${topic.rubric} · 7 ejercicios</small>${topic.title}`;
  document.querySelector("#topic-links").append(link);

  const section = document.createElement("section");
  section.className = "level";
  section.id = id;
  section.innerHTML = `<p class="eyebrow">${topic.rubric}</p><h2>${topic.title}</h2><p class="level__intro">${topic.intro}</p><div class="exercise-grid"></div>`;
  const grid = section.querySelector(".exercise-grid");

  topic.exercises.forEach((exercise, localIndex) => {
    const index = topics.slice(0, topicIndex).reduce((total, previous) => total + previous.exercises.length, 0) + localIndex;
    const card = template.content.firstElementChild.cloneNode(true);
    card.dataset.index = index;
    card.querySelector(".exercise__number").textContent = `Ejercicio ${String(index + 1).padStart(2, "0")}`;
    card.querySelector(".exercise__tag").textContent = exercise.tag;
    card.querySelector(".exercise__title").textContent = exercise.title;
    card.querySelector(".exercise__prompt").textContent = exercise.prompt;
    card.querySelector(".exercise__visual").innerHTML = exercise.visual || "";
    card.querySelector(".equations").textContent = exercise.equations || "";
    card.querySelector(".answer").append(createAnswer(exercise));
    card.querySelector(".explanation").textContent = exercise.explanation;
    if (done.has(index)) card.classList.add("exercise--done");

    card.querySelector(".check").addEventListener("click", () => {
      const feedback = card.querySelector(".feedback");
      if (isCorrect(valuesFor(card, exercise), exercise)) {
        done.add(index);
        card.classList.add("exercise--done");
        feedback.className = "feedback feedback--ok";
        feedback.textContent = "¡Correcto! Apartado dominado paso a paso.";
        updateProgress();
      } else {
        feedback.className = "feedback feedback--error";
        feedback.textContent = "Todavía no. Revisa la respuesta o pide una pista.";
      }
    });
    card.querySelector(".hint").addEventListener("click", () => {
      const feedback = card.querySelector(".feedback");
      feedback.className = "feedback feedback--hint";
      feedback.textContent = exercise.hint;
    });
    card.querySelector(".solution").addEventListener("click", () => {
      card.querySelector(".explanation").classList.toggle("explanation--visible");
    });
    grid.append(card);
  });
  levels.append(section);
});

document.querySelector("#reset-progress").addEventListener("click", () => {
  if (!confirm("¿Quieres borrar todo el progreso de esta práctica?")) return;
  done.clear();
  localStorage.removeItem("exam-systems-geometry-progress");
  document.querySelectorAll(".exercise--done").forEach((card) => card.classList.remove("exercise--done"));
  document.querySelectorAll(".feedback").forEach((feedback) => {
    feedback.className = "feedback";
    feedback.textContent = "";
  });
  document.querySelectorAll(".explanation--visible").forEach((explanation) => explanation.classList.remove("explanation--visible"));
  document.querySelectorAll("input, select").forEach((field) => { field.value = ""; });
  updateProgress();
});

updateProgress();
