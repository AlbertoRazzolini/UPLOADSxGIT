// FUNZIONI

function sum() {
  let a = 2;
  let b = 3;
  return a + b;
}
console.log(sum());

function newSum() {
  let a = 5;
  return a + sum();
  console.log(sum()); // Io non apparirò
}
console.log(newSum());

const moltiplicazione = function (num1, num2 /*parametri*/) {
  return num1 * num2;
};
console.log(moltiplicazione(3, 4 /*argomenti*/)); // Chiamata della funzione

const regard = function (name = "Non so chi salutare") {
  print(name);
};

const checkError = function (name) {
  if (name === "Non so chi salutare") {
    return false;
  } else {
    /*posso ottimizzzare levando l'else*/
    return true;
  }
};

const print = function (name) {
  if (checkError(name)) {
    document.querySelector("#Saluta").textContent += name; // Per i booleani, per es. (checkError(name)), se scritto così è true, sennò !(checkError(name)) false
  } else {
    document.getElementById("Saluta").textContent = name;
  }
};

regard("Pippo");

const listElements = document.querySelectorAll("#firstList li");
console.log(listElements);

const colorElements = function () {
  for (let i = 0; i < listElements.length; i++) {
    listElements[i].classList.add("listElements");
  }
};

// Closure
function creaContatore() {
  let count = 0;
  return function () {          // questa si chiama closure
    count++;
    return count;
  };
}
const contatore = creaContatore();
console.log(contatore());


let myName = 'Alberto Razzolini';
console.log(myName.includes('Razzolini')); // ritornerà true

//se dico
console.log(myName.indexOf('Al'));       // i caratteri di una stringa si contano come in un array, indexOf prende solo il primo indice

console.log(myName.slice(-))

const myNameArray = myName.split();       // nella parentesi indico il separatore, se vuoto splitto le lettere, con ('') prendo le parole
console.log(myNameArray);

let myNameJoined = myNameArray.join().replaceAll(',', ' ');  // si chiama chaining-method
console.log(myNameJoined);

const today = new Date();                  // legge data e fuso orario del sistema
console.log(today);
console.log(today.getDate(), today.getDay(), today.getFullYear());

const myBirthday = new Date(1992 , 4, 31)  // i mesi sono 0-based, quindi partono da 0
console.log(myBirthday);

//  Math
let myAbs = Math.abs(-12);
console.log(myAbs);

let myMaxNumber = Math.max(12, 21, 3);      // uguale per min
console.log(myMaxNumber);

// Math.random da 1 a
let myCasualNumber = Math.floor(Math.random() * 11);   // metto 11 perché deve comprendere fino a 10.99, posso usare anche math.round con 10 ma la convenzione è math.floor
console.log(myCasualNumber);