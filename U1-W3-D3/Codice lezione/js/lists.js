const staticList = document.querySelector("#staticList");

staticList.addEventListener("click", (e) => {
  console.log(`E stato cliccato il button numero ${e.target.id}`);
  staticList.removeChild(e.target.parentElement);
});

document.getElementById("figlio").addEventListener("click", (e) => {
  console.log("Hai cliccato su figlio e non succederà nulla sui parent");
});

console.log(location.href);
