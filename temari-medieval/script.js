const totalQuizzes = document.querySelectorAll(".exercise-set").length;
const completed = new Set(JSON.parse(localStorage.getItem("temariCompleted") || "[]"));

const conceptTexts = {
  monestirs: "Monestirs i abadies conservaven i traduïen el coneixement.",
  universitats: "Les universitats neixen a les ciutats i organitzen el saber amb normes comunes.",
  escolastica: "L'escolàstica era un mètode basat en el diàleg entre professor i alumne.",
  novelles: "Les novel·les medievals tractaven política, cavalleria i amor cortès."
};

function saveProgress() {
  localStorage.setItem("temariCompleted", JSON.stringify([...completed]));
  updateProgress();
}

function updateProgress() {
  const percent = totalQuizzes === 0 ? 0 : Math.round((completed.size / totalQuizzes) * 100);
  document.getElementById("progressLabel").textContent = `${percent}% completat`;
  document.getElementById("progressBar").style.width = `${percent}%`;
}

function setActiveNav() {
  const sections = [...document.querySelectorAll(".section[id]")];
  const links = [...document.querySelectorAll(".nav-link")];
  let current = sections[0]?.id || "inici";

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 150) current = section.id;
  }

  links.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}

document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(button.dataset.scroll)?.scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".time-dot").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".time-dot").forEach((dot) => dot.classList.remove("selected"));
    button.classList.add("selected");
    document.getElementById("timelineNote").textContent = `${button.dataset.time}: ${button.dataset.note}`;
  });
});

document.querySelectorAll(".concept-pill").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".concept-pill").forEach((pill) => pill.classList.remove("active"));
    button.classList.add("active");
    document.getElementById("conceptText").textContent = conceptTexts[button.dataset.concept];
  });
});

document.querySelectorAll(".ghost-action").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.parentElement.querySelector(".model-answer");
    answer.textContent = button.dataset.model;
    answer.classList.toggle("visible");
    button.textContent = answer.classList.contains("visible") ? "Amagar resposta model" : "Veure resposta model";
  });
});

document.querySelectorAll(".check-action").forEach((button) => {
  button.addEventListener("click", () => {
    const exerciseSet = button.closest(".exercise-set");
    const questions = [...exerciseSet.querySelectorAll(".quiz-card")];
    let correct = 0;

    questions.forEach((card) => {
      const selected = card.querySelector("input:checked");
      const isCorrect = selected?.value === card.dataset.answer;
      card.classList.remove("correct", "wrong");
      card.classList.add(isCorrect ? "correct" : "wrong");
      if (isCorrect) correct += 1;
    });

    const result = exerciseSet.querySelector(".quiz-result");
    if (correct === questions.length) {
      result.textContent = "Molt bé: has encertat tot el test d'aquest bloc.";
      result.style.color = "var(--green)";
      completed.add(exerciseSet.dataset.quiz);
      saveProgress();
    } else {
      result.textContent = `Has encertat ${correct} de ${questions.length}. Repassa les targetes i torna-ho a provar.`;
      result.style.color = "var(--red)";
    }
  });
});

document.querySelectorAll(".flashcard").forEach((card) => {
  const front = card.textContent.trim();
  card.addEventListener("click", () => {
    const revealed = card.classList.toggle("revealed");
    card.innerHTML = `<span>${revealed ? card.dataset.back : front}</span>`;
  });
});

document.getElementById("resetProgress").addEventListener("click", () => {
  completed.clear();
  localStorage.removeItem("temariCompleted");
  document.querySelectorAll(".quiz-card").forEach((card) => card.classList.remove("correct", "wrong"));
  document.querySelectorAll(".quiz-result").forEach((result) => {
    result.textContent = "";
    result.removeAttribute("style");
  });
  updateProgress();
});

window.addEventListener("scroll", setActiveNav, { passive: true });
updateProgress();
setActiveNav();
