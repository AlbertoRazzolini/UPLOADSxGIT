const colori = ["rosso", "verde", "giallo", "blu"];

for (const colore of colori) {
  console.log(colore);
}

const persona = {
  nome: "Mario",
  cognome: "Rossi", // se volessi sapere le vhiavi di questo oggetto (quindi chiavi ignote)
  era: 25,
  attivo: true,
};

for (const key in persona) {
  console.log(key);
  console.log(`${key}: ${persona[key]}`);
}

// while - while
console.log("***********************************************");
console.log(`----while----`);
let x = 0;
while (x <= 10) {
  console.log(x);
  x++;
}
console.log(`----do/while----`);
let y = 0;
do {
  console.log(y);
  y++;
} while (y <= 10);

// condizione di blocco non numerica
console.log("***********************************************");
const names = ["Mario", "Giovanna", "Nicola", "Maria", "Elena"];

let stop = false;
let i = 0;
while (stop === false) {
  console.log(names[i]);
  if (names[i] === "Maria") {
    // Includo il valore al quale si deve fermare
    stop = true;
  }
  i++;
}
// altro modo
let alt = "Maria";
let z = 0;

while (names[z] !== "Maria") {
  console.log(names[z]); // 'Maria' non lo stampa proprio, quindi escludo il valore al quale si deve fermare
  z++;
}

console.log("***********************************************");
//come fare più cicli
const addNames = ["Pippo", "Pluto", "Paperino"];

for (let i = 0; i <= 2; i++) {
  console.log(`CICLO NUMERO $[i]`);
  names.push(addnames[i]);
  let b = 0;
  while (b < names.lenght) {
    // finché non viene completato il blocco più interno, il blocco esterno non parte
    console.log(names[b]);
    b++;
  }
}

console.log("***********************************************");
// break / continue
const numbers = [1, 25, 38, 12, 41, 75];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  if (numbers[i] > 30) {
    console.log(`Trovato ${numbers[i]} che è maggiore di 30`);
    break;
  }
}

const students = [
  {
    name: "Mario Rossi",
    iscritto: true,
  },
  {
    name: "Aldo Bianchi",
    iscritto: false,
  },
  {
    name: "Giovanna Neri",
    iscritto: false,
  },
  {
    name: "Maria Verdi",
    iscritto: true,
  },
  {
    name: "Nicola Gialli",
    iscritto: true,
  },
  {
    name: "Elena Rossi",
    iscritto: false,
  },
  {
    name: "Antonio Bianchi",
    iscritto: true,
  },
  {
    name: "Francesca Verdi",
    iscritto: false,
  },
];

for (let i = 0; i < students.length; i++) {
  if (student[i].iscritto === true) continue;
  console.log(`Lo studente $[students[i].name}non risulta ancora iscritto`);
}

console.log("***********************************************");
// Ciclo annidato

let maggiore = 0;
for (let i = 0; i < numbers.lenght; i++) {
  if (numbers[i] > maggiore) {
    maggiore = numbers[i];
  }
}

console.log(`Il numero maggiore [${maggiore}]`);

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let today = "Thursday";

switch (today) {
  case "Monday":
    console.log(`Oggi è Lunedì`);
    break;
  case "Tuesday":
    console.log(`Oggi è Martedì`);
    break;
  case "Wednesday":
    console.log(`Oggi è Lunedì`);
    break;
  case "Tuesday":
    console.log(`Oggi è Lunedì`);
    break;
  case "Tuesday":
    console.log(`Oggi è Lunedì`);
    break;
  case "Tuesday":
    console.log(`Oggi è Lunedì`);
    break;
  case "Tuesday":
    console.log(`Oggi è Lunedì`);
    break;
}

if (today === "Monday") {
  console.log("Oggi è lunedì"); // vedi codice prof
}

let price = 57;

switch (true) {
  case price <= 20:
    console.log(`Il prezzo dell'articolo è ${price}`);
    break;
  case price > 20 && price <= 50:
    console.log(`Il prezzo dell'articolo scontato è ${price - price * 0.1}`);
    break;
  case price > 50 && price <= 80:
    console.log(`Il prezzo dell'articolo scontato è ${price - price * 0.15}`);
    break;
  default:
    console.log(`Il prezzo dell'articolo scontato è ${price - price * 0.2}`);
    break;
}

// Introduzione alla manipolazione del DOM
// Prima ancora delle variabili, all'inizio del mio JS, scrivo tutti gli elementi che devono essere intercettati dal mio JS

const colorsList = document.getElementById("colorsList"); // Sempre in una costante!!!

for (let i = 0; i < colori.lenght; i++) {
  colorsList.innerHTML += `<li class="listElement">${colori[i]}</li>`;
}

console.log(colorsList.innerHTML);

const pageTitle = document.querySelector("#pageTitle");
console.log(pageTitle.textContent);
pageTitle.textContent += `- Cicli, iterazioni e introduzione alla manipolazione del DOM`;

const firstSection = document.querySelector(
  `.container main section: first-of-type h2`,
);
console.log(firstSection.textContent);
firstSection.textContent + -" - Prima lista di elementi";
firstSection.style.color = 'red'
firstSection.
