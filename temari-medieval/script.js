const totalQuizzes = document.querySelectorAll(".exercise-set").length;
const completed = new Set(JSON.parse(localStorage.getItem("temariCompleted") || "[]"));

const conceptTexts = {
  monestirs: "Monestirs i abadies conservaven i traduïen el coneixement.",
  universitats: "Les universitats neixen a les ciutats i organitzen el saber amb normes comunes.",
  escolastica: "L'escolàstica era un mètode basat en el diàleg entre professor i alumne.",
  novelles: "Les novel·les medievals tractaven política, cavalleria i amor cortès."
};

const sourceParagraphs = {
  v1: "Els Vikings provenien de l'actual Escandinàvia. La seva imatge ha estat deformada pel còmic, el cinema i les òperes de Richard Wagner: no eren només guerrers, també eren navegants, comerciants i creadors de cultura.",
  v2: "Tenien sagues escrites en rúnic i una religió politeista amb Thor, Odin, Loki i Freya. Políticament, apareixen relacionats amb Normandia, Anglaterra i Sicília.",
  v3: "Normandia: Rolland i Gisela, acord matrimonial, feudalisme i vassallatge. Anglaterra: 1066, Hastings, Guillem el Conqueridor i tapís de Bayeux. Sicília: mercenaris normands i regne multicultural amb Roger II.",
  v4: "Es van expandir cap a França, Rússia, Anglaterra, Bretanya i el sud d'Itàlia a partir del canvi climàtic del segle IX. Comerciaven amb productes agrícoles i amb materials com l'ambre rus i la pell de marta.",
  c1: "El saber no estava només en mans de religiosos: també hi havia autoritats laiques, ciutats, universitats, dones cultes, llengües diferents i cultura oral.",
  c2: "Entre els segles XI i XII apareixen universitats a ciutats com Bolonya, París, Oxford o Lleida. Usaven el llatí i el mètode de l'escolàstica, basat en el diàleg entre professor i alumne.",
  c3: "Les novel·les medievals tractaven política, cavalleria i amor cortès. Política: Dante i la “Monarquia”, amb l'objectiu d'aconseguir la pau. Cavalleria: rei Artur, taula rodona i recerca del Grial. Amor: Tristany i Isolda com a exemple d'amor cortès.",
  c4: "Eren centres religiosos dirigits per monjos i monges. Protegien el coneixement mitjançant traduccions. Figures com Roswitha i Hildegarden de Bingen mostren que també hi havia dones cultes.",
  a1: "L'amor cortès és un gènere literari del segle XII lligat a Leonor d'Aquitània i a la cultura aristocràtica. Presenta un triangle amorós, un amor prohibit amb secret i tensió, i una dona idealitzada que el cavaller converteix en protagonista.",
  a2: "L'amor cortès es transmet amb trobadors i joglars: uns componien poemes i els altres els cantaven o recitaven.",
  a3: "L'amor cortès té l'origen al sud de França i a Aquitània. Les llengües associades al temari són la llengua d'Oc i l'alemany.",
  cr1: "Les Croades buscaven control social, lluita contra l'infidel i domini de les rutes comercials d'Orient. El 1095, el papa Urbà II impulsa una expedició des del concili de Clermont per ajudar l'imperi Bizantí i conquerir Jerusalem.",
  cr2: "Matèries primeres d'Orient: or i fusta com a productes valuosos, seda lligada al luxe i al comerç, i alum, fonamental per a les indústries tèxtils.",
  cr3: "El pelegrinatge cap a Jerusalem va portar reis i reines, com Leonor d'Aquitània. Per protegir els camins es va fundar l'ordre del Temple amb Hugo de Payns.",
  cr4: "Hi havia motius religiosos, polítics i econòmics. Les Croades van provocar pelegrinatges, ordes de cavallers, intercanvis culturals i també radicalització religiosa.",
  cr5: "Les Croades van provocar intercanvis culturals i també radicalització religiosa. En aquest context, Ramon Llull apareix com una figura que busca l'enteniment entre religions.",
  b1: "Bancs: institucions creades per intercanviar moneda i protegir els estalvis de les persones. Fires: espais comercials on s'acostumaven a vendre productes.",
  b2: "Lletres de canvi: documents que permetien cobrar diners en diferents territoris i facilitaven la mobilitat econòmica.",
  b3: "Els exemples de bancs més famosos del temari són el banc dels templers i, sobretot, els del Medici.",
  b4: "Entre els segles XI i XII, les Croades connecten Europa amb Orient i impulsen fires, bancs i nous mecanismes de pagament. El temari ho relaciona amb la literatura de Robin Hood, la religió amb el Purgatori i el creixement del comerç.",
  g1: "Els gremis eren organitzacions de comerciants i artesans que regulaven oficis i productes.",
  g2: "Les funcions dels gremis eren formar treballadors, protegir condicions com el salari i vendre productes a fires molt cotitzades.",
  g3: "Els gremis incloïen comerciants i artesans molt variats: metges, llana, mestres de l'or i també sectors femenins.",
  g4: "Els gremis encaixen dins la societat urbana medieval perquè organitzen oficis, treball i venda de productes en un món de ciutats i fires.",
  t1: "Els Vikings eren un poble d'origen escandinau que va expandir-se per Europa entre els segles IX i XIII.",
  t2: "Els Vikings provenien de l'actual Escandinàvia. La seva imatge ha estat deformada pel còmic, el cinema i les òperes de Richard Wagner: no eren només guerrers, també eren navegants, comerciants i creadors de cultura.",
  t3: "Els Vikings provenien de l'actual Escandinàvia. La seva imatge ha estat deformada pel còmic, el cinema i les òperes de Richard Wagner: no eren només guerrers, també eren navegants, comerciants i creadors de cultura.",
  t4: "Estereotip: guerrers violents, simples i sempre salvatges.",
  t5: "Realitat del temari: navegants, comerciants, agricultors, creadors de sagues i actors polítics.",
  t6: "Es van expandir cap a França, Rússia, Anglaterra, Bretanya i el sud d'Itàlia a partir del canvi climàtic del segle IX. Comerciaven amb productes agrícoles i amb materials com l'ambre rus i la pell de marta.",
  t7: "Es van expandir cap a França, Rússia, Anglaterra, Bretanya i el sud d'Itàlia a partir del canvi climàtic del segle IX. Comerciaven amb productes agrícoles i amb materials com l'ambre rus i la pell de marta.",
  t8: "Es van expandir cap a França, Rússia, Anglaterra, Bretanya i el sud d'Itàlia a partir del canvi climàtic del segle IX. Comerciaven amb productes agrícoles i amb materials com l'ambre rus i la pell de marta.",
  t9: "Tenien sagues escrites en rúnic i una religió politeista amb Thor, Odin, Loki i Freya. Políticament, apareixen relacionats amb Normandia, Anglaterra i Sicília.",
  t10: "Literatura: sagues escrites en rúnic, com les aventures d'Erik “El Rojo”. Religió: politeisme amb Thor, Odin, Loki, Freya i el Valhalla.",
  t11: "Literatura: sagues escrites en rúnic, com les aventures d'Erik “El Rojo”. Religió: politeisme amb Thor, Odin, Loki, Freya i el Valhalla.",
  t12: "Literatura: sagues escrites en rúnic, com les aventures d'Erik “El Rojo”. Religió: politeisme amb Thor, Odin, Loki, Freya i el Valhalla.",
  t13: "Literatura: sagues escrites en rúnic, com les aventures d'Erik “El Rojo”. Religió: politeisme amb Thor, Odin, Loki, Freya i el Valhalla.",
  t14: "Literatura: sagues escrites en rúnic, com les aventures d'Erik “El Rojo”. Religió: politeisme amb Thor, Odin, Loki, Freya i el Valhalla.",
  t15: "Normandia: Rolland i Gisela, acord matrimonial, feudalisme i vassallatge. Anglaterra: 1066, Hastings, Guillem el Conqueridor i tapís de Bayeux. Sicília: mercenaris normands i regne multicultural amb Roger II.",
  t16: "Normandia: Rolland i Gisela, acord matrimonial, feudalisme i vassallatge. Anglaterra: 1066, Hastings, Guillem el Conqueridor i tapís de Bayeux. Sicília: mercenaris normands i regne multicultural amb Roger II.",
  t17: "Normandia: Rolland i Gisela, acord matrimonial, feudalisme i vassallatge. Anglaterra: 1066, Hastings, Guillem el Conqueridor i tapís de Bayeux. Sicília: mercenaris normands i regne multicultural amb Roger II.",
  t18: "Normandia: Rolland i Gisela, acord matrimonial, feudalisme i vassallatge. Anglaterra: 1066, Hastings, Guillem el Conqueridor i tapís de Bayeux. Sicília: mercenaris normands i regne multicultural amb Roger II.",
  t19: "Normandia: Rolland i Gisela, acord matrimonial, feudalisme i vassallatge. Anglaterra: 1066, Hastings, Guillem el Conqueridor i tapís de Bayeux. Sicília: mercenaris normands i regne multicultural amb Roger II.",
  t20: "El coneixement medieval no només vivia als monestirs: també creixia a les ciutats.",
  t21: "Monestirs i abadies, dirigits per monjos i monges, protegeixen el saber amb traduccions.",
  t22: "Eren centres religiosos dirigits per monjos i monges. Protegien el coneixement mitjançant traduccions. Figures com Roswitha i Hildegarden de Bingen mostren que també hi havia dones cultes.",
  t23: "Eren centres religiosos dirigits per monjos i monges. Protegien el coneixement mitjançant traduccions. Figures com Roswitha i Hildegarden de Bingen mostren que també hi havia dones cultes.",
  t24: "Eren centres religiosos dirigits per monjos i monges. Protegien el coneixement mitjançant traduccions. Figures com Roswitha i Hildegarden de Bingen mostren que també hi havia dones cultes.",
  t25: "Eren centres religiosos dirigits per monjos i monges. Protegien el coneixement mitjançant traduccions. Figures com Roswitha i Hildegarden de Bingen mostren que també hi havia dones cultes.",
  t26: "Universitats vinculades al creixement de les ciutats i a autoritats religioses o laiques.",
  t27: "Entre els segles XI i XII apareixen universitats a ciutats com Bolonya, París, Oxford o Lleida. Usaven el llatí i el mètode de l'escolàstica, basat en el diàleg entre professor i alumne.",
  t28: "Entre els segles XI i XII apareixen universitats a ciutats com Bolonya, París, Oxford o Lleida. Usaven el llatí i el mètode de l'escolàstica, basat en el diàleg entre professor i alumne.",
  t29: "Apareixen universitats com París, Oxford i Lleida, mentre creixen ciutats, fires i bancs. El temari situa aquest procés entre 1150 i 1300.",
  t30: "Universitat medieval: llengua, llatí; organització, estudiants segons el seu origen; suport, Església i monarquies; mètode, escolàstica, diàleg entre professor i alumne; exemple, Pere Abelard i Eloïsa.",
  t31: "Universitat medieval: llengua, llatí; organització, estudiants segons el seu origen; suport, Església i monarquies; mètode, escolàstica, diàleg entre professor i alumne; exemple, Pere Abelard i Eloïsa.",
  t32: "Universitat medieval: llengua, llatí; organització, estudiants segons el seu origen; suport, Església i monarquies; mètode, escolàstica, diàleg entre professor i alumne; exemple, Pere Abelard i Eloïsa.",
  t33: "L'escolàstica era el mètode universitari basat en el diàleg entre professor i alumne, i treballava a partir de textos d'Aristòtil.",
  t34: "Universitat medieval: llengua, llatí; organització, estudiants segons el seu origen; suport, Església i monarquies; mètode, escolàstica, diàleg entre professor i alumne; exemple, Pere Abelard i Eloïsa.",
  t35: "Les novel·les medievals tractaven política, cavalleria i amor cortès. Política: Dante i la “Monarquia”, amb l'objectiu d'aconseguir la pau. Cavalleria: rei Artur, taula rodona i recerca del Grial. Amor: Tristany i Isolda com a exemple d'amor cortès.",
  t36: "Les novel·les medievals tractaven política, cavalleria i amor cortès. Política: Dante i la “Monarquia”, amb l'objectiu d'aconseguir la pau. Cavalleria: rei Artur, taula rodona i recerca del Grial. Amor: Tristany i Isolda com a exemple d'amor cortès.",
  t37: "Les novel·les medievals tractaven política, cavalleria i amor cortès. Política: Dante i la “Monarquia”, amb l'objectiu d'aconseguir la pau. Cavalleria: rei Artur, taula rodona i recerca del Grial. Amor: Tristany i Isolda com a exemple d'amor cortès.",
  t38: "L'amor cortès és un gènere literari del segle XII lligat a Leonor d'Aquitània i a la cultura aristocràtica.",
  t39: "L'amor cortès és un gènere literari del segle XII lligat a Leonor d'Aquitània i a la cultura aristocràtica.",
  t40: "L'amor cortès presenta un triangle amorós, un amor prohibit amb secret i tensió, i una dona idealitzada que el cavaller converteix en protagonista.",
  t41: "L'amor cortès té l'origen al sud de França i a Aquitània. Les llengües associades al temari són la llengua d'Oc i l'alemany.",
  t42: "L'amor cortès es transmet amb trobadors i joglars: uns componien poemes i els altres els cantaven o recitaven.",
  t43: "Les Croades eren expedicions polítiques, militars i comercials organitzades per l'Església entre els segles XI i XIII.",
  t44: "Les Croades eren expedicions polítiques, militars i comercials organitzades per l'Església entre els segles XI i XIII.",
  t45: "Les Croades buscaven control social, lluita contra l'infidel i domini de les rutes comercials d'Orient. El 1095, el papa Urbà II impulsa una expedició des del concili de Clermont per ajudar l'imperi Bizantí i conquerir Jerusalem.",
  t46: "Les Croades buscaven control social, lluita contra l'infidel i domini de les rutes comercials d'Orient. El 1095, el papa Urbà II impulsa una expedició des del concili de Clermont per ajudar l'imperi Bizantí i conquerir Jerusalem.",
  t47: "Religió, poder de l’Església, control social i domini de rutes comercials d’Orient.",
  t48: "Matèries primeres d'Orient: or i fusta com a productes valuosos, seda lligada al luxe i al comerç, i alum, fonamental per a les indústries tèxtils.",
  t49: "El 1099, els cavallers cristians prenen Jerusalem i funden un regne cristià.",
  t50: "Regne cristià a Jerusalem, pelegrinatges, ordre del Temple, intercanvis i radicalització.",
  t51: "El pelegrinatge cap a Jerusalem va portar reis i reines, com Leonor d'Aquitània. Per protegir els camins es va fundar l'ordre del Temple amb Hugo de Payns.",
  t52: "El 1187, Saladino reconquesta Jerusalem després de Hattin.",
  t53: "Les Croades van portar fruites com l'albercoc, estris com les forquilles, la cura del cos i un negoci important al voltant de la guerra.",
  t54: "Les Croades van provocar intercanvis culturals i també radicalització religiosa. En aquest context, Ramon Llull apareix com una figura que busca l'enteniment entre religions.",
  t55: "Les fires, el comerç i les lletres de canvi van transformar l’economia medieval.",
  t56: "Bancs: institucions creades per intercanviar moneda i protegir els estalvis de les persones. Fires: espais comercials on s'acostumaven a vendre productes.",
  t57: "Lletres de canvi: documents que permetien cobrar diners en diferents territoris i facilitaven la mobilitat econòmica.",
  t58: "Es venen productes i circulen monedes diferents.",
  t59: "Canvia moneda, protegeix estalvis i registra el pagament.",
  t60: "Permet cobrar diners en un altre territori sense portar-los físicament.",
  t61: "Els gremis eren organitzacions de comerciants i artesans que regulaven oficis i productes. Servien per formar, protegir condicions com el salari i vendre productes a fires molt cotitzades."
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

function showSourceParagraph(card, sourceText) {
  if (!sourceText) return;

  const sourceBox = document.createElement("div");
  const sourceLabel = document.createElement("span");
  const sourceParagraph = document.createElement("p");

  sourceBox.className = "source-paragraph";
  sourceLabel.textContent = "Fragment del temari";
  sourceParagraph.textContent = sourceText;
  sourceBox.append(sourceLabel, sourceParagraph);
  card.append(sourceBox);
}

function clearCardFeedback(card) {
  card.querySelector(".source-paragraph")?.remove();
  card.classList.remove("correct", "wrong");
}

function checkQuizCard(card, { requireSelection = false } = {}) {
  const selected = card.querySelector("input:checked");
  const questionName = card.querySelector("input[type='radio']")?.name;
  const sourceText = questionName ? sourceParagraphs[questionName] : "";

  clearCardFeedback(card);

  if (!selected && requireSelection) {
    card.querySelector(".card-result").textContent = "Tria una resposta abans de corregir.";
    card.querySelector(".card-result").style.color = "var(--red)";
    return false;
  }

  const isCorrect = selected?.value === card.dataset.answer;
  card.classList.add(isCorrect ? "correct" : "wrong");

  if (isCorrect) {
    showSourceParagraph(card, sourceText);
  }

  return isCorrect;
}

function updateFinalTestProgress(exerciseSet) {
  const cards = [...exerciseSet.querySelectorAll(".quiz-card")];
  const correct = cards.filter((card) => card.classList.contains("correct")).length;
  const result = exerciseSet.querySelector(".quiz-result");

  result.textContent = `Has corregit ${correct} de ${cards.length} preguntes correctament.`;
  result.style.color = correct === cards.length ? "var(--green)" : "var(--muted)";

  if (correct === cards.length) {
    completed.add(exerciseSet.dataset.quiz);
    saveProgress();
  }
}

document.querySelectorAll('[data-quiz="test-final"]').forEach((exerciseSet) => {
  exerciseSet.querySelector(".check-action")?.remove();

  exerciseSet.querySelectorAll(".quiz-card").forEach((card) => {
    const action = document.createElement("button");
    const result = document.createElement("p");

    action.className = "question-check-action";
    action.type = "button";
    action.textContent = "Corregir pregunta";
    result.className = "card-result";

    action.addEventListener("click", () => {
      const isCorrect = checkQuizCard(card, { requireSelection: true });

      if (isCorrect) {
        result.textContent = "Correcte.";
        result.style.color = "var(--green)";
      } else if (card.querySelector("input:checked")) {
        result.textContent = "No és correcte. Torna-ho a provar.";
        result.style.color = "var(--red)";
      }

      updateFinalTestProgress(exerciseSet);
    });

    card.append(action, result);
  });
});

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
      if (checkQuizCard(card)) correct += 1;
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
  document.querySelectorAll(".source-paragraph").forEach((source) => source.remove());
  document.querySelectorAll(".card-result").forEach((result) => {
    result.textContent = "";
    result.removeAttribute("style");
  });
  document.querySelectorAll(".quiz-result").forEach((result) => {
    result.textContent = "";
    result.removeAttribute("style");
  });
  updateProgress();
});

window.addEventListener("scroll", setActiveNav, { passive: true });
updateProgress();
setActiveNav();
