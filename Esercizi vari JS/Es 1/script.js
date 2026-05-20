// Scrivi un programma che utilizzi un template literal per calcolare e stampare il risultato di una somma tra due variabili sulla console.
let num1 = 7;
let num2 = 4;
let sum = num1 + num2;

console.log(`La somma dei due numeri è ${sum}`);

// Scrivi un programma che utilizzi un template literal per mostrare nome, età e città di una persona su diverse righe in console.

let nome = "Mario";
let eta = 47;
let citta = "Firenze";

console.log(`
    Nome: ${nome}
    Età: ${eta}
    Città: ${citta}
    `);

// Scrivi un codice che ottenga la data corrente e la visualizzi in console.

let currentDate = new Date();

console.log(`Data corrente: ${currentDate}`);

// Scrivi un programma che stampi sulla console tutte le proprietà di un oggetto.

const persona = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 48,
  professione: "fravecatore",
};

for (let chiave in persona) {
  console.log(`chiave: ${persona[chiave]}`);
}

// Scrivi un programma che confronti le proprietà di due oggetti e stampi sulla console se le proprietà corrispondenti hanno lo stesso valore.

const oggetto1 = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 48,
  professione: "fravecatore",
};

const oggetto2 = {
  nome: "Mario",
  cognome: "Gesualdoschi",
  eta: 27,
  professione: "fravecatore",
};

for (let chiave in oggetto1) {
  if (oggetto1[chiave] === oggetto2[chiave]) {
    console.log(`${chiave} ha lo stesso valore per entrambi`);
  }
  {
    console.log(`${chiave} non hanno lo stesso valore`);
  }
}

