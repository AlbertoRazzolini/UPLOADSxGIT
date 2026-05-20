/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const nome = "Alberto";
const cognome = "Razzolini";
console.log(`Ciao, mi chiamo ${nome} ${cognome}`);

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const a = 10;
const b = 3;
const somma = a + b;
const differenza = a - b;
const prodotto = a * b;
const divisione = a / b;
const resto = a % b;
const elevamento = a ** b;
console.log(somma);
console.log(differenza);
console.log(prodotto);
console.log(divisione);
console.log(resto);
console.log(elevamento);

/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const annoNascita = 1992;
const annoCorrente = 2026;
const etaOggi = annoCorrente - annoNascita;
const etaTra10 = etaOggi + 10;
const eta5fa = etaOggi - 5;
console.log(etaOggi);
console.log(etaTra10);
console.log(eta5fa);

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let eta;
const maggiorenne = (eta) => 18;

if (maggiorenne) {
  console.log(`Eta: ${eta} - Maggiorenne: ${maggiorenne}`);
}
/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let stringa = "Porco";
let numero = 22;
let valoreBoolean = true;
let valoreNull = null;
let valoreUndefined;
console.log(`nome è di tipo ${typeof stringa}`);
console.log(`nome è di tipo ${typeof numero}`);
console.log(`nome è di tipo ${typeof valoreBoolean}`);
console.log(`nome è di tipo ${typeof valoreNull}`);
console.log(`nome è di tipo ${typeof valoreUndefined}`);

/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numerone = 5;
const stringona = "5";
console.log(numerone == stringona);
console.log(numerone === stringona);
/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3
   - "5" - 3
   - true + 1
   - "10" * "2"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n = 14;
const divisibile2 = n % 2;
const divisibile3 = n % 3;
if (divisibile2 === 0) {
  console.log(`n è pari: true`);
} else {
  console.log(`n è dispari: false`);
}

if (divisibile3 === 0) {
  console.log(`n è pari: true`);
} else {
  console.log(`n è dispari: false`);
}

if (divisibile2 === 0 && divisibile3 === 0) {
  console.log(`n è pari: true`);
} else {
  console.log(`n è dispari: false`);
}
/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const a;
const b;
const c;
const perimetro = a + b + c;
if (a === b && b === c) {
  console.log(`Triangolo equilatero, perimetro ${perimetro}`);
}
if (a === b && b !== c) {
  console.log(`Triangolo equilatero, perimetro ${perimetro}`);
}
