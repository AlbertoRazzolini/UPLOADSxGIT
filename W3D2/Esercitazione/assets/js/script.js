/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

const lista = document.querySelector("#lista-task");
const contatore = document.querySelector("#contatore");

function aggiungiTask(testo, priorita) {
  const li = document.createElement("li");
  li.textContent = `${priorita} ${testo} - ${data()}`;
  creaBottone(li);
  lista.appendChild(li);
  aggiornaContatore();
}

function aggiornaContatore() {
  const tasks = lista.querySelectorAll("li");
  contatore.textContent = tasks.length;
}

aggiungiTask("Studiare JavaScript", "alta");
aggiungiTask("Bere il caffé", "alta");
aggiungiTask("Riposarsi", "media");

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   3. evidenzia(indice) / togliEvidenza(indice)
   4. data automatica nel task
   5. contaPerPriorita()
*/

aggiungiTask("Alcolizzarsi", "alta");
aggiungiTask("Scaccolarsi", "bassa");

function data() {
  const data = new Date().toLocaleString("it-IT");
  return data;
}

function creaBottone(li) {
  const btn = document.createElement("button");
  btn.textContent = "Elimina";
  btn.classList.add("button");
  li.appendChild(btn);
  btn.addEventListener("click", () => {
    li.remove();
    aggiornaContatore();
  });
}

function evidenzia(indice) {
  const tasks = lista.querySelectorAll("li");
  tasks[indice].classList.add("evidenziato");
}

function togliEvidenza(indice) {
  const tasks = lista.querySelectorAll("li");
  tasks[indice].classList.remove("evidenziato");
}

function contaPerPriorita() {
  const alta = lista.querySelectorAll(".priorita-alta");
  const media = lista.querySelectorAll(".priorita-media");
  const bassa = lista.querySelectorAll(".priorita-bassa");
}
