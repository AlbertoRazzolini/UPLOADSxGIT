const now = new Date();
const getYear = now.getFullYear();
const getMonth = now.getMonth();

const monthNames = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

const dayNames = [
  "Domenica",
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
];

// Scriviamo il nome del mese
const printCurrentMonth = () => {
  const title = document.querySelector("h1");
  const currentMonth = monthNames[getMonth];
  title.textContent = currentMonth;
};

printCurrentMonth();

const daysInMonth = () => {
  const lastDay = new Date(getYear, getMonth + 1, 0); // gli stiamo chiedendo il giorno 0 del mese successivo, ad esempio lo 0 giugno 2026, che sarà il 31 Maggio
  const numberOfDays = lastDay.getDate();
  return numberOfDays;
};

daysInMonth();

// Creiamo la griglia
const createDays = (daysNumber) => {
  const calendarDiv = document.querySelector("#calendar");
  for (let i = 1; i <= daysNumber; i++) {
    const dayCellDiv = document.createElement("div");
    dayCellDiv.classList.add("day");
    // le celle dovranno essere cliccabili - DA FARE

    // creiamo il giorno
    const cellValue = document.createElement("h3");
    const thisDate = i;
    // evidenziamo il giorno corrente
    if (thisDate === now.getDate()) {
      dayCellDiv.classList.add("currentDay");
    }
    // scriviamo le domeniche in rosso
    let thisDay = new Date(getYear, getMonth, thisDate);
    if (thisDay.getDay() === 0) {
      cellValue.classList.add("sunday");
    }
    // scriviamo il nome del giorno
    let dayNumber = thisDay.getDay();
    let dayName = dayNames[dayNumber];
    cellValue.textContent = `${dayName} ${i}`;
    dayCellDiv.appendChild(cellValue);
    calendarDiv.appendChild(dayCellDiv);
  }
};

createDays(daysInMonth());
