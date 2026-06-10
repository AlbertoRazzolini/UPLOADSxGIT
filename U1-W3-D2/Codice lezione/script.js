const subTitle = document.querySelector("#subTitle");
const firstLi = document.querySelector("ul li:first-child");
const lastLi = document.querySelector("ul li:last-child");
const createList = document.querySelector("#createList");
const comboList = document.querySelector("#comboList");
const comboListOption = document.querySelectorAll("#comboList option");
const pexelsImage = document.querySelector("#pexelsImage");
const interruttore = document.querySelector("#interruttore");
const newTable = document.querySelector("#newTable");

console.log(document.getElementsByTagName("li"));
console.log(document.querySelectorAll("li"));

if (classContain) {
  subTitle.classList.remove("redText");
}

pexelsImage.classList.add("image");

interruttore.addEventListener("click", () => {
  interruttore.classList.toggle("yellowBg");
});

const innerIcon = document.createElement("img");
innerIcon.setAttribute(
  "src",
  "https://cdn.iconscout.com/icon/free/png-256/free-linkedin-logo-icon-svg-download-png-83438.png?f=webp&w=128",
);
innerIcon.classList.add("icon");
interruttore.appendChild(innerIcon);

const namesArray = [
  {
    userName: "Mario",
    userSurname: "Rossi",
    age: 26,
  },
  {
    userName: "Aldo",
    userSurname: "Bianchi",
    age: 30,
  },
  {
    userName: "Giovanna",
    userSurname: "Verdi",
    age: 23,
  },
];

const table = document.createElement("table");
const tbody = document.createElement("tbody");

for (let i = 0; i < namesArray.length; i++) {
  const tr = document.createElement("tr");
  const firstTd = document.createElement("td");
  firstTd.textContent = namesArray[i].userName;
  tr.appendChild(firstTd);
  const secondTd = document.createElement("td");
  secondTd.textContent = namesArray[i].userSurname;
  tr.appendChild(secondTd);
  const thirdTd = document.createElement("td");
  thirdTd.textContent = namesArray[i].age;
  tr.appendChild(thirdTd);
  tbody.appendChild(tr);
}

table.appendChild(tbody);
newTable.appendChild(table);
