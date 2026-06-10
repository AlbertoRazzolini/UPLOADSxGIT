const persona = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 33,
  attivo: true,
  num_corsi: 3,
};

console.log(typeof persona);
console.table(persona); //serve per vedere, in console, il contenuto di un oggetto
console.log(`La persona ha ${persona.eta} anni`);

persona.attivo = false; // I valori delle proprietà degli oggetti possono cambiare senza che l'oggetto cambi natura

console.table(persona);

persona.citta = "Milano";

console.table(persona);

delete persona.attivo;

console.table(persona);

// persona = 'Pippo' Non è possibile trasformare la costante oggetto in qualcos'altro

console.log(persona["num_corsi"]);

const myKey = "nome";
console.log(myKey); // mi rende nome
console.log(persona[myKey]); // mi rende valore

const studente = {
    nome: 'Aldo'
    cognome: 'Bianchi'
    eta: 28
    indirizzo: {
        via: 'Roma'       //  
        civico: 20        // Annidamento
        cap: 10100        //
        citta: 'Torino'   //
    }
    numCorsi: 3
    attivo: true
}

console.log(`
    Lo studente ${studente.nome} ${studente.cognome} abita a ${studente.indirizzo.citta}
    `);
console.table(studente);

// Array
const colors = ['rosso', 'verde', 'blu', 'giallo', 'nero'];
const numbers = [8, 15, 12, 7, 6, 10, 21];
const names = ['Mario', 'Aldo', 'Giovanna', 'Maria'];
const mixedArray = [
    'Nicola',
    25,
    {via: 'Roma', civico: 25, citta: 'Napoli'},
    true,
];

console.log(typeof colors);

console.table(colors);
console.table(numbers);
console.table(names);
console.table(mixedArray);

console.log(colors[1]); // stampo il valore dell'indice
console.log(mixedArray[2].citta); // per stampare valore annidato, prendo prima l'indice e poi la proprietà che desidero stampare

console.log(colors.length); // mi dà la lunghezza dell'array
console.log(names[names - 1]); // mi seleziona solo l'ultimo valore

colors.length = 2 // modifico la lunghezza dell'array (pericoloso perché elimina valori che non sono recuperabili)
console.log(colors);

names[1] = 'Pippo'; // modifico il valore di un indice dell'array
console.log(names);

names[8] = 'Paperino';
console.log(names); // aggiunge posizioni di indici di valore vuoto (undefined)

colors.push('marrone');
console.log(colors);

let deletedColor = colors.pop('marrone'); // deleta un valore ma è recuperabile, "lo salva in memoria"
console.log(deletedColor);

console.log(`La posizione del numero 6 è ${numbers.indexOf(6)}`);
numbers.unshift(25);
console.log(numbers);
console.log(`La posizione del numero 6 è ${numbers.indexOf(6)}`);

let deletedNumber = numbers.shift();
console.log(deletedNumber);
console.log(numbers);
console.log(`La posizione del numero 6 è ${numbers.indexOf(6)}`);

names.length = 4;
// splice
// Eliminazione degli elementi con indice 1 e 2 dall'array names
names.splice(1, 2);
console.log(names);

// Inserimento di due elementi in posizione specifica
names.splice(1, 0, 'Francesca', 'Nicola');
console.log(names);

// Nuovo array con splice
names.push('Valentina', 'Alberto', 'Lorenzo', 'Angelo');
const deletedNames = names.splice(3, 3);
console.log(`Nomi cancellati: ${deletedNames}`);
console.log(`Nuovo array names: ${names}`);

console.log(names.indexOf('Mario'));

// Iterazione dell'array
for (let i = 0; i < names.length; i++) {
	console.log(names[i]);
}

// Pattern
const carrello = [
	{
		articleName: 'mouse',
		category: 'accessories',
		price: 30,
		available: false,
	},
	{
		articleName: 'monitor',
		category: 'hardware',
		price: 110,
		available: true,
	},
	{
		articleName: 'keyboard',
		category: 'accessories',
		price: 20,
		available: true,
	},
];

console.log('*******************************************');
console.log('Carrello:');
for (let i = 0; i < carrello.length; i++) {
	console.log(`Articolo: ${carrello[i].articleName}`);
	console.log(`Categoria: ${carrello[i].category}`);
	console.log(`Prezzo: ${carrello[i].price}`);
	console.log(`Disponibile: ${carrello[i].available}`);
	console.log('-');
}

carrello.push({
	articleName: 'Stampante',
	category: 'hardware',
	price: 150,
	available: false,
});

console.log('*******************************************');
console.log('Carrello:');
for (let i = 0; i < carrello.length; i++) {
	console.log(`Articolo: ${carrello[i].articleName}`);
	console.log(`Categoria: ${carrello[i].category}`);
	console.log(`Prezzo: ${carrello[i].price}`);
	console.log(`Disponibile: ${carrello[i].available}`);
	console.log('-');
}

carrello.splice(1, 1);
console.log('*******************************************');
console.log('Carrello:');
for (let i = 0; i < carrello.length; i++) {
	console.log(`Articolo: ${carrello[i].articleName}`);
	console.log(`Categoria: ${carrello[i].category}`);
	console.log(`Prezzo: ${carrello[i].price}`);
	console.log(`Disponibile: ${carrello[i].available}`);
	console.log('-');
}

console.log('*******************************************');

// if/else if/else
let eta = 15;
if (eta >= 18) {
	console.log('Sei maggiorenne');
}

let voto = 16;
if (voto >= 18) {
	console.log('Promosso');
} else {
	console.log('Bocciato');
}

let availability = 0;
if (availability >= 20) {
	console.log('Disponibile');
} else if (availability >= 10 && availability < 20) {
	console.log('Necessita fornitura');
} else if (availability >= 1 && availability < 10) {
	console.log('In esaurimento');
} else {
	console.log('Non disponibile');
}

// Carrello condizionato
console.log('*******************************************');
console.log('Carrello:');
for (let i = 0; i < carrello.length; i++) {
	if (carrello[i].available === true) {
		console.log(`Articolo: ${carrello[i].articleName}`);
		console.log(`Categoria: ${carrello[i].category}`);
		console.log(`Prezzo: ${carrello[i].price}`);
		console.log('-');
	} else {
		console.log(`Articolo ${carrello[i].articleName} non disponibile`);
		console.log('-');
	}
}

// Errore di assegnazione
let myValue = 5;
if ((myValue = 10)) {
	console.log('Il mio valore è 10');
} else {
	console.log(`Il mio valore è ${myValue}`);
}

// Operatore ternario
let frequency = true;
const active = frequency === true ? 'Frequentante' : 'Non frequentante';
console.log(active);

// Operatori logici
let personAge = 17;
let personCan = true;

if (personAge < 18 || !personCan) {
    console.log('Non può guidare');
} else {
    console.log('Può guidare');
}

let abbonato = true;
if (personAge >= 18 && abbonato) {
    console.log('Può entrare');
} else {
    console.log('Non può entrare');
}