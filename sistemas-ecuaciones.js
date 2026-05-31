const exercises = [
  {
    level: "Nivel 1", levelTitle: "Entender qué significa resolver un sistema",
    levelIntro: "Empieza comprobando parejas y reconociendo los tres tipos de sistemas.",
    title: "Comprueba una pareja", tag: "Concepto", prompt: "¿La pareja (2, 1) es solución del sistema?",
    equations: "x + y = 3\n2x - y = 3", type: "choice", options: ["Sí", "No"], answer: "Sí",
    hint: "Sustituye x = 2 e y = 1 en las dos ecuaciones.",
    explanation: "2 + 1 = 3 y 2·2 - 1 = 3. La pareja verifica las dos ecuaciones, así que sí es solución."
  },
  {
    level: "Nivel 1", title: "Encuentra la solución común", tag: "Tablas", prompt: "¿Qué pareja cumple las dos ecuaciones?",
    equations: "x + y = 5\n2x + y = 7", type: "xy", answer: [2, 3],
    hint: "Resta la primera ecuación de la segunda: desaparecerá la y.",
    explanation: "Al restar obtenemos x = 2. Después, 2 + y = 5, por lo que y = 3."
  },
  {
    level: "Nivel 1", title: "Clasifica las rectas", tag: "Gráfica", prompt: "Clasifica el sistema según su número de soluciones.",
    equations: "x + y = 5\n2x + 2y = 10", type: "choice", options: ["Una solución", "Infinitas soluciones", "Sin solución"], answer: "Infinitas soluciones",
    hint: "La segunda ecuación es exactamente el doble de la primera.",
    explanation: "Las dos ecuaciones representan la misma recta. Todos sus puntos son comunes: hay infinitas soluciones."
  },
  {
    level: "Nivel 2", levelTitle: "Resolver con sustitución", levelIntro: "Despeja la incógnita más sencilla y sustitúyela en la otra ecuación.",
    title: "Despeja y sustituye", tag: "Sustitución", prompt: "Resuelve el sistema.",
    equations: "x = y + 2\nx + y = 8", type: "xy", answer: [5, 3],
    hint: "En la segunda ecuación cambia x por y + 2.",
    explanation: "(y + 2) + y = 8 → 2y = 6 → y = 3. Entonces x = 3 + 2 = 5."
  },
  {
    level: "Nivel 2", title: "Coeficiente -1", tag: "Sustitución", prompt: "Resuelve el sistema.",
    equations: "x - 2y = 4\n-3x + y = 3", type: "xy", answer: [-2, -3],
    hint: "Despeja x en la primera ecuación: x = 4 + 2y.",
    explanation: "-3(4 + 2y) + y = 3 → -12 - 5y = 3 → y = -3. Después x = 4 + 2(-3) = -2."
  },
  {
    level: "Nivel 2", title: "Comprueba tu resultado", tag: "Sustitución", prompt: "Resuelve y comprueba en las dos ecuaciones.",
    equations: "x + 3y = 11\n2x - y = 1", type: "xy", answer: [2, 3],
    hint: "Despeja x = 11 - 3y y sustituye en la segunda.",
    explanation: "2(11 - 3y) - y = 1 → 22 - 7y = 1 → y = 3. Entonces x = 2."
  },
  {
    level: "Nivel 3", levelTitle: "Elegir entre igualación y reducción", levelIntro: "Practica métodos eficaces cuando despejar no es la opción más directa.",
    title: "Iguala dos expresiones", tag: "Igualación", prompt: "Resuelve el sistema.",
    equations: "2x - y = 6\n3x + 2y = 2", type: "xy", answer: [2, -2],
    hint: "Despeja y en las dos ecuaciones e iguala las expresiones.",
    explanation: "y = 2x - 6 e y = (2 - 3x)/2. Igualando: 4x - 12 = 2 - 3x → 7x = 14 → x = 2; y = -2."
  },
  {
    level: "Nivel 3", title: "Elimina una incógnita", tag: "Reducción", prompt: "Resuelve sumando las ecuaciones.",
    equations: "x + 2y = 5\n2x - 2y = 4", type: "xy", answer: [3, 1],
    hint: "Suma las dos ecuaciones: la y desaparece.",
    explanation: "Al sumar: 3x = 9 → x = 3. Sustituyendo: 3 + 2y = 5 → y = 1."
  },
  {
    level: "Nivel 3", title: "Multiplica antes de sumar", tag: "Reducción", prompt: "Resuelve el sistema.",
    equations: "5x + 2y = 16\n2x + 3y = 2", type: "xy", answer: [4, -2],
    hint: "Multiplica la primera ecuación por -2 y la segunda por 5.",
    explanation: "-10x - 4y = -32 y 10x + 15y = 10. Sumando: 11y = -22 → y = -2; después x = 4."
  },
  {
    level: "Nivel 3", title: "¿Tiene solución?", tag: "Clasificación", prompt: "Clasifica el sistema.",
    equations: "x - 2y = 3\n-3x + 6y = -9", type: "choice", options: ["Una solución", "Infinitas soluciones", "Sin solución"], answer: "Infinitas soluciones",
    hint: "Multiplica la primera ecuación por -3.",
    explanation: "La segunda ecuación es -3 veces la primera. Representan la misma recta: infinitas soluciones."
  },
  {
    level: "Nivel 4", levelTitle: "Problemas con contexto", levelIntro: "Traduce cada situación a dos ecuaciones y resuelve el sistema.",
    title: "Coches y motos", tag: "Problema", prompt: "En un garaje hay 45 vehículos entre coches y motos. En total hay 160 ruedas. ¿Cuántos coches y motos hay?",
    equations: "coches + motos = 45\n4·coches + 2·motos = 160", type: "labels", labels: ["coches", "motos"], answer: [35, 10],
    hint: "Usa x para coches e y para motos. Después aplica reducción.",
    explanation: "x + y = 45 y 4x + 2y = 160. Restando dos veces la primera a la segunda: 2x = 70 → x = 35; y = 10."
  },
  {
    level: "Nivel 4", title: "Cafetería", tag: "Problema", prompt: "4 refrescos y 2 bocadillos cuestan 15 €. 5 refrescos y 4 bocadillos cuestan 24 €. ¿Cuánto cuesta cada producto?",
    equations: "4r + 2b = 15\n5r + 4b = 24", type: "labels", labels: ["refresco (€)", "bocadillo (€)"], answer: [2, 3.5],
    hint: "Multiplica la primera ecuación por -2 y súmala con la segunda.",
    explanation: "-8r - 4b = -30 y 5r + 4b = 24. Sumando: -3r = -6 → r = 2. Entonces b = 3,5."
  },
  {
    level: "Nivel 4", title: "Dos edades", tag: "Problema", prompt: "Manel tiene 15 años más que María. Dentro de 3 años tendrá el doble que ella. ¿Qué edad tiene cada uno ahora?",
    equations: "m = a + 15\nm + 3 = 2(a + 3)", type: "labels", labels: ["Manel", "María"], answer: [27, 12],
    hint: "Sustituye m por a + 15 en la segunda ecuación.",
    explanation: "a + 15 + 3 = 2a + 6 → a = 12. Por tanto, Manel tiene 27 años."
  },
  {
    level: "Nivel 5", levelTitle: "Reto final", levelIntro: "Combina lo aprendido y decide el método más apropiado.",
    title: "Entradas de cine", tag: "Reto", prompt: "Dos entradas 2D y cinco entradas 3D cuestan 51 €. Cuatro entradas 2D y tres entradas 3D cuestan 53 €. ¿Cuánto vale cada tipo?",
    equations: "2d + 5t = 51\n4d + 3t = 53", type: "labels", labels: ["entrada 2D (€)", "entrada 3D (€)"], answer: [8, 7],
    hint: "Multiplica la primera ecuación por -2 y elimina la d.",
    explanation: "-4d - 10t = -102 y 4d + 3t = 53. Sumando: -7t = -49 → t = 7. Después 2d + 35 = 51 → d = 8."
  },
  {
    level: "Nivel 5", title: "Clasifica sin dibujar", tag: "Reto", prompt: "Clasifica el sistema observando los coeficientes.",
    equations: "2x - 2y = 5\n4x - 4y = 14", type: "choice", options: ["Una solución", "Infinitas soluciones", "Sin solución"], answer: "Sin solución",
    hint: "Al duplicar la primera ecuación obtendrías 4x - 4y = 10, no 14.",
    explanation: "Las rectas tienen la misma pendiente pero distinta ordenada en el origen. Son paralelas: no existe solución común."
  },
  {
    level: "Nivel 6", levelTitle: "Plantea el sistema tú mismo", levelIntro: "En estos problemas no te damos las ecuaciones. Decide qué representa cada incógnita, traduce las dos pistas y resuelve.",
    title: "Cuadernos de dos tamaños", tag: "Planteamiento", prompt: "Una libreta grande cuesta 1,50 € más que una pequeña. Dos libretas pequeñas cuestan 1 € más que una grande. ¿Cuánto cuesta cada libreta?",
    equations: "", type: "labels", labels: ["grande (€)", "pequeña (€)"], answer: [4, 2.5],
    hint: "Llama g al precio de la grande y p al de la pequeña. Traduce por separado «1,50 € más» y «1 € más».",
    explanation: "Planteamos g = p + 1,5 y 2p = g + 1. Sustituyendo: 2p = p + 2,5 → p = 2,5. Entonces g = 4."
  },
  {
    level: "Nivel 6", title: "Monedas en una hucha", tag: "Planteamiento", prompt: "En una hucha hay 23 monedas, todas de 1 € o de 2 €. En total suman 37 €. ¿Cuántas monedas hay de cada tipo?",
    equations: "", type: "labels", labels: ["monedas de 1 €", "monedas de 2 €"], answer: [9, 14],
    hint: "Una ecuación cuenta monedas. La otra cuenta euros.",
    explanation: "Si x son monedas de 1 € e y monedas de 2 €: x + y = 23 y x + 2y = 37. Restando ambas ecuaciones: y = 14; por tanto x = 9."
  },
  {
    level: "Nivel 6", title: "Rectángulo", tag: "Planteamiento", prompt: "El perímetro de un rectángulo es 46 cm. La base mide 5 cm más que la altura. ¿Cuánto miden la base y la altura?",
    equations: "", type: "labels", labels: ["base (cm)", "altura (cm)"], answer: [14, 9],
    hint: "Recuerda que el perímetro de un rectángulo es 2·base + 2·altura.",
    explanation: "Planteamos 2b + 2h = 46 y b = h + 5. Sustituyendo: 2(h + 5) + 2h = 46 → 4h = 36 → h = 9 y b = 14."
  },
  {
    level: "Nivel 6", title: "Excursión en autobús", tag: "Planteamiento", prompt: "El alquiler de un autobús cuesta 300 €. Si se apuntan 8 alumnos más, cada alumno paga 1,25 € menos. ¿Cuántos alumnos estaban apuntados al principio y cuánto pagaba cada uno?",
    equations: "", type: "labels", labels: ["alumnos iniciales", "precio inicial (€)"], answer: [40, 7.5],
    hint: "Usa n para el número inicial de alumnos y p para el precio inicial. El coste total no cambia.",
    explanation: "Planteamos n·p = 300 y (n + 8)(p - 1,25) = 300. Como p = 300/n, al resolver obtenemos n = 40 y p = 7,50 €."
  },
  {
    level: "Nivel 6", title: "Dos números", tag: "Planteamiento", prompt: "La suma de dos números es 55 y su diferencia es 7. ¿Cuáles son esos números?",
    equations: "", type: "labels", labels: ["número mayor", "número menor"], answer: [31, 24],
    hint: "Usa una ecuación para la suma y otra para «mayor menos menor».",
    explanation: "Planteamos x + y = 55 y x - y = 7. Sumando: 2x = 62 → x = 31. Entonces y = 24."
  },
  {
    level: "Nivel 6", title: "Cruce de vehículos", tag: "Planteamiento", prompt: "Barcelona y Valencia están separadas 350 km. Un coche sale de Barcelona a 110 km/h y una moto sale a la vez desde Valencia a 90 km/h. ¿Cuántas horas tardan en cruzarse y cuántos kilómetros recorre el coche?",
    equations: "", type: "labels", labels: ["tiempo (h)", "distancia coche (km)"], answer: [1.75, 192.5],
    hint: "La suma de las dos distancias recorridas es 350 km. Ambas dependen del mismo tiempo.",
    explanation: "Si t es el tiempo: 110t + 90t = 350 → 200t = 350 → t = 1,75 h. El coche recorre 110·1,75 = 192,5 km."
  }
];

const template = document.querySelector("#exercise-template");
const levels = document.querySelector("#levels");
const done = new Set(JSON.parse(localStorage.getItem("systems-progress") || "[]"));
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
  const labels = exercise.type === "labels" ? exercise.labels : ["x", "y"];
  container.append(input(labels[0]), input(labels[1]));
  return container;
}

function valuesFor(card, exercise) {
  if (exercise.type === "choice") return [card.querySelector("select").value];
  return [...card.querySelectorAll("input")].map((field) => Number(field.value.replace(",", ".")));
}

function isCorrect(values, exercise) {
  if (exercise.type === "choice") return values[0] === exercise.answer;
  const answer = exercise.exactAnswer || exercise.answer;
  return answer.every((value, index) => Math.abs(value - values[index]) < acceptedError);
}

function updateProgress() {
  const points = done.size * 10;
  document.querySelector("#progress-label").textContent = `${done.size} de ${exercises.length} ejercicios completados`;
  document.querySelector("#score-label").textContent = `${points} puntos`;
  document.querySelector("#progress-bar").style.width = `${done.size / exercises.length * 100}%`;
  localStorage.setItem("systems-progress", JSON.stringify([...done]));
}

document.querySelector("#reset-progress").addEventListener("click", () => {
  if (!confirm("¿Quieres borrar todo el progreso de esta práctica?")) return;
  done.clear();
  localStorage.removeItem("systems-progress");
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
    card.querySelector(".equations").textContent = exercise.equations;
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
        feedback.textContent = "Todavía no. Revisa los cálculos o pide una pista.";
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
