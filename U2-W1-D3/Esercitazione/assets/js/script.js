const overlay = document.getElementById("overlay-contatti");

document
  .getElementById("apri-contatti")
  .addEventListener("click", function (e) {
    overlay.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
  });

document
  .getElementById("chiudi-contatti")
  .addEventListener("click", function (e) {
    overlay.setAttribute("hidden", "");
    document.body.style.overflow = "";
  });

overlay.addEventListener("click", function (event) {
  if (event.target === overlay) {
    overlay.setAttribute("hidden", "");
    document.body.style.overflow = "";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlay.setAttribute("hidden", "");
    document.body.style.overflow = "";
  }
});

document.querySelector(".modal form").addEventListener("submit", function (e) {
  e.preventDefault();
  overlay.setAttribute("hidden", "");
  document.body.style.overflow = "";

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const motivo = document.getElementById("motivo").value;
  const data = document.getElementById("data").value;
  const messaggio = document.getElementById("messaggio").value;

  const riepilogo = document.getElementById("riepilogo-contatto");
  riepilogo.textContent = "";

  const titolo = document.createElement("h3");
  titolo.textContent = "Registrazione";
  riepilogo.appendChild(titolo);

  const campi = [
    ["Nome", nome],
    ["Email", email],
    ["Motivo", motivo],
    ...(data ? [["Data preferita", data]] : []),
    ["Messaggio", messaggio],
  ];

  campi.forEach(([etichetta, valore]) => {
    const p = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = etichetta + ": ";
    p.appendChild(strong);
    p.appendChild(document.createTextNode(valore));
    riepilogo.appendChild(p);
  });

  riepilogo.removeAttribute("hidden");
});
