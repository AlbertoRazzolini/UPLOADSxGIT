//1
const nome = "Alberto";
const cogome = "Razzolini";
console.log(`Mi chiamo ${nome} ${cogome}`);
//2
const a = 10;
const b = 3;
console.log(`somma ${a + b}`);
console.log(`differenza ${a - b}`);
console.log(`prodotto ${a * b}`);
console.log(`quoziente ${a / b}`);
console.log(`resto ${a % b}`);
console.log(`potenza ${a ** b}`);
//3
const annoNascita = 1992;
const annoCorrente = 2026;
const myAge = annoCorrente - annoNascita;
console.log(`età oggi ${annoCorrente - annoNascita}`);
console.log(`età tra 10 anni ${myAge + 10}`);
console.log(`età 5 anni fa ${myAge - 5}`);
//4
let eta = 33;
let maggiorenne = eta >= 18;
console.log(`maggiorenne? ${eta >= 18}`);
//5
let variabileString = "string";
let variabileNumber = 2;
let variabileBoolean = true;
let variabileNull = null;
let variabileUndefined = undefined;
console.log(`variableString è di tipo: ${typeof variabileString}`);
console.log(`variableBoolean è di tipo: ${typeof variabileBoolean}`);
console.log(`variableNumber è di tipo: ${typeof variabileNumber}`);
console.log(`variableNull è di tipo: ${typeof variabileNull}`);
console.log(`variableUndefined è di tipo: ${typeof variabileUndefined}`);
//6
let numero = 5;
let stringa = "5";
console.log(`numero uguaglianza stringa: ${numero == stringa}`);
console.log(`numero identità stringa: ${numero === stringa}`);
//7
console.log("5" + 3);
console.log("5" - 3);
console.log(true + 1);
console.log("10" * "2");
//8
let n = 16;
console.log(`n è pari: ${n % 2 === 0}`);
console.log(`n è divisibile per 3: ${n % 3 === 0}`);
console.log(`n è pari ed è divisibile per 3: ${n % 2 === 0 && n % 3 === 0}`);
//9
