// Mini-libreria — Settimana VII Giorno I
//
// Devi fare 4 cose:
// 1. Definire una classe Libro (titolo, autore, anno, letto)
// 2. Definire una classe LibroDigitale che estende Libro (aggiunge formato, dimensioneMb)
// 3. Aggiungere un listener al form che crea una nuova istanza e la aggiunge all'array
// 4. Renderizzare la lista nel <ul id="lista-libri"> via innerHTML
//
// Bonus: bottone "Segna come letto" su ogni elemento, gestito con event delegation.

// === Classi ===
class Libro {
  static contatore = 0; // conta tutte le istanze create (Libro + LibroDigitale)

  constructor(titolo, autore, anno) {
    this.titolo = titolo;
    this.autore = autore;
    this.anno = anno;
    this.letto = false;
    Libro.contatore++;
  }

  segnaComeLetto() {
    this.letto = true;
  }

  get formatoLabel() {
    return "cartaceo";
  }
}

class LibroDigitale extends Libro {
  constructor(titolo, autore, anno, dimensioneMb) {
    super(titolo, autore, anno);
    this.dimensioneMb = dimensioneMb;
  }

  get formatoLabel() {
    return `digitale (${this.dimensioneMb} MB)`;
  }
}

// === Stato (array di libri) ===

const libri = [];


// === Render ===

const libroTpl = document.getElementById("libro-tpl");
const listaLibri = document.getElementById("lista-libri");
const titoloLista = document.getElementById("titolo-lista");

function render() {
  listaLibri.replaceChildren();
  titoloLista.textContent = `I tuoi libri (${libri.length})`;

  libri.forEach((libro, indice) => {
    const clone = libroTpl.content.cloneNode(true);

    clone.querySelector(".libro-nome").textContent = libro.titolo;
    clone.querySelector(".badge-formato").textContent = libro.formatoLabel;
    clone.querySelector(".libro-meta").textContent = `${libro.autore} — ${libro.anno}`;

    const li = clone.querySelector(".libro-item");
    const btn = clone.querySelector(".btn-segna");

    if (libro.letto) {
      li.classList.add("letto");
      const stato = document.createElement("span");
      stato.className = "stato-letto";
      stato.textContent = "✓ letto";
      btn.replaceWith(stato);
    } else {
      btn.dataset.indice = indice;
    }

    listaLibri.appendChild(clone);
  });
}


// === Eventi ===

const form = document.getElementById("form-libro");
const formatoSelect = document.getElementById("formato");
const campMb = document.getElementById("campo-mb");

formatoSelect.addEventListener("change", function () {
  campMb.classList.toggle("nascosto", formatoSelect.value !== "digitale");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // .trim() rimuove gli spazi accidentali all'inizio e alla fine ("  ciao  " → "ciao")
  const titolo = document.getElementById("titolo").value.trim();
  const autore = document.getElementById("autore").value.trim();
  // parseInt() converte la stringa del DOM in numero intero (il DOM restituisce sempre stringhe)
  const anno = parseInt(document.getElementById("anno").value);
  const formato = formatoSelect.value;

  let libro;
  if (formato === "digitale") {
    // parseFloat() come parseInt() ma accetta i decimali (es. 3.5 MB)
    const mb = parseFloat(document.getElementById("dimensione-mb").value) || 0;
    libro = new LibroDigitale(titolo, autore, anno, mb);
  } else {
    libro = new Libro(titolo, autore, anno);
  }

  libri.push(libro);
  render();
  form.reset();
  campMb.classList.add("nascosto");
});

listaLibri.addEventListener("click", function (event) {
  const btn = event.target.closest(".btn-segna");
  // se il click non era sul bottone, closest() restituisce null → usciamo subito
  if (btn === null) return;
  const indice = parseInt(btn.dataset.indice);
  libri[indice].segnaComeLetto();
  render();
});
