const DRAFT_KEY = "markel-content-draft";
let content;

const byId = (id) => document.getElementById(id);
const clone = (value) => JSON.parse(JSON.stringify(value));
const escapeHtml = (value = "") => value.replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
})[character]);
const slugify = (value) => value.toLowerCase().normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "") || `asignatura-${Date.now()}`;

function saveDraft(message = "Borrador guardado") {
  localStorage.setItem(DRAFT_KEY, JSON.stringify(content));
  byId("status").textContent = message;
}

function input(label, path, value = "", wide = false) {
  return `
    <label class="field ${wide ? "field--wide" : ""}">
      ${label}
      <input data-path="${path}" value="${escapeHtml(value)}" />
    </label>`;
}

function resourceCard(resource, subjectIndex, sectionIndex, resourceIndex) {
  const base = `subjects.${subjectIndex}.sections.${sectionIndex}.resources.${resourceIndex}`;
  return `
    <article class="resource">
      <div class="form-grid">
        ${input("Título", `${base}.title`, resource.title)}
        ${input("URL", `${base}.url`, resource.url)}
        ${input("Descripción opcional", `${base}.description`, resource.description || "", true)}
      </div>
      <div class="item__actions">
        <button class="button button--ghost button--small" data-action="move-resource-up" data-subject="${subjectIndex}" data-section="${sectionIndex}" data-resource="${resourceIndex}" type="button">↑ Subir</button>
        <button class="button button--ghost button--small" data-action="move-resource-down" data-subject="${subjectIndex}" data-section="${sectionIndex}" data-resource="${resourceIndex}" type="button">↓ Bajar</button>
        <button class="button button--danger button--small" data-action="remove-resource" data-subject="${subjectIndex}" data-section="${sectionIndex}" data-resource="${resourceIndex}" type="button">Borrar enlace</button>
      </div>
    </article>`;
}

function sectionCard(section, subjectIndex, sectionIndex) {
  const base = `subjects.${subjectIndex}.sections.${sectionIndex}`;
  return `
    <article class="section">
      <div class="item__header">
        <div class="form-grid">
          ${input("Título del bloque", `${base}.title`, section.title, true)}
        </div>
        <div class="item__actions">
          <button class="button button--ghost button--small" data-action="move-section-up" data-subject="${subjectIndex}" data-section="${sectionIndex}" type="button">↑</button>
          <button class="button button--ghost button--small" data-action="move-section-down" data-subject="${subjectIndex}" data-section="${sectionIndex}" type="button">↓</button>
          <button class="button button--danger button--small" data-action="remove-section" data-subject="${subjectIndex}" data-section="${sectionIndex}" type="button">Borrar bloque</button>
        </div>
      </div>
      <div class="resources">
        ${section.resources.map((resource, index) => resourceCard(resource, subjectIndex, sectionIndex, index)).join("")}
      </div>
      <button class="button button--small" data-action="add-resource" data-subject="${subjectIndex}" data-section="${sectionIndex}" type="button">Añadir enlace</button>
    </article>`;
}

function subjectCard(subject, subjectIndex) {
  const base = `subjects.${subjectIndex}`;
  return `
    <article class="subject">
      <div class="item__header">
        <div>
          <p class="kicker">Asignatura ${String(subjectIndex + 1).padStart(2, "0")}</p>
          <h3>${escapeHtml(subject.title)}</h3>
        </div>
        <div class="item__actions">
          <button class="button button--ghost button--small" data-action="move-subject-up" data-subject="${subjectIndex}" type="button">↑ Subir</button>
          <button class="button button--ghost button--small" data-action="move-subject-down" data-subject="${subjectIndex}" type="button">↓ Bajar</button>
          <button class="button button--danger button--small" data-action="remove-subject" data-subject="${subjectIndex}" type="button">Borrar asignatura</button>
        </div>
      </div>
      <div class="form-grid">
        ${input("Nombre", `${base}.title`, subject.title)}
        ${input("Identificador para la URL", `${base}.id`, subject.id)}
      </div>
      <div class="sections">
        ${subject.sections.map((section, index) => sectionCard(section, subjectIndex, index)).join("")}
      </div>
      <button class="button button--small" data-action="add-section" data-subject="${subjectIndex}" type="button">Añadir bloque</button>
    </article>`;
}

function render() {
  byId("site-fields").innerHTML = [
    input("Título del sitio", "site.title", content.site.title),
    input("Etiqueta superior", "site.eyebrow", content.site.eyebrow),
    input("Titular", "site.heading", content.site.heading, true),
    input("Introducción", "site.intro", content.site.intro, true)
  ].join("");
  byId("subjects").innerHTML = content.subjects.map(subjectCard).join("");
}

function setPath(path, value) {
  const keys = path.split(".");
  const finalKey = keys.pop();
  const target = keys.reduce((object, key) => object[key], content);
  if (value) target[finalKey] = value;
  else delete target[finalKey];
}

function move(items, from, offset) {
  const to = from + offset;
  if (to < 0 || to >= items.length) return;
  items.splice(to, 0, items.splice(from, 1)[0]);
}

function handleAction(button) {
  const action = button.dataset.action;
  const subjectIndex = Number(button.dataset.subject);
  const sectionIndex = Number(button.dataset.section);
  const resourceIndex = Number(button.dataset.resource);
  const subjects = content.subjects;
  const subject = subjects[subjectIndex];
  const sections = subject?.sections;
  const resources = sections?.[sectionIndex]?.resources;

  if (action === "add-subject") subjects.push({ id: slugify("Nueva asignatura"), title: "Nueva asignatura", language: "es", sections: [] });
  if (action === "remove-subject" && confirm("¿Borrar esta asignatura y todos sus enlaces?")) subjects.splice(subjectIndex, 1);
  if (action === "move-subject-up") move(subjects, subjectIndex, -1);
  if (action === "move-subject-down") move(subjects, subjectIndex, 1);
  if (action === "add-section") sections.push({ title: "Nuevo bloque", resources: [] });
  if (action === "remove-section" && confirm("¿Borrar este bloque y todos sus enlaces?")) sections.splice(sectionIndex, 1);
  if (action === "move-section-up") move(sections, sectionIndex, -1);
  if (action === "move-section-down") move(sections, sectionIndex, 1);
  if (action === "add-resource") resources.push({ title: "Nuevo enlace", url: "https://" });
  if (action === "remove-resource" && confirm("¿Borrar este enlace?")) resources.splice(resourceIndex, 1);
  if (action === "move-resource-up") move(resources, resourceIndex, -1);
  if (action === "move-resource-down") move(resources, resourceIndex, 1);
  saveDraft();
  render();
}

function exportContent() {
  const blob = new Blob([`${JSON.stringify(content, null, 2)}\n`], { type: "application/json" });
  const link = document.createElement("a");
  link.download = "content.json";
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href);
  byId("status").textContent = "Archivo exportado";
}

async function importContent(event) {
  const file = event.target.files[0];
  if (!file) return;
  content = JSON.parse(await file.text());
  saveDraft("JSON importado");
  render();
}

document.addEventListener("input", (event) => {
  if (!event.target.dataset.path) return;
  setPath(event.target.dataset.path, event.target.value);
  saveDraft();
});
document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (button) handleAction(button);
});
byId("export").addEventListener("click", exportContent);
byId("import").addEventListener("change", importContent);
byId("reset").addEventListener("click", async () => {
  if (!confirm("¿Descartar el borrador local y recuperar la versión publicada?")) return;
  localStorage.removeItem(DRAFT_KEY);
  content = await fetch("../content.json").then((response) => response.json());
  saveDraft("Borrador restablecido");
  render();
});

fetch("../content.json")
  .then((response) => response.json())
  .then((published) => {
    content = localStorage.getItem(DRAFT_KEY) ? JSON.parse(localStorage.getItem(DRAFT_KEY)) : clone(published);
    render();
    byId("status").textContent = localStorage.getItem(DRAFT_KEY) ? "Borrador local cargado" : "Versión publicada cargada";
  });
