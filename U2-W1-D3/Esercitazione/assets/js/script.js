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
  riepilogo.innerHTML = `
    <h3>Registrazione</h3>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Motivo:</strong> ${motivo}</p>
    ${data ? `<p><strong>Data preferita:</strong> ${data}</p>` : ""}
    <p><strong>Messaggio:</strong> ${messaggio}</p>
  `;
  riepilogo.removeAttribute("hidden");
});
