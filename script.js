const FAMILIAS = [
  { name: "Alborgues", subtitle: null },
  { name: "Almeida", subtitle: "(Monte)" },
  { name: "Alminhas", subtitle: null },
  { name: "Alpoim", subtitle: null },
  { name: "Ana Nova", subtitle: "(Vendas Novas)" },
  { name: "Apaixonada", subtitle: null },
  { name: "Arouca", subtitle: null },
  { name: "Artista", subtitle: null },
  { name: "Avelares", subtitle: "(Ferradal, Valos e Redondo)" },
  { name: "Avé", subtitle: "(ou Avés)" },
  { name: "Avintes", subtitle: null },
  { name: "Azeiteiro", subtitle: null },
  { name: "Bacalhau", subtitle: "(Ferradal)" },
  { name: "Badolas", subtitle: "(Valos)" },
  { name: "Baião", subtitle: "(ou Baiões)" },
  { name: "Balôna", subtitle: null },
  { name: "Barraca", subtitle: "(Souto)" },
  { name: "Barroso", subtitle: "(Ferradal)" },
  { name: "Bastos", subtitle: "(Chousa de Baixo)" },
  { name: "Batata", subtitle: null },
  { name: "Bica", subtitle: "(do lugar da Cal e Bica)" },
  { name: "Bicha", subtitle: "(ou Bicho – Valos)" },
  { name: "Bigodinho", subtitle: null },
  { name: "Brandão", subtitle: null },
  { name: "Bronca", subtitle: null },
  { name: "Buraca", subtitle: "(Soutelo)" },
  { name: "Caciques", subtitle: null },
  { name: "Cadela", subtitle: null },
  { name: "Cagão", subtitle: null },
  { name: "Caínhos", subtitle: null },
  { name: "Caixa d'óculos", subtitle: null },
  { name: "Caixeiro", subtitle: "(Outeiro)" },
  { name: "Campeão", subtitle: "(Cerejeira)" },
  { name: "Canarinho", subtitle: null },
  { name: "Canôco", subtitle: null },
  { name: "Capador", subtitle: null },
  { name: "Capela", subtitle: "(Chousa de Baixo)" },
  { name: "Capichano", subtitle: null },
  { name: "Caroço", subtitle: null },
  { name: "Carrapato", subtitle: null },
  { name: "Carriço", subtitle: null },
  { name: "Carvalha", subtitle: null },
  { name: "Carvalho", subtitle: "(Valos)" },
  { name: "Casqueira", subtitle: "(Barroca)" },
  { name: "Castanhos", subtitle: "(Chousa)" },
  { name: "Castas", subtitle: "(Chousa de Cima)" },
  { name: "Castros", subtitle: "(Valos)" },
  { name: "Catona", subtitle: null },
  { name: "Cavacada", subtitle: "(Avenida)" },
  { name: "Cavalaria", subtitle: "(Passais)" },
  { name: "Cachiço", subtitle: "(ou cachico)" },
  { name: "Cereeiro", subtitle: null },
  { name: "Cerejeira", subtitle: "(do lugar e casa da Cerejeira)" },
  { name: "Cerqueira", subtitle: null },
  { name: "Chapas", subtitle: "(Chousa)" },
  { name: "Chasco", subtitle: null },
  { name: "Chícola", subtitle: "(Vilar)" },
  { name: "Chivinhos", subtitle: "(Souto)" },
  { name: "Cochicho", subtitle: null },
  { name: "Coelha", subtitle: "(Ferradal)" },
  { name: "Coelho e Castro", subtitle: "(Vilar)" },
  { name: "Coelho ou Coelhos", subtitle: "(Vilar, Regadio, Valos e Ferradal)" },
  { name: "Coisa", subtitle: "(Soutelo)" },
  { name: "Coletes", subtitle: "(Barroca)" },
  { name: "Corriola", subtitle: "(Idanha)" },
  { name: "Costa", subtitle: "(Souto)" },
  { name: "Crista", subtitle: null },
  { name: "Cu-sêcos", subtitle: "(ou Cussecos – carece de confirmação)" },
  { name: "Dente", subtitle: null },
  { name: "Diamantino", subtitle: "(Calvário)" },
  { name: "Dimas", subtitle: null },
  { name: "Eirado", subtitle: null },
  { name: "Eminente", subtitle: null },
  { name: "Êrmo", subtitle: "(do lugar e casa do Êrmo)" },
  { name: "Esgalha", subtitle: null },
  { name: "Espanhol", subtitle: null },
  { name: "Espeta-a-faca", subtitle: null },
  { name: "Espeto", subtitle: null },
  { name: "Facas", subtitle: null },
  { name: "Fanaites", subtitle: null },
  { name: "Feijoeira", subtitle: "(ou Fajoeira)" },
  { name: "Felisminas", subtitle: "(Leanoras ou Leonoras – Vilar)" },
  { name: "Ferrador", subtitle: "(Ferradal e Feira-dos-Dez)" },
  { name: "Ferreira Avelar", subtitle: "(Ferradal)" },
  { name: "Ferreiro", subtitle: "(Casal do Monte)" },
  { name: "Figueiras", subtitle: "(Vilar)" },
  { name: "Foguete", subtitle: null },
  { name: "Folhetas", subtitle: null },
  { name: "Fontes Avelar", subtitle: "(do lugar e casa do Rendondo)" },
  { name: "Frada", subtitle: null },
  { name: "Gaio", subtitle: "(Valos)" },
  { name: "Ganaipos", subtitle: null },
  { name: "Ganso", subtitle: "(da calçada e casa do Ganso no Souto)" },
  { name: "Gato", subtitle: "(Soutelo e Gualtar)" },
  { name: "Gêsto", subtitle: null },
  { name: "Gião", subtitle: null },
  { name: "Giraldas", subtitle: "(do Soutêlo)" },
  { name: "Girôco", subtitle: "(Idanha)" },
  { name: "Graças", subtitle: "(Grandal)" },
  { name: "Grande", subtitle: null },
  { name: "Granja", subtitle: "(Passais)" },
  { name: "Grencho", subtitle: null },
  { name: "Grilha", subtitle: null },
  { name: "Grita", subtitle: null },
  { name: "Guedes", subtitle: "(Regadio)" },
  { name: "Guilherme", subtitle: "(Valos)" },
  { name: "Índio", subtitle: null },
  { name: "Infância", subtitle: null },
  { name: "Janeiro", subtitle: "(Ferradal)" },
  { name: "Labrego", subtitle: null },
  { name: "Laranjal", subtitle: null },
  { name: "Lavoura", subtitle: null },
  { name: "Leandro", subtitle: null },
  { name: "Levadas", subtitle: "(do lugar e casa das Levadas)" },
  { name: "Leveira", subtitle: null },
  { name: "Loja", subtitle: "(ou do Manuel da Loja – Chousa de Baixo)" },
  { name: "Lopes", subtitle: "(Redondo)" },
  { name: "Má-Raça", subtitle: "(Ferradal)" },
  { name: "Maduro", subtitle: "(Grandal)" },
  { name: "Mãe Jaquina", subtitle: null },
  { name: "Mãe Maria", subtitle: null },
  { name: "Mãe-Ró", subtitle: null },
  { name: "Magro", subtitle: null },
  { name: "Mámoa", subtitle: null },
  { name: "Manaia", subtitle: null },
  { name: "Manco", subtitle: null },
  { name: "Maneta", subtitle: null },
  { name: "Marau", subtitle: null },
  { name: "Marroquino", subtitle: null },
  { name: "Martinho", subtitle: null },
  { name: "Melrinho", subtitle: null },
  { name: "Menano", subtitle: null },
  { name: "Menino Jesus", subtitle: null },
  { name: "Merdieiro", subtitle: null },
  { name: "Mestrinhos", subtitle: "(Regato)" },
  { name: "Miguela", subtitle: "(Valos)" },
  { name: "Minente", subtitle: null },
  { name: "Miniqui", subtitle: null },
  { name: "Mirolho", subtitle: null },
  { name: "Mitra", subtitle: null },
  { name: "Moço", subtitle: "(Idanha)" },
  { name: "Molete-ressêsso", subtitle: null },
  { name: "Moreiras", subtitle: null },
  { name: "Motas", subtitle: "(Souto)" },
  { name: "Mourizos", subtitle: null },
  { name: "Moutinhas", subtitle: "(Valos)" },
  { name: "Músico", subtitle: "(ou Múseco – Barroca)" },
  { name: "Nariz", subtitle: null },
  { name: "Nelinhos", subtitle: null },
  { name: "Nicha", subtitle: "(Regadio)" },
  { name: "Olho-vivo", subtitle: null },
  { name: "Ó-qui-ó-qui", subtitle: null },
  { name: "Ovelheiro", subtitle: null },
  { name: "Pacharrela", subtitle: null },
  { name: "Padeiros", subtitle: "(Valos)" },
  { name: "Padre", subtitle: null },
  { name: "Papas", subtitle: null },
  { name: "Pardal", subtitle: "(Vilar)" },
  { name: "Passarinha", subtitle: null },
  { name: "Patrícios", subtitle: "(Redondo)" },
  { name: "Peideiro", subtitle: null },
  { name: "Pena", subtitle: null },
  { name: "Pequenino", subtitle: null },
  { name: "Pêra", subtitle: null },
  { name: "Pereiras", subtitle: "(Grandal, de Vilar, Soutelo e Cal)" },
  { name: "Perna-borrada", subtitle: null },
  { name: "Peruas", subtitle: null },
  { name: "Pessegueiros", subtitle: "(Vilar)" },
  { name: "Pêto", subtitle: "(Regadio)" },
  { name: "Pica-Sapos", subtitle: "(Ferradal)" },
  { name: "Picos", subtitle: "(Souto)" },
  { name: "Pidós", subtitle: "(Ferradal)" },
  { name: "Pinelas", subtitle: "(Casal do Monte)" },
  { name: "Pinomba", subtitle: null },
  { name: "Pinponé", subtitle: "(ou Pimponéro)" },
  { name: "Piques", subtitle: null },
  { name: "Pirão", subtitle: "(Soutelo)" },
  { name: "Piroês", subtitle: "(Soutelo)" },
  { name: "Piscelos", subtitle: "(ou Pichelos – Ferradal)" },
  { name: "Pistola", subtitle: "(Redondo)" },
  { name: "Polícias", subtitle: "(Ferradal)" },
  { name: "Poqué", subtitle: null },
  { name: "Preguiça", subtitle: null },
  { name: "Ramboias", subtitle: "(Grandal)" },
  { name: "Ramos", subtitle: "(Ferradal)" },
  { name: "Ranque-tranque", subtitle: null },
  { name: "Rato", subtitle: "(Valos)" },
  { name: "Regedor", subtitle: "(Outeiro)" },
  { name: "Rei", subtitle: null },
  { name: "Reis", subtitle: "(Passais e Ribeira Brava)" },
  { name: "Relva", subtitle: null },
  { name: "Ribeira", subtitle: null },
  { name: "Rochas", subtitle: null },
  { name: "Roque", subtitle: "(Chão-do-Rio)" },
  { name: "Rosairas", subtitle: "(ou Rosárias – Ponte Nova - Ribeiras)" },
  { name: "Rufos", subtitle: null },
  { name: "Rusga", subtitle: "(ou Sousa Rusga – Valos)" },
  { name: "Ruço", subtitle: null },
  { name: "Sá", subtitle: null },
  { name: "Sabinos", subtitle: "(Soutelo)" },
  { name: "Sacas", subtitle: null },
  { name: "Sacristão", subtitle: null },
  { name: "Sarocos", subtitle: "(Ferradal)" },
  { name: "Seminha", subtitle: null },
  { name: "Serralheira", subtitle: null },
  { name: "Solato", subtitle: null },
  { name: "Sorte", subtitle: "(Outeiro)" },
  { name: "Sunisga", subtitle: null },
  { name: "Tabalão", subtitle: null },
  { name: "Tabarêdas", subtitle: "(Ferradal)" },
  { name: "Tananos", subtitle: "(Soutelo)" },
  { name: "Tanoeira", subtitle: null },
  { name: "Tarracos", subtitle: "(Regadio)" },
  { name: "Teles", subtitle: "(Chousa de Cima e Chão do Rio)" },
  { name: "Tesona", subtitle: null },
  { name: "Tintureiras", subtitle: null },
  { name: "Toninhas", subtitle: "(Chousa)" },
  { name: "Três", subtitle: null },
  { name: "Trinta", subtitle: null },
  { name: "Valadas", subtitle: null },
  { name: "Valinhos", subtitle: null },
  { name: "Vaqueiro", subtitle: "(Soutelo)" },
  { name: "Varateiro", subtitle: "(Ferradal)" },
  { name: "Velhinho", subtitle: null },
  { name: "Vendeira", subtitle: null },
  { name: "Venenas", subtitle: null },
  { name: "Véstias", subtitle: null },
  { name: "Ventura", subtitle: null },
  { name: "Vieiras", subtitle: "(Monte)" },
  { name: "Vielas", subtitle: "(Soutelo e Valos)" },
  { name: "Vilar", subtitle: null },
  { name: "Vilarinhos", subtitle: "(Regadio)" },
  { name: "Vinte-e-nove", subtitle: "(Ferradal)" },
  { name: "Visconde", subtitle: null },
  { name: "Volta", subtitle: "(de Soutelo)" },
  { name: "Zena", subtitle: "(Chousa)" },
  { name: "Ziquebiques", subtitle: "(Iquebitques ou Inquebiques)" },
];

const COLORS = [
  { bg: "#FF6B6B", text: "#FFFFFF" },
  { bg: "#4ECDC4", text: "#FFFFFF" },
  { bg: "#FFE66D", text: "#1a1a1a" },
  { bg: "#A8E6CF", text: "#1a1a1a" },
  { bg: "#FF85A1", text: "#FFFFFF" },
  { bg: "#7C5CBF", text: "#FFFFFF" },
  { bg: "#FF9F43", text: "#FFFFFF" },
  { bg: "#54A0FF", text: "#FFFFFF" },
  { bg: "#5F27CD", text: "#FFFFFF" },
  { bg: "#01A3A4", text: "#FFFFFF" },
  { bg: "#F368E0", text: "#FFFFFF" },
  { bg: "#FF6348", text: "#FFFFFF" },
  { bg: "#2ED573", text: "#1a1a1a" },
  { bg: "#1E90FF", text: "#FFFFFF" },
  { bg: "#FFA502", text: "#FFFFFF" },
  { bg: "#FF4757", text: "#FFFFFF" },
];

const CYCLE_MS = 4000;
const FADE_MS = 300;

let currentIndex = -1;
let currentColorIndex = -1;
let timer = null;
let paused = false;

const btnInfo = document.getElementById("btnInfo");
const infoOverlay = document.getElementById("infoOverlay");
const btnInfoClose = document.getElementById("btnInfoClose");
const nameDisplay = document.getElementById("nameDisplay");
const subtitleDisplay = document.getElementById("subtitleDisplay");
const nameWrapper = document.getElementById("nameWrapper");
const overlay = document.getElementById("overlay");
const namesList = document.getElementById("namesList");
const btnNext = document.getElementById("btnNext");
const btnPause = document.getElementById("btnPause");
const btnShowAll = document.getElementById("btnShowAll");
const btnClose = document.getElementById("btnClose");
const displayContainer = document.getElementById("display");
const searchInput = document.getElementById("searchInput");

function stripAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function filterList() {
  const query = stripAccents(searchInput.value.toLowerCase());
  const items = namesList.children;
  let lastSep = null;
  let hasVisible = false;

  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains("list-separator")) {
      if (lastSep) lastSep.style.display = hasVisible ? "" : "none";
      lastSep = items[i];
      hasVisible = false;
    } else {
      const text = stripAccents(items[i].textContent.toLowerCase());
      const match = text.includes(query);
      items[i].style.display = match ? "" : "none";
      if (match) hasVisible = true;
    }
  }
  if (lastSep) lastSep.style.display = hasVisible ? "" : "none";
}

function randomIndex(max, exclude) {
  if (max <= 1) return 0;
  let idx;
  do {
    idx = Math.floor(Math.random() * max);
  } while (idx === exclude);
  return idx;
}

function fitNameSize() {
  const maxWidth = displayContainer.clientWidth - 64;
  let size = Math.min(window.innerWidth * 0.14, 128);
  nameDisplay.style.fontSize = size + "px";

  while (nameDisplay.scrollWidth > maxWidth && size > 24) {
    size -= 2;
    nameDisplay.style.fontSize = size + "px";
  }

  subtitleDisplay.style.fontSize = Math.max(size * 0.3, 16) + "px";
}

function applyName(index) {
  const familia = FAMILIAS[index];
  nameDisplay.textContent = familia.name;
  subtitleDisplay.textContent = familia.subtitle || "\u00A0";

  currentColorIndex = randomIndex(COLORS.length, currentColorIndex);
  const color = COLORS[currentColorIndex];
  document.documentElement.style.backgroundColor = color.bg;
  document.body.style.backgroundColor = color.bg;
  document.body.style.color = color.text;

  fitNameSize();
}

function showName(index) {
  nameWrapper.classList.add("fading");

  setTimeout(() => {
    applyName(index);
    nameWrapper.classList.remove("fading");
  }, FADE_MS);
}

function showRandom() {
  currentIndex = randomIndex(FAMILIAS.length, currentIndex);
  showName(currentIndex);
}

function resetTimer() {
  clearInterval(timer);
  if (!paused) {
    timer = setInterval(showRandom, CYCLE_MS);
  }
}

function togglePause() {
  paused = !paused;
  btnPause.textContent = paused ? "\u25B6\uFE0E" : "\u23F8\uFE0E";
  if (paused) {
    clearInterval(timer);
  } else {
    timer = setInterval(showRandom, CYCLE_MS);
  }
}

function showOverlay(el) {
  clearInterval(timer);
  el.hidden = false;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => { el.classList.add("visible"); });
  });
}

function hideOverlay(el) {
  el.classList.remove("visible");
  el.addEventListener("transitionend", () => {
    el.hidden = true;
    if (!paused) resetTimer();
  }, { once: true });
}

function jumpToName(index) {
  currentIndex = index;
  showName(index);
  searchInput.value = "";
  filterList();
  hideOverlay(overlay);
}

function buildList() {
  let currentLetter = "";
  FAMILIAS.forEach((familia, i) => {
    const firstLetter = stripAccents(familia.name.charAt(0).toUpperCase());
    if (firstLetter !== currentLetter) {
      currentLetter = firstLetter;
      const sep = document.createElement("li");
      sep.className = "list-separator";
      sep.textContent = currentLetter;
      namesList.appendChild(sep);
    }

    const li = document.createElement("li");
    const nameSpan = document.createElement("span");
    nameSpan.className = "list-name";
    nameSpan.textContent = familia.name;
    li.appendChild(nameSpan);

    if (familia.subtitle) {
      const subSpan = document.createElement("span");
      subSpan.className = "list-subtitle";
      subSpan.textContent = familia.subtitle;
      li.appendChild(subSpan);
    }

    li.addEventListener("click", () => jumpToName(i));
    namesList.appendChild(li);
  });
}

// Event listeners
btnNext.addEventListener("click", (e) => {
  e.stopPropagation();
  showRandom();
  resetTimer();
});

btnPause.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePause();
});

btnShowAll.addEventListener("click", (e) => {
  e.stopPropagation();
  showOverlay(overlay);
});

btnClose.addEventListener("click", () => {
  searchInput.value = "";
  filterList();
  hideOverlay(overlay);
});

searchInput.addEventListener("input", filterList);

displayContainer.addEventListener("click", () => {
  showRandom();
  resetTimer();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !infoOverlay.hidden) {
    hideOverlay(infoOverlay);
  } else if (e.key === "Escape" && !overlay.hidden) {
    searchInput.value = "";
    filterList();
    hideOverlay(overlay);
  } else if (e.key === "ArrowRight" || e.key === " ") {
    if (overlay.hidden && infoOverlay.hidden) {
      e.preventDefault();
      showRandom();
      resetTimer();
    }
  }
});

window.addEventListener("resize", fitNameSize);

// Info overlay
btnInfo.addEventListener("click", (e) => {
  e.stopPropagation();
  showOverlay(infoOverlay);
});

btnInfoClose.addEventListener("click", () => { hideOverlay(infoOverlay); });

// Init — show first name instantly (no fade)
document.getElementById("totalCount").textContent = FAMILIAS.length;
document.getElementById("headerCount").textContent = "(" + FAMILIAS.length + ")";
buildList();
currentIndex = randomIndex(FAMILIAS.length, currentIndex);
applyName(currentIndex);
timer = setInterval(showRandom, CYCLE_MS);
