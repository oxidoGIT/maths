const sections = [
  {
    title: "Cálculo de energía mecánica",
    intro: "Ejercicios con Ep, Ec, Em y despejes. En los cálculos se acepta g = 9,8 m/s² con margen de redondeo.",
    exercises: [
      {
        tag: "Ec",
        title: "Objeto en movimiento",
        statement: "Un objeto de 2 kg se mueve a 3 m/s. Calcula su energía cinética.",
        type: "number",
        expected: [9],
        tolerance: 0.03,
        hint: "Usa Ec = 1/2 · m · v². La velocidad se eleva al cuadrado.",
        solution: "Ec = 1/2 · 2 · 3² = 9 J.",
      },
      {
        tag: "Ep",
        title: "Pelota en altura",
        statement: "Una pelota de 1,5 kg está a 2 m de altura. Calcula su energía potencial.",
        type: "number",
        expected: [29.4],
        tolerance: 0.04,
        hint: "Usa Ep = m · g · h.",
        solution: "Ep = 1,5 · 9,8 · 2 = 29,4 J. Con g = 10 saldría 30 J.",
      },
      {
        tag: "Ec",
        title: "Coche",
        statement: "Un coche de 1000 kg va a 10 m/s. Calcula su energía cinética.",
        type: "number",
        expected: [50000],
        tolerance: 0.03,
        hint: "La mitad de 1000 es 500, y 10² = 100.",
        solution: "Ec = 1/2 · 1000 · 10² = 50.000 J.",
      },
      {
        tag: "Ep",
        title: "Libro en una estantería",
        statement: "Un libro de 0,5 kg está a 1,2 m de altura. Calcula su energía potencial.",
        type: "number",
        expected: [5.88],
        tolerance: 0.05,
        hint: "Multiplica masa, gravedad y altura.",
        solution: "Ep = 0,5 · 9,8 · 1,2 = 5,88 J. Redondeando g = 10, Ep = 6 J.",
      },
      {
        tag: "Em",
        title: "Caja que se mueve en alto",
        statement: "Una caja de 4 kg está a 5 m de altura y se mueve a 3 m/s. Calcula su energía mecánica total.",
        type: "number",
        expected: [214],
        tolerance: 0.04,
        hint: "Calcula Ep y Ec por separado, luego suma.",
        solution: "Ep = 4 · 9,8 · 5 = 196 J. Ec = 1/2 · 4 · 3² = 18 J. Em = 214 J.",
      },
      {
        tag: "Despeje",
        title: "Velocidad a partir de Ec",
        statement: "Un cuerpo de 2 kg tiene 64 J de energía cinética. Calcula su velocidad.",
        type: "number",
        expected: [8],
        tolerance: 0.03,
        hint: "Despeja v: v = √(2 · Ec / m).",
        solution: "v = √(2 · 64 / 2) = √64 = 8 m/s.",
      },
      {
        tag: "Despeje",
        title: "Altura a partir de Ep",
        statement: "Un objeto de 3 kg tiene 294 J de energía potencial. Calcula la altura a la que está.",
        type: "number",
        expected: [10],
        tolerance: 0.04,
        hint: "Despeja h: h = Ep / (m · g).",
        solution: "h = 294 / (3 · 9,8) = 10 m.",
      },
      {
        tag: "Ec",
        title: "Piedra en movimiento",
        statement: "Una piedra de 3 kg se mueve a 2 m/s. Calcula su energía cinética.",
        type: "number",
        expected: [6],
        tolerance: 0.03,
        hint: "Usa Ec = 1/2 · m · v².",
        solution: "Ec = 1/2 · 3 · 2² = 1,5 · 4 = 6 J.",
      },
      {
        tag: "Ec",
        title: "Ciclista",
        statement: "Un ciclista de 70 kg baja a 5 m/s. Calcula su energía cinética.",
        type: "number",
        expected: [875],
        tolerance: 0.03,
        hint: "Primero calcula 5².",
        solution: "Ec = 1/2 · 70 · 5² = 35 · 25 = 875 J.",
      },
      {
        tag: "Ep",
        title: "Mochila elevada",
        statement: "Una mochila de 4 kg está a 1,5 m de altura. Calcula su energía potencial.",
        type: "number",
        expected: [58.8],
        tolerance: 0.05,
        hint: "Usa Ep = m · g · h.",
        solution: "Ep = 4 · 9,8 · 1,5 = 58,8 J. Con g = 10 saldría 60 J.",
      },
      {
        tag: "Ep",
        title: "Niño en un tobogán",
        statement: "Un niño de 30 kg está en un tobogán a 2 m de altura. Calcula su energía potencial.",
        type: "number",
        expected: [588],
        tolerance: 0.05,
        hint: "Multiplica masa, gravedad y altura.",
        solution: "Ep = 30 · 9,8 · 2 = 588 J. Con g = 10 saldría 600 J.",
      },
      {
        tag: "Ec",
        title: "Pelota rápida",
        statement: "Una pelota de 0,2 kg se mueve a 8 m/s. Calcula su energía cinética.",
        type: "number",
        expected: [6.4],
        tolerance: 0.04,
        hint: "Recuerda que 8² = 64.",
        solution: "Ec = 1/2 · 0,2 · 8² = 0,1 · 64 = 6,4 J.",
      },
      {
        tag: "Ep",
        title: "Caja en una altura",
        statement: "Una caja de 10 kg está a 3 m de altura. Calcula su energía potencial.",
        type: "number",
        expected: [294],
        tolerance: 0.05,
        hint: "Usa Ep = m · g · h.",
        solution: "Ep = 10 · 9,8 · 3 = 294 J. Con g = 10 saldría 300 J.",
      },
      {
        tag: "Em",
        title: "Balón con altura y movimiento",
        statement: "Un balón de 1 kg está a 4 m de altura y se mueve a 6 m/s. Calcula su energía mecánica.",
        type: "number",
        expected: [57.2],
        tolerance: 0.04,
        hint: "Calcula Ep y Ec; después suma.",
        solution: "Ep = 1 · 9,8 · 4 = 39,2 J. Ec = 1/2 · 1 · 6² = 18 J. Em = 57,2 J.",
      },
      {
        tag: "Em",
        title: "Patinete",
        statement: "Un patinete de 12 kg está a 0,5 m de altura y va a 4 m/s. Calcula su energía mecánica.",
        type: "number",
        expected: [154.8],
        tolerance: 0.04,
        hint: "Suma Ep = m · g · h y Ec = 1/2 · m · v².",
        solution: "Ep = 12 · 9,8 · 0,5 = 58,8 J. Ec = 1/2 · 12 · 4² = 96 J. Em = 154,8 J.",
      },
      {
        tag: "Despeje",
        title: "Velocidad de una pelota",
        statement: "Una pelota de 0,5 kg tiene 25 J de energía cinética. Calcula su velocidad.",
        type: "number",
        expected: [10],
        tolerance: 0.03,
        hint: "Usa v = √(2 · Ec / m).",
        solution: "v = √(2 · 25 / 0,5) = √100 = 10 m/s.",
      },
      {
        tag: "Despeje",
        title: "Velocidad de una caja",
        statement: "Una caja de 8 kg tiene 100 J de energía cinética. Calcula su velocidad.",
        type: "number",
        expected: [5],
        tolerance: 0.03,
        hint: "Sustituye en v = √(2 · Ec / m).",
        solution: "v = √(2 · 100 / 8) = √25 = 5 m/s.",
      },
      {
        tag: "Despeje",
        title: "Altura de una maleta",
        statement: "Una maleta de 5 kg tiene 98 J de energía potencial. Calcula su altura.",
        type: "number",
        expected: [2],
        tolerance: 0.04,
        hint: "Usa h = Ep / (m · g).",
        solution: "h = 98 / (5 · 9,8) = 98 / 49 = 2 m.",
      },
      {
        tag: "Despeje",
        title: "Altura de una pesa",
        statement: "Una pesa de 20 kg tiene 392 J de energía potencial. Calcula a qué altura está.",
        type: "number",
        expected: [2],
        tolerance: 0.04,
        hint: "Divide la energía potencial entre m · g.",
        solution: "h = 392 / (20 · 9,8) = 392 / 196 = 2 m.",
      },
      {
        tag: "Em",
        title: "Carrito en movimiento",
        statement: "Un carrito de 6 kg está a 2 m de altura y se mueve a 5 m/s. Calcula su energía mecánica.",
        type: "number",
        expected: [192.6],
        tolerance: 0.04,
        hint: "Calcula Ep y Ec por separado.",
        solution: "Ep = 6 · 9,8 · 2 = 117,6 J. Ec = 1/2 · 6 · 5² = 75 J. Em = 192,6 J.",
      },
    ],
  },
  {
    title: "Escalas térmicas y temperatura",
    intro: "Conversiones y límites físicos. Recuerda que Kelvin y Celsius tienen el mismo tamaño de grado, pero Kelvin empieza en el cero absoluto.",
    exercises: [
      {
        tag: "K",
        title: "Celsius a Kelvin",
        statement: "Transforma 50 ºC a Kelvin.",
        type: "number",
        expected: [323.15],
        tolerance: 0.015,
        hint: "Suma 273,15.",
        solution: "K = 50 + 273,15 = 323,15 K.",
      },
      {
        tag: "ºC y ºF",
        title: "Kelvin a Celsius y Fahrenheit",
        statement: "Transforma 298 K a ºC y ºF. Escribe los dos resultados.",
        type: "number",
        expected: [24.85, 76.73],
        tolerance: 0.05,
        hint: "Primero pasa de K a ºC. Luego usa ºF = ºC · 9/5 + 32.",
        solution: "ºC = 298 - 273,15 = 24,85 ºC. ºF = 24,85 · 9/5 + 32 = 76,73 ºF.",
      },
      {
        tag: "ºF",
        title: "Celsius a Fahrenheit",
        statement: "Transforma 20 ºC a ºF.",
        type: "number",
        expected: [68],
        tolerance: 0.02,
        hint: "Multiplica por 9/5 y suma 32.",
        solution: "ºF = 20 · 9/5 + 32 = 68 ºF.",
      },
      {
        tag: "ºC",
        title: "Fahrenheit a Celsius",
        statement: "Transforma 32 ºF a ºC.",
        type: "number",
        expected: [0],
        tolerance: 0.02,
        hint: "Resta 32 y multiplica por 5/9.",
        solution: "ºC = (32 - 32) · 5/9 = 0 ºC.",
      },
      {
        tag: "0 K",
        title: "Temperatura imposible",
        statement: "¿Es posible una temperatura de -285 ºC?",
        type: "choice",
        options: [
          "Sí, porque en Celsius se puede bajar sin límite.",
          "No, porque está por debajo del cero absoluto.",
          "Sí, pero solo en gases.",
          "No, porque todas las temperaturas negativas son imposibles.",
        ],
        answer: 1,
        hint: "El cero absoluto equivale a -273,15 ºC.",
        solution: "No es posible: -285 ºC está por debajo de -273,15 ºC, que corresponde a 0 K.",
      },
      {
        tag: "Escalas",
        title: "Escalas centígradas",
        statement: "¿Qué escalas tienen intervalos centígrados, es decir, 100 intervalos entre congelación y ebullición del agua?",
        type: "choice",
        options: [
          "Celsius y Kelvin.",
          "Celsius y Fahrenheit.",
          "Fahrenheit y Kelvin.",
          "Solo Fahrenheit.",
        ],
        answer: 0,
        hint: "En Celsius el agua va de 0 a 100; en Kelvin va de 273,15 a 373,15.",
        solution: "Celsius y Kelvin tienen el mismo tamaño de intervalo. Fahrenheit va de 32 a 212, con 180 intervalos.",
      },
      {
        tag: "Termómetro",
        title: "Graduación de termómetros",
        statement: "¿Cómo se gradúan normalmente los termómetros en estas escalas?",
        type: "choice",
        options: [
          "Tomando puntos de referencia, como congelación y ebullición del agua.",
          "Midiendo la masa del termómetro.",
          "Usando solo la sensación térmica de la piel.",
          "Dividiendo cualquier temperatura en 10 partes iguales.",
        ],
        answer: 0,
        hint: "La ficha pregunta por las escalas y sus puntos de referencia.",
        solution: "Se gradúan con puntos fijos conocidos: por ejemplo, el agua se congela a 0 ºC y hierve a 100 ºC.",
      },
      {
        tag: "Partículas",
        title: "Agitación térmica",
        statement: "¿Dónde se mueven más rápido las partículas?",
        type: "choice",
        options: [
          "En un cubito de hielo antes que en agua hirviendo.",
          "En aire de un congelador antes que en aire junto a una llama.",
          "En oro fundido antes que en un anillo de oro a temperatura ambiente.",
          "Siempre se mueven igual si es la misma sustancia.",
        ],
        answer: 2,
        hint: "Mayor temperatura significa mayor agitación media de partículas.",
        solution: "En el oro fundido las partículas tienen más agitación que en un anillo de oro frío o templado.",
      },
    ],
  },
  {
    title: "Calor, temperatura y efectos del calor",
    intro: "Preguntas de concepto: qué se transfiere, qué mide cada magnitud y qué le ocurre a la materia al calentarse o enfriarse.",
    exercises: [
      {
        tag: "Concepto",
        title: "Calor frente a temperatura",
        statement: "Elige la afirmación correcta.",
        type: "choice",
        options: [
          "El calor mide la agitación de las partículas de un cuerpo.",
          "La temperatura es energía que pasa de un cuerpo a otro.",
          "El calor es energía térmica en tránsito entre cuerpos a distinta temperatura.",
          "Calor y temperatura son exactamente lo mismo.",
        ],
        answer: 2,
        hint: "El calor aparece cuando hay transferencia.",
        solution: "La temperatura mide el nivel térmico; el calor es energía térmica que se transfiere.",
      },
      {
        tag: "Caloría",
        title: "Definición de caloría",
        statement: "¿Cuál es la definición correcta de caloría que aparece en las fichas?",
        type: "choice",
        options: [
          "Cantidad de calor necesaria para aumentar 1 ºC la temperatura de 1 g de agua.",
          "Cantidad de frío que contiene un cuerpo.",
          "Unidad que mide la altura de un cuerpo.",
          "Energía cinética de un objeto en movimiento.",
        ],
        answer: 0,
        hint: "La definición se refiere a 1 gramo de agua y a 1 grado de temperatura.",
        solution: "Una caloría es la cantidad de calor que hay que suministrar a 1 g de agua para elevar su temperatura 1 ºC.",
      },
      {
        tag: "Calor específico",
        title: "Facilidad para calentarse",
        statement: "En este temario, ¿qué idea resume mejor el calor específico?",
        type: "choice",
        options: [
          "La facilidad o dificultad con la que una sustancia gana o pierde calor.",
          "La velocidad de un cuerpo al caer.",
          "El paso directo de sólido a gas.",
          "La energía total de un cuerpo por altura y movimiento.",
        ],
        answer: 0,
        hint: "En los apuntes aparece como una idea cualitativa, no como una fórmula para calcular.",
        solution: "El calor específico indica si una sustancia cambia de temperatura con más o menos facilidad al ganar o perder calor.",
      },
      {
        tag: "Dirección",
        title: "Bebida con hielo",
        statement: "Al enfriar una bebida con cubitos de hielo, ¿qué ocurre realmente?",
        type: "choice",
        options: [
          "El frío pasa del hielo a la bebida.",
          "El calor pasa de la bebida al hielo.",
          "El hielo cede calor a la bebida.",
          "No hay transferencia de energía.",
        ],
        answer: 1,
        hint: "La energía térmica fluye del cuerpo más caliente al más frío.",
        solution: "Se transfiere calor desde la bebida al hielo. Por eso la bebida se enfría y el hielo se derrite.",
      },
      {
        tag: "Equilibrio",
        title: "Sopa en una habitación",
        statement: "Un plato de sopa caliente se deja muchas horas en una habitación cerrada. ¿Qué ocurrirá?",
        type: "choice",
        options: [
          "La sopa y el aire tenderán a alcanzar la misma temperatura.",
          "La sopa quedará siempre más caliente que el aire.",
          "El aire cederá frío a la sopa hasta congelarla.",
          "La temperatura no cambia porque la habitación está cerrada.",
        ],
        answer: 0,
        hint: "Piensa en el equilibrio térmico.",
        solution: "La sopa cede calor al aire hasta acercarse al equilibrio térmico con la habitación.",
      },
      {
        tag: "Sensación",
        title: "Sensación térmica",
        statement: "Tocas una mesa de metal y una de madera en la misma habitación. El metal parece más frío. ¿Por qué?",
        type: "choice",
        options: [
          "Porque el metal está siempre a menor temperatura.",
          "Porque el metal conduce mejor el calor y extrae energía de la mano más rápido.",
          "Porque la madera no tiene temperatura.",
          "Porque la piel solo detecta materiales metálicos.",
        ],
        answer: 1,
        hint: "La sensación depende de la velocidad con la que se transfiere calor.",
        solution: "Aunque estén a la misma temperatura, el metal conduce mejor el calor y enfría la piel más rápido.",
      },
      {
        tag: "Dilatación",
        title: "Sólido calentado",
        statement: "¿Qué suele ocurrir cuando se aporta calor a un cuerpo sólido?",
        type: "choice",
        options: [
          "Sus partículas se agitan más y normalmente se dilata.",
          "Sus partículas desaparecen.",
          "Siempre se convierte inmediatamente en gas.",
          "Su volumen siempre disminuye.",
        ],
        answer: 0,
        hint: "Calentar suele aumentar la agitación de las partículas.",
        solution: "Al aumentar la agitación, las partículas tienden a separarse más y el sólido se dilata.",
      },
      {
        tag: "Contracción",
        title: "Gas que cede calor",
        statement: "Si un gas cede calor y se enfría, ¿qué puede ocurrir con su volumen si la presión se mantiene aproximadamente constante?",
        type: "choice",
        options: [
          "Puede disminuir: se contrae.",
          "Siempre aumenta.",
          "Se convierte obligatoriamente en sólido.",
          "Sus partículas empiezan a moverse más rápido.",
        ],
        answer: 0,
        hint: "Menos temperatura implica menos agitación.",
        solution: "Al enfriarse, las partículas se agitan menos y el gas puede contraerse.",
      },
      {
        tag: "Cambio",
        title: "Huevo en agua hirviendo",
        statement: "Al introducir un huevo en agua hirviendo se cocina. ¿Qué tipo de cambio representa?",
        type: "choice",
        options: [
          "Un cambio reversible de estado.",
          "Un cambio químico irreversible provocado por transferencia de calor.",
          "Una sublimación.",
          "Una simple contracción sin transferencia de calor.",
        ],
        answer: 1,
        hint: "El huevo cocido no vuelve a ser crudo al enfriarse.",
        solution: "Hay transferencia de calor y se produce un cambio irreversible en sus sustancias.",
      },
      {
        tag: "Estado",
        title: "Evaporación",
        statement: "¿Qué cambio de estado ocurre cuando un líquido pasa a gas?",
        type: "choice",
        options: ["Condensación.", "Solidificación.", "Vaporización o evaporación.", "Sublimación inversa."],
        answer: 2,
        hint: "Pasa de líquido a gaseoso.",
        solution: "El paso de líquido a gas se llama vaporización; si ocurre en la superficie, evaporación.",
      },
      {
        tag: "Estado",
        title: "Condensación",
        statement: "¿Qué cambio de estado ocurre cuando un gas pasa a líquido?",
        type: "choice",
        options: ["Fusión.", "Condensación.", "Sublimación.", "Solidificación."],
        answer: 1,
        hint: "Es lo que ocurre cuando el vapor de agua forma gotitas.",
        solution: "El paso de gas a líquido se llama condensación.",
      },
    ],
  },
  {
    title: "Propagación del calor",
    intro: "Identifica conducción, convección y radiación en situaciones parecidas a las fichas.",
    exercises: [
      {
        tag: "Sol",
        title: "Calor del Sol",
        statement: "¿Cómo llega el calor del Sol a la Tierra si entre ambos hay espacio casi vacío?",
        type: "choice",
        options: ["Conducción.", "Convección.", "Radiación.", "Dilatación."],
        answer: 2,
        hint: "No hay materia suficiente para conducción ni convección.",
        solution: "Llega por radiación, que no necesita medio material.",
      },
      {
        tag: "Metal",
        title: "Barra metálica",
        statement: "El calor se transmite a lo largo de una barra de metal. ¿Qué mecanismo predomina?",
        type: "choice",
        options: ["Conducción.", "Convección.", "Radiación.", "Evaporación."],
        answer: 0,
        hint: "Es un sólido y hay contacto entre partículas.",
        solution: "Predomina la conducción, típica de sólidos y especialmente de metales.",
      },
      {
        tag: "Radiador",
        title: "Habitación con radiador",
        statement: "Un radiador calienta el aire de una habitación. ¿Qué mecanismo explica que el aire caliente ascienda y se reparta?",
        type: "choice",
        options: ["Conducción.", "Convección.", "Condensación.", "Sublimación."],
        answer: 1,
        hint: "En gases y líquidos puede moverse materia.",
        solution: "Es convección: el aire caliente asciende y el frío desciende, formando corrientes.",
      },
      {
        tag: "Vela",
        title: "Vela encendida",
        statement: "Sobre una vela, el aire está más caliente que en los laterales. ¿Por qué?",
        type: "choice",
        options: [
          "Porque el aire caliente asciende por convección.",
          "Porque el calor solo se mueve hacia abajo.",
          "Porque la llama absorbe el aire frío.",
          "Porque no hay transferencia de calor.",
        ],
        answer: 0,
        hint: "El aire caliente tiene menor densidad y sube.",
        solution: "El aire calentado por la llama asciende; por eso arriba se nota más calor.",
      },
      {
        tag: "Imagen",
        title: "Cámara térmica",
        statement: "Una cámara termográfica detecta una persona por la energía que emite su cuerpo. ¿Qué mecanismo está implicado?",
        type: "choice",
        options: ["Conducción.", "Convección.", "Radiación.", "Fusión."],
        answer: 2,
        hint: "Todos los cuerpos emiten radiación térmica.",
        solution: "La imagen se obtiene gracias a la radiación térmica emitida por el cuerpo.",
      },
      {
        tag: "Materia",
        title: "Transporte de materia",
        statement: "¿En qué mecanismo de transferencia del calor se transportan materia y energía térmica a la vez?",
        type: "choice",
        options: ["Conducción.", "Convección.", "Radiación.", "Equilibrio térmico."],
        answer: 1,
        hint: "El fluido se mueve.",
        solution: "En la convección se desplaza el fluido, por tanto se transporta materia.",
      },
      {
        tag: "Brisa",
        title: "Brisas marinas",
        statement: "La circulación de brisas marinas de día y de noche está relacionada sobre todo con...",
        type: "choice",
        options: ["Convección del aire.", "Sublimación del agua.", "Conducción del suelo.", "Contracción de los metales."],
        answer: 0,
        hint: "Se forman corrientes de aire por diferencias de temperatura.",
        solution: "Las brisas son corrientes de convección producidas por calentamientos distintos de tierra y mar.",
      },
      {
        tag: "Verdadero",
        title: "Radiación",
        statement: "Señala la afirmación correcta sobre la radiación.",
        type: "choice",
        options: [
          "Solo ocurre si no hay medio material.",
          "Puede propagarse sin medio material.",
          "Siempre transporta materia.",
          "Solo la emite el Sol.",
        ],
        answer: 1,
        hint: "Que pueda viajar por el vacío no significa que solo exista en el vacío.",
        solution: "La radiación puede propagarse sin medio material, y todos los cuerpos emiten radiación térmica.",
      },
    ],
  },
  {
    title: "Conductores, aislantes y cambios de estado",
    intro: "Clasificación de materiales y preguntas rápidas de razonamiento.",
    exercises: [
      {
        tag: "Materiales",
        title: "Conductores térmicos",
        statement: "¿Qué grupo está formado solo por buenos conductores térmicos?",
        type: "choice",
        options: [
          "Corcho, plástico y madera.",
          "Cobre, oro y aluminio.",
          "Lana, aire y papel.",
          "Madera, plástico y hierro.",
        ],
        answer: 1,
        hint: "Los metales suelen conducir muy bien el calor.",
        solution: "Cobre, oro y aluminio son metales y buenos conductores térmicos.",
      },
      {
        tag: "Aislantes",
        title: "Doble acristalamiento",
        statement: "¿Por qué una ventana con doble cristal y aire entre medias aísla mejor?",
        type: "choice",
        options: [
          "Porque el aire entre cristales conduce mal el calor.",
          "Porque el aire es el mejor conductor térmico.",
          "Porque el cristal no tiene temperatura.",
          "Porque elimina por completo la radiación solar.",
        ],
        answer: 0,
        hint: "El aire quieto es un mal conductor.",
        solution: "La capa de aire dificulta la transferencia de calor, reduciendo pérdidas de energía.",
      },
      {
        tag: "Ropa",
        title: "Abrigo",
        statement: "Un abrigo de lana mantiene el cuerpo caliente principalmente porque...",
        type: "choice",
        options: [
          "Produce calor por sí mismo.",
          "Impide totalmente cualquier transferencia de calor.",
          "Atrapa aire y reduce la pérdida de calor del cuerpo.",
          "Convierte el frío en calor.",
        ],
        answer: 2,
        hint: "La lana y el aire retenido son malos conductores.",
        solution: "El abrigo no crea calor; reduce la pérdida de calor corporal hacia el exterior.",
      },
      {
        tag: "Estados",
        title: "Cambio progresivo",
        statement: "¿Cuál de estos cambios necesita absorber energía?",
        type: "choice",
        options: ["Condensación.", "Solidificación.", "Fusión.", "Sublimación inversa."],
        answer: 2,
        hint: "Los cambios progresivos van hacia estados de mayor energía.",
        solution: "La fusión, de sólido a líquido, necesita absorber energía.",
      },
      {
        tag: "Estados",
        title: "Sublimación",
        statement: "¿Qué es la sublimación?",
        type: "choice",
        options: [
          "El paso de sólido a gas.",
          "El paso de gas a líquido.",
          "El paso de líquido a sólido.",
          "El aumento de volumen por calor.",
        ],
        answer: 0,
        hint: "No pasa por el estado líquido.",
        solution: "La sublimación es el paso directo de sólido a gas.",
      },
      {
        tag: "Calor",
        title: "Cambios de estado y temperatura",
        statement: "Durante un cambio de estado, ¿qué suele ocurrir con la energía aportada?",
        type: "choice",
        options: [
          "Siempre aumenta la temperatura inmediatamente.",
          "Se emplea en cambiar el estado de la materia.",
          "Destruye las partículas.",
          "Elimina la masa del cuerpo.",
        ],
        answer: 1,
        hint: "Por eso el hielo puede seguir a 0 ºC mientras se derrite.",
        solution: "Durante el cambio de estado, la energía se usa para cambiar la organización de las partículas.",
      },
    ],
  },
];

const root = document.getElementById("exercise-root");
const template = document.getElementById("exercise-template");
const score = document.getElementById("score");
const cards = [];

function normalizeText(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/−/g, "-")
    .replace(/,/g, ".")
    .trim();
}

function extractNumbers(value) {
  const normalized = normalizeText(value);
  const matches = normalized.match(/-?\d+(?:\.\d+)?(?:e[+-]?\d+)?/g) || [];
  return matches.map(Number).filter(Number.isFinite);
}

function closeEnough(actual, expected, tolerance) {
  const scale = Math.max(1, Math.abs(expected));
  return Math.abs(actual - expected) <= tolerance * scale;
}

function checkNumber(exercise, value) {
  const numbers = extractNumbers(value);
  if (!numbers.length) return false;

  return exercise.expected.every((expected) =>
    numbers.some((actual) => closeEnough(actual, expected, exercise.tolerance || 0.03))
  );
}

function getChoiceValue(card) {
  const selected = card.querySelector("input[type='radio']:checked");
  return selected ? Number(selected.value) : null;
}

function mark(card, ok, message) {
  const feedback = card.querySelector(".feedback");
  card.classList.toggle("is-correct", ok);
  card.classList.toggle("is-wrong", !ok);
  card.dataset.state = ok ? "correct" : "wrong";
  feedback.className = `feedback ${ok ? "feedback--ok" : "feedback--error"}`;
  feedback.textContent = message;
  updateScore();
}

function check(card) {
  const exercise = card.exerciseData;
  let ok = false;
  let answered = true;

  if (exercise.type === "number") {
    const input = card.querySelector("input[type='text']");
    answered = input.value.trim().length > 0;
    ok = answered && checkNumber(exercise, input.value);
  } else {
    const value = getChoiceValue(card);
    answered = value !== null;
    ok = answered && value === exercise.answer;
  }

  if (!answered) {
    const feedback = card.querySelector(".feedback");
    feedback.className = "feedback feedback--hint";
    feedback.textContent = "Falta una respuesta.";
    return false;
  }

  mark(card, ok, ok ? "Correcto." : "No coincide. Revisa la pista o la solución.");
  return ok;
}

function showHint(card) {
  const feedback = card.querySelector(".feedback");
  feedback.className = "feedback feedback--hint";
  feedback.textContent = card.exerciseData.hint;
}

function showSolution(card) {
  const explanation = card.querySelector(".explanation");
  explanation.classList.add("is-visible");
  explanation.innerHTML = `<strong>Solución:</strong> ${card.exerciseData.solution}`;
}

function resetCard(card) {
  card.dataset.state = "";
  card.classList.remove("is-correct", "is-wrong");
  card.querySelector(".feedback").textContent = "";
  card.querySelector(".feedback").className = "feedback";
  card.querySelector(".explanation").classList.remove("is-visible");

  const textInput = card.querySelector("input[type='text']");
  if (textInput) textInput.value = "";

  card.querySelectorAll("input[type='radio']").forEach((radio) => {
    radio.checked = false;
  });
}

function updateScore() {
  const total = cards.length;
  const correct = cards.filter((card) => card.dataset.state === "correct").length;
  score.textContent = `${correct} / ${total}`;
}

function createNumberAnswer(exercise, card) {
  const input = document.createElement("input");
  input.type = "text";
  input.inputMode = "decimal";
  input.autocomplete = "off";
  input.setAttribute("aria-label", `Respuesta de ${exercise.title}`);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") check(card);
  });
  return input;
}

function createChoiceAnswer(exercise, card, id) {
  const list = document.createElement("div");
  list.className = "choice-list";

  exercise.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = "choice";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `exercise-${id}`;
    input.value = String(index);

    const span = document.createElement("span");
    span.textContent = option;

    label.append(input, span);
    list.append(label);
  });

  return list;
}

function render() {
  let count = 0;

  sections.forEach((section) => {
    const sectionEl = document.createElement("section");
    sectionEl.className = "exercise-level";

    const title = document.createElement("h3");
    title.textContent = section.title;

    const intro = document.createElement("p");
    intro.className = "exercise-level__intro";
    intro.textContent = section.intro;

    const grid = document.createElement("div");
    grid.className = "exercise-grid";

    section.exercises.forEach((exercise) => {
      count += 1;
      const card = template.content.firstElementChild.cloneNode(true);
      card.exerciseData = exercise;

      card.querySelector(".exercise__number").textContent = String(count).padStart(2, "0");
      card.querySelector(".exercise__tag").textContent = exercise.tag;
      card.querySelector(".exercise__title").textContent = exercise.title;
      card.querySelector(".exercise__statement").textContent = exercise.statement;

      const answer = exercise.type === "number"
        ? createNumberAnswer(exercise, card)
        : createChoiceAnswer(exercise, card, count);
      card.querySelector(".exercise__answer").append(answer);

      card.querySelector(".check").addEventListener("click", () => check(card));
      card.querySelector(".hint").addEventListener("click", () => showHint(card));
      card.querySelector(".solution").addEventListener("click", () => showSolution(card));

      cards.push(card);
      grid.append(card);
    });

    sectionEl.append(title, intro, grid);
    root.append(sectionEl);
  });

  updateScore();
}

document.getElementById("check-all").addEventListener("click", () => {
  cards.forEach(check);
});

document.getElementById("show-all").addEventListener("click", () => {
  cards.forEach(showSolution);
});

document.getElementById("reset-all").addEventListener("click", () => {
  cards.forEach(resetCard);
  updateScore();
});

render();
