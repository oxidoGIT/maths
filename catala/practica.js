const data = window.practiceData;
const practiceRoot = document.querySelector("#practice-root");
const allExercises = data.sections.flatMap((section) => section.exercises);
const storageKey = `catala-juny-2026-${data.id}`;
const completed = new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"));

function normalize(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "'")
    .replace(/\s+/g, " ");
}

function makeAnswer(exercise) {
  if (exercise.type === "choice") {
    const select = document.createElement("select");
    select.setAttribute("aria-label", "Resposta");
    select.innerHTML = `<option value="">Selecciona una resposta...</option>${exercise.options
      .map((option) => `<option>${option}</option>`)
      .join("")}`;
    return select;
  }

  const input = document.createElement("input");
  input.type = "text";
  input.setAttribute("aria-label", "Resposta");
  input.placeholder = exercise.placeholder || "Escriu la resposta";
  return input;
}

function isCorrect(value, exercise) {
  return exercise.accepted.map(normalize).includes(normalize(value));
}

function updateProgress() {
  const completedLabel = document.querySelector("#progress-label");
  const scoreLabel = document.querySelector("#score-label");
  const progressBar = document.querySelector("#progress-bar");
  if (!completedLabel || !scoreLabel || !progressBar) return;

  completedLabel.textContent = `${completed.size} de ${allExercises.length} exercicis completats`;
  scoreLabel.textContent = `${Math.round((completed.size / allExercises.length) * 100)}%`;
  progressBar.style.width = `${(completed.size / allExercises.length) * 100}%`;
  localStorage.setItem(storageKey, JSON.stringify([...completed]));
}

let globalIndex = 0;

data.sections.forEach((section, sectionIndex) => {
  const wrapper = document.createElement("section");
  wrapper.className = "practice-section";
  wrapper.id = section.id || `bloc-${sectionIndex + 1}`;
  wrapper.innerHTML = `
    <p class="eyebrow">${section.label || "Pràctica"}</p>
    <h2>${section.title}</h2>
    <p class="practice-section__intro">${section.intro || ""}</p>
    <div class="exercise-grid"></div>
  `;

  const grid = wrapper.querySelector(".exercise-grid");

  section.exercises.forEach((exercise) => {
    const index = globalIndex;
    globalIndex += 1;

    const card = document.createElement("article");
    card.className = "exercise";
    card.dataset.index = index;
    card.innerHTML = `
      <div class="exercise__top">
        <span class="exercise__number">Exercici ${String(index + 1).padStart(2, "0")}</span>
        <span class="exercise__tag">${exercise.tag}</span>
      </div>
      <h3 class="exercise__title">${exercise.title}</h3>
      <p class="exercise__prompt">${exercise.prompt}</p>
      <div class="exercise__text">${exercise.text || ""}</div>
      <div class="answer"></div>
      <div class="exercise__actions">
        <button class="button check" type="button">Comprova</button>
        <button class="button button--soft hint" type="button">Pista</button>
        <button class="button button--ghost solution" type="button">Mostra la solució</button>
      </div>
      <p class="feedback" role="status"></p>
      <div class="explanation">${exercise.explanation}</div>
    `;

    const answer = makeAnswer(exercise);
    card.querySelector(".answer").append(answer);

    if (completed.has(index)) card.classList.add("exercise--done");

    card.querySelector(".check").addEventListener("click", () => {
      const feedback = card.querySelector(".feedback");
      if (isCorrect(answer.value, exercise)) {
        completed.add(index);
        card.classList.add("exercise--done");
        feedback.className = "feedback feedback--ok";
        feedback.textContent = "Correcte! Aquest punt ja el tens.";
        updateProgress();
      } else {
        feedback.className = "feedback feedback--error";
        feedback.textContent = "Encara no. Revisa la resposta o demana una pista.";
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

  practiceRoot.append(wrapper);
});

document.querySelector("#reset-progress")?.addEventListener("click", () => {
  if (!confirm("Vols esborrar tot el progrés d'aquesta pràctica?")) return;
  completed.clear();
  localStorage.removeItem(storageKey);
  document.querySelectorAll(".exercise--done").forEach((card) => card.classList.remove("exercise--done"));
  document.querySelectorAll(".feedback").forEach((feedback) => {
    feedback.className = "feedback";
    feedback.textContent = "";
  });
  document.querySelectorAll(".explanation--visible").forEach((item) => item.classList.remove("explanation--visible"));
  document.querySelectorAll(".answer input, .answer select").forEach((field) => {
    field.value = "";
  });
  updateProgress();
});

updateProgress();
