const exercises = [
  {
    level: "Nivel 1", levelTitle: "Reconocer y clasificar polígonos",
    levelIntro: "Empieza contando lados y usando las propiedades básicas de las figuras.",
    title: "Nombre según sus lados", tag: "Polígonos", prompt: "¿Cómo se llama un polígono de 8 lados?",
    type: "choice", options: ["Hexágono", "Heptágono", "Octógono", "Decágono"], answer: "Octógono",
    hint: "La palabra empieza por «octo-», como ocho.",
    explanation: "Un polígono de 8 lados se llama octógono."
  },
  {
    level: "Nivel 1", title: "Regular o irregular", tag: "Polígonos", prompt: "Un polígono tiene todos sus lados y ángulos iguales. ¿Cómo se clasifica?",
    type: "choice", options: ["Regular", "Irregular", "Cóncavo", "Abierto"], answer: "Regular",
    hint: "La regularidad exige igualdad de lados y de ángulos.",
    explanation: "Un polígono regular tiene todos sus lados y todos sus ángulos iguales."
  },
  {
    level: "Nivel 1", title: "Convexo o cóncavo", tag: "Polígonos", prompt: "Un polígono tiene un ángulo interior mayor de 180°. ¿Cómo se clasifica?",
    type: "choice", options: ["Convexo", "Cóncavo", "Regular", "Equilátero"], answer: "Cóncavo",
    hint: "En una figura cóncava aparece una entrada o hendidura.",
    explanation: "Si algún ángulo interior supera 180°, el polígono es cóncavo."
  },
  {
    level: "Nivel 1", title: "¿Es un polígono?", tag: "Concepto", prompt: "Una figura plana cerrada está formada únicamente por segmentos rectos. ¿Es un polígono?",
    type: "choice", options: ["Sí", "No"], answer: "Sí",
    hint: "Comprueba que sea plana, cerrada y formada por segmentos.",
    explanation: "Sí. Un polígono es una figura plana cerrada cuyos lados son segmentos rectos."
  },
  {
    level: "Nivel 2", levelTitle: "Triángulos y cuadriláteros",
    levelIntro: "Clasifica triángulos por sus lados o ángulos y reconoce familias de cuadriláteros.",
    title: "Tres lados iguales", tag: "Triángulos", prompt: "¿Cómo se llama un triángulo con sus tres lados iguales?",
    type: "choice", options: ["Equilátero", "Isósceles", "Escaleno", "Rectángulo"], answer: "Equilátero",
    hint: "«Equi-» significa igual.",
    explanation: "Un triángulo equilátero tiene los tres lados iguales."
  },
  {
    level: "Nivel 2", title: "Dos lados iguales", tag: "Triángulos", prompt: "¿Cómo se llama un triángulo con exactamente dos lados iguales?",
    type: "choice", options: ["Equilátero", "Isósceles", "Escaleno", "Obtusángulo"], answer: "Isósceles",
    hint: "Es el tipo intermedio entre equilátero y escaleno.",
    explanation: "Un triángulo isósceles tiene dos lados iguales."
  },
  {
    level: "Nivel 2", title: "Un ángulo de 90°", tag: "Triángulos", prompt: "Clasifica por sus ángulos un triángulo que tiene un ángulo de 90°.",
    type: "choice", options: ["Acutángulo", "Rectángulo", "Obtusángulo", "Escaleno"], answer: "Rectángulo",
    hint: "Un ángulo de 90° también se llama ángulo recto.",
    explanation: "Un triángulo rectángulo tiene un ángulo recto, es decir, de 90°."
  },
  {
    level: "Nivel 2", title: "Paralelogramo especial", tag: "Cuadriláteros", prompt: "Tiene cuatro lados iguales y sus ángulos no tienen por qué ser rectos. ¿Qué figura es?",
    type: "choice", options: ["Rectángulo", "Rombo", "Trapecio", "Trapezoide"], answer: "Rombo",
    hint: "No confundas lados iguales con ángulos rectos.",
    explanation: "El rombo es un paralelogramo con cuatro lados iguales."
  },
  {
    level: "Nivel 2", title: "Radio y diámetro", tag: "Circunferencia", prompt: "Una circunferencia tiene un radio de 6 cm. ¿Cuánto mide su diámetro?",
    type: "number", label: "cm", answer: 12,
    hint: "El diámetro atraviesa el centro y equivale a dos radios.",
    explanation: "Diámetro = 2 · radio = 2 · 6 = 12 cm."
  },
  {
    level: "Nivel 2", title: "Elementos de la circunferencia", tag: "Circunferencia", prompt: "¿Cómo se llama el segmento que une dos puntos de la circunferencia sin tener que pasar por el centro?",
    type: "choice", options: ["Radio", "Diámetro", "Cuerda", "Arco"], answer: "Cuerda",
    hint: "El diámetro es un caso especial de este segmento.",
    explanation: "Una cuerda une dos puntos de una circunferencia. Si pasa por el centro, también es un diámetro."
  },
  {
    level: "Nivel 3", levelTitle: "Ángulos y sistema sexagesimal",
    levelIntro: "Calcula sumas de ángulos interiores y opera con grados, minutos y segundos.",
    title: "Suma interior de un pentágono", tag: "Ángulos", prompt: "¿Cuánto suman los ángulos interiores de un pentágono?",
    equations: "Suma = 180° · (n − 2)", type: "number", label: "grados", answer: 540,
    hint: "Sustituye n = 5 en la fórmula.",
    explanation: "180° · (5 − 2) = 180° · 3 = 540°."
  },
  {
    level: "Nivel 3", title: "Suma interior de un octógono", tag: "Ángulos", prompt: "¿Cuánto suman los ángulos interiores de un octógono?",
    equations: "Suma = 180° · (n − 2)", type: "number", label: "grados", answer: 1080,
    hint: "Un octógono tiene 8 lados.",
    explanation: "180° · (8 − 2) = 180° · 6 = 1080°."
  },
  {
    level: "Nivel 3", title: "Ángulo de un hexágono regular", tag: "Ángulos", prompt: "¿Cuánto mide cada ángulo interior de un hexágono regular?",
    equations: "Suma interior ÷ número de ángulos", type: "number", label: "grados", answer: 120,
    hint: "Primero calcula 180° · (6 − 2) y después divide entre 6.",
    explanation: "La suma es 720°. Como los seis ángulos son iguales, 720° ÷ 6 = 120°."
  },
  {
    level: "Nivel 3", title: "Suma sexagesimal", tag: "Sexagesimal", prompt: "Suma los dos ángulos e introduce grados, minutos y segundos.",
    equations: "35° 25′ 36″\n65° 58′ 45″", type: "labels", labels: ["grados", "minutos", "segundos"], answer: [101, 24, 21],
    hint: "60 segundos forman 1 minuto y 60 minutos forman 1 grado.",
    explanation: "36″ + 45″ = 81″ = 1′ 21″. Después 25′ + 58′ + 1′ = 84′ = 1° 24′. Resultado: 101° 24′ 21″."
  },
  {
    level: "Nivel 3", title: "Resta sexagesimal", tag: "Sexagesimal", prompt: "Resta los dos ángulos e introduce grados, minutos y segundos.",
    equations: "77° 20′ 27″\n− 34° 27′ 53″", type: "labels", labels: ["grados", "minutos", "segundos"], answer: [42, 52, 34],
    hint: "Pide prestado 1 minuto para los segundos y después 1 grado para los minutos.",
    explanation: "Tomamos 1′: 87″ − 53″ = 34″. Tomamos 1°: 79′ − 27′ = 52′. Finalmente, 76° − 34° = 42°. Resultado: 42° 52′ 34″."
  },
  {
    level: "Nivel 4", levelTitle: "Teorema de Pitágoras",
    levelIntro: "Usa a² + b² = c² en triángulos rectángulos. La hipotenusa siempre es el lado mayor.",
    title: "Encuentra la hipotenusa", tag: "Pitágoras", prompt: "Un triángulo rectángulo tiene catetos de 3 cm y 4 cm. ¿Cuánto mide la hipotenusa?",
    equations: "3² + 4² = c²", type: "number", label: "cm", answer: 5,
    hint: "Suma los cuadrados y calcula la raíz cuadrada.",
    explanation: "3² + 4² = 9 + 16 = 25. Por tanto, c = √25 = 5 cm."
  },
  {
    level: "Nivel 4", title: "Encuentra un cateto", tag: "Pitágoras", prompt: "La hipotenusa mide 17 cm y un cateto mide 15 cm. ¿Cuánto mide el otro cateto?",
    equations: "b² + 15² = 17²", type: "number", label: "cm", answer: 8,
    hint: "Resta 15² a 17² antes de hacer la raíz.",
    explanation: "b² = 17² − 15² = 289 − 225 = 64. Por tanto, b = 8 cm."
  },
  {
    level: "Nivel 4", title: "Otro triángulo rectángulo", tag: "Pitágoras", prompt: "Los catetos miden 7 cm y 24 cm. ¿Cuánto mide la hipotenusa?",
    equations: "7² + 24² = c²", type: "number", label: "cm", answer: 25,
    hint: "Calcula 49 + 576.",
    explanation: "7² + 24² = 49 + 576 = 625. La raíz de 625 es 25 cm."
  },
  {
    level: "Nivel 4", title: "Diagonal de un cuadrado", tag: "Aplicación", prompt: "Un cuadrado tiene un lado de 5 cm. ¿Cuánto mide su diagonal? Redondea a dos decimales.",
    equations: "5² + 5² = d²", type: "number", label: "cm", answer: 7.07,
    hint: "La diagonal divide el cuadrado en dos triángulos rectángulos iguales.",
    explanation: "d = √(25 + 25) = √50 ≈ 7,07 cm."
  },
  {
    level: "Nivel 5", levelTitle: "Áreas de polígonos",
    levelIntro: "Identifica base, altura, diagonales o apotema y aplica la fórmula correcta.",
    title: "Área de un triángulo", tag: "Áreas", prompt: "Calcula el área de un triángulo de base 12 cm y altura 7 cm.",
    equations: "A = base · altura ÷ 2", type: "number", label: "cm²", answer: 42,
    hint: "Multiplica 12 por 7 y divide entre 2.",
    explanation: "A = 12 · 7 ÷ 2 = 42 cm²."
  },
  {
    level: "Nivel 5", title: "Área de un paralelogramo", tag: "Áreas", prompt: "Calcula el área de un paralelogramo de base 9 cm y altura 6 cm.",
    equations: "A = base · altura", type: "number", label: "cm²", answer: 54,
    hint: "No dividas entre dos.",
    explanation: "A = 9 · 6 = 54 cm²."
  },
  {
    level: "Nivel 5", title: "Área de un rombo", tag: "Áreas", prompt: "Las diagonales de un rombo miden 10 cm y 6 cm. ¿Cuál es su área?",
    equations: "A = D · d ÷ 2", type: "number", label: "cm²", answer: 30,
    hint: "Multiplica las diagonales y divide entre dos.",
    explanation: "A = 10 · 6 ÷ 2 = 30 cm²."
  },
  {
    level: "Nivel 5", title: "Área de un trapecio", tag: "Áreas", prompt: "Un trapecio tiene bases de 14 cm y 8 cm, y altura de 5 cm. ¿Cuál es su área?",
    equations: "A = (B + b) · h ÷ 2", type: "number", label: "cm²", answer: 55,
    hint: "Suma primero las dos bases.",
    explanation: "A = (14 + 8) · 5 ÷ 2 = 22 · 5 ÷ 2 = 55 cm²."
  },
  {
    level: "Nivel 5", title: "Polígono regular", tag: "Áreas", prompt: "Un polígono regular tiene perímetro 48 cm y apotema 7 cm. ¿Cuál es su área?",
    equations: "A = perímetro · apotema ÷ 2", type: "number", label: "cm²", answer: 168,
    hint: "Multiplica 48 por 7 y divide entre dos.",
    explanation: "A = 48 · 7 ÷ 2 = 168 cm²."
  },
  {
    level: "Nivel 6", levelTitle: "Reto final: aplicaciones",
    levelIntro: "Combina Pitágoras, áreas y propiedades de las figuras en problemas completos.",
    title: "Terreno rectangular", tag: "Problema", prompt: "Un terreno rectangular mide 60 m por 80 m. Cada metro de valla cuesta 23 €. ¿Cuánto costaría vallarlo siguiendo su diagonal?",
    equations: "diagonal² = 60² + 80²", type: "number", label: "euros", answer: 2300,
    hint: "Calcula primero la diagonal y después multiplícala por 23.",
    explanation: "La diagonal mide √(60² + 80²) = √10000 = 100 m. El coste es 100 · 23 = 2300 €."
  },
  {
    level: "Nivel 6", title: "Apotema y área", tag: "Reto", prompt: "Un hexágono regular tiene lado 6 cm y apotema 5,2 cm. ¿Cuál es su área?",
    equations: "perímetro = 6 · lado\nA = perímetro · apotema ÷ 2", type: "number", label: "cm²", answer: 93.6,
    hint: "Calcula primero el perímetro: seis lados de 6 cm.",
    explanation: "El perímetro es 36 cm. A = 36 · 5,2 ÷ 2 = 93,6 cm²."
  },
  {
    level: "Nivel 6", title: "Triángulo isósceles", tag: "Reto", prompt: "Un triángulo isósceles tiene lados iguales de 13 cm y base de 10 cm. ¿Cuál es su área?",
    equations: "La altura divide la base en 5 cm y 5 cm.", type: "number", label: "cm²", answer: 60,
    hint: "Usa Pitágoras para hallar la altura y después calcula el área.",
    explanation: "h² + 5² = 13² → h² = 144 → h = 12 cm. Área = 10 · 12 ÷ 2 = 60 cm²."
  },
  {
    level: "Nivel 6", title: "¿Es rectángulo?", tag: "Reto", prompt: "Un triángulo tiene lados de 5 cm, 12 cm y 13 cm. ¿Es rectángulo?",
    equations: "Comprueba si 5² + 12² = 13²", type: "choice", options: ["Sí", "No"], answer: "Sí",
    hint: "El lado mayor sería la hipotenusa.",
    explanation: "5² + 12² = 25 + 144 = 169 = 13². Sí, es un triángulo rectángulo."
  }
];

const template = document.querySelector("#exercise-template");
const levels = document.querySelector("#levels");
const done = new Set(JSON.parse(localStorage.getItem("geometry-progress") || "[]"));
const acceptedError = 0.011;

function input(label) {
  const wrapper = document.createElement("label");
  wrapper.innerHTML = `${label} <input inputmode="decimal" />`;
  return wrapper;
}

function createAnswer(exercise) {
  const container = document.createDocumentFragment();
  if (exercise.type === "choice") {
    const select = document.createElement("select");
    select.innerHTML = `<option value="">Selecciona...</option>${exercise.options.map((option) => `<option>${option}</option>`).join("")}`;
    container.append(select);
    return container;
  }
  if (exercise.type === "number") {
    container.append(input(exercise.label));
    return container;
  }
  exercise.labels.forEach((label) => container.append(input(label)));
  return container;
}

function valuesFor(card, exercise) {
  if (exercise.type === "choice") return [card.querySelector("select").value];
  return [...card.querySelectorAll("input")].map((field) => Number(field.value.replace(",", ".")));
}

function isCorrect(values, exercise) {
  if (exercise.type === "choice") return values[0] === exercise.answer;
  const answers = Array.isArray(exercise.answer) ? exercise.answer : [exercise.answer];
  return answers.every((value, index) => Number.isFinite(values[index]) && Math.abs(value - values[index]) < acceptedError);
}

function updateProgress() {
  const points = done.size * 10;
  document.querySelector("#progress-label").textContent = `${done.size} de ${exercises.length} ejercicios completados`;
  document.querySelector("#score-label").textContent = `${points} puntos`;
  document.querySelector("#progress-bar").style.width = `${done.size / exercises.length * 100}%`;
  localStorage.setItem("geometry-progress", JSON.stringify([...done]));
}

document.querySelector("#reset-progress").addEventListener("click", () => {
  if (!confirm("¿Quieres borrar todo el progreso de esta práctica?")) return;
  done.clear();
  localStorage.removeItem("geometry-progress");
  document.querySelectorAll(".exercise--done").forEach((card) => card.classList.remove("exercise--done"));
  document.querySelectorAll(".feedback").forEach((feedback) => {
    feedback.className = "feedback";
    feedback.textContent = "";
  });
  document.querySelectorAll(".explanation--visible").forEach((explanation) => explanation.classList.remove("explanation--visible"));
  document.querySelectorAll("input").forEach((field) => { field.value = ""; });
  document.querySelectorAll("select").forEach((field) => { field.value = ""; });
  updateProgress();
});

const groups = exercises.reduce((result, exercise, index) => {
  (result[exercise.level] ||= []).push({ exercise, index });
  return result;
}, {});

Object.entries(groups).forEach(([level, entries]) => {
  const section = document.createElement("section");
  section.className = "level";
  const first = entries[0].exercise;
  section.innerHTML = `<p class="eyebrow">${level}</p><h2>${first.levelTitle || level}</h2><p class="level__intro">${first.levelIntro || ""}</p><div class="exercise-grid"></div>`;
  const grid = section.querySelector(".exercise-grid");

  entries.forEach(({ exercise, index }) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.dataset.index = index;
    card.querySelector(".exercise__number").textContent = `Ejercicio ${String(index + 1).padStart(2, "0")}`;
    card.querySelector(".exercise__tag").textContent = exercise.tag;
    card.querySelector(".exercise__title").textContent = exercise.title;
    card.querySelector(".exercise__prompt").textContent = exercise.prompt;
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
        feedback.textContent = "¡Correcto! Muy bien resuelto.";
        updateProgress();
      } else {
        feedback.className = "feedback feedback--error";
        feedback.textContent = "Todavía no. Revisa los datos o pide una pista.";
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

updateProgress();
