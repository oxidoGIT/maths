const legacyIds = {
  "matematicas.html": "matematicas",
  "science.html": "science",
  "catala.html": "catala",
  "castella.html": "castella",
  "socials.html": "socials"
};

const escapeHtml = (value = "") =>
  value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);

const subjectHref = (subject) => `subject.html?id=${encodeURIComponent(subject.id)}`;

async function loadContent() {
  const response = await fetch("content.json");
  if (!response.ok) throw new Error("No se ha podido cargar content.json");
  return response.json();
}

function renderHome(content) {
  document.title = content.site.title;
  document.querySelector(".brand").textContent = content.site.title;
  document.querySelector(".eyebrow").textContent = content.site.eyebrow;
  document.querySelector("h1").textContent = content.site.heading;
  document.querySelector(".intro").textContent = content.site.intro;
  document.querySelector(".grid").innerHTML = content.subjects.map((subject, index) => `
    <a class="card" href="${subjectHref(subject)}">
      <span class="card__number">${String(index + 1).padStart(2, "0")}</span>
      <span class="card__title">${escapeHtml(subject.title)}</span>
    </a>
  `).join("");
}

function findSubject(content) {
  const fileName = window.location.pathname.split("/").pop();
  const queryId = new URLSearchParams(window.location.search).get("id");
  return content.subjects.find((subject) => subject.id === (queryId || legacyIds[fileName]));
}

function renderSubject(content) {
  const subject = findSubject(content);
  if (!subject) {
    document.querySelector(".page").innerHTML = "<h1>Asignatura no encontrada</h1>";
    return;
  }
  document.documentElement.lang = subject.language || "es";
  document.title = `${subject.title} · 2º ESO`;
  document.querySelector(".brand").textContent = content.site.title;
  document.querySelector("h1").textContent = subject.title;
  document.querySelector(".sections").innerHTML = subject.sections.map((section) => `
    <section class="section">
      <h2>${escapeHtml(section.title)}</h2>
      <ul class="resources">
        ${section.resources.map((resource) => `
          <li>
            <a href="${escapeHtml(resource.url)}">
              ${escapeHtml(resource.title)}
              ${resource.description ? `<span>${escapeHtml(resource.description)}</span>` : ""}
            </a>
          </li>
        `).join("")}
      </ul>
    </section>
  `).join("");
}

loadContent()
  .then((content) => document.body.dataset.page === "home" ? renderHome(content) : renderSubject(content))
  .catch((error) => {
    document.querySelector(".page").innerHTML = `<h1>Error</h1><p class="intro">${escapeHtml(error.message)}</p>`;
  });
