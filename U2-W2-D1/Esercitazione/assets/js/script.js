const products = [
  {
    id: "prodotto-1",
    name: "Sneakers",
    price: "100tordici €",
    modalPrice: "Troppisoldi",
    img: "https://cdn.shopify.com/s/files/1/0016/7031/6081/products/S322500244-1_749ab485-3da1-4a50-87e7-2b1267323f0a_600x.jpg?v=1678705097",
    description: "Uagliò...chist su belle fuort, ch'aspett a ziccarl!",
  },
  {
    id: "prodotto-2",
    name: "T-shirt basic",
    price: "100tordicimila €",
    modalPrice: "Troppisoldi+1",
    img: "https://www.grundstoff.net/media/image/a8/df/13/tshirt-frauen-weiss-white-bio-baumwolle-nachhaltige-herstellung-W173-001_600x600.jpg",
    description:
      "T-shirt bianca...basic...molto bianca...molto basic...be a basic biiiiiiatch! LOCO LOCO",
  },
  {
    id: "prodotto-3",
    name: "Borsa City",
    price: "100tordicimilamiliardi €",
    modalPrice: "Troppisoldi+tuamadre",
    img: "https://www.stilema.com/1083-thickbox_default/borsa-city.jpg",
    description:
      "Questa è una borsa espevienza che tesoooooovo ti stavebbe daddio! Lookala! Uarala quant'è bella! UARA!",
  },
];

const cardTpl = document.getElementById("card-tpl");
const modalTpl = document.getElementById("modal-tpl");
const grid = document.getElementById("products-grid");

products.forEach((product) => {
  // Card
  const card = cardTpl.content.cloneNode(true);
  const cardImg = card.querySelector(".product-img");
  cardImg.setAttribute("src", product.img);
  cardImg.setAttribute("alt", product.name);
  card.querySelector(".product-name").textContent = product.name;
  card.querySelector(".product-price").textContent = product.price;
  card
    .querySelector("[data-bs-toggle='modal']")
    .setAttribute("data-bs-target", `#${product.id}`);
  grid.appendChild(card);

  // Modal
  const modal = modalTpl.content.cloneNode(true);
  modal.querySelector(".modal").setAttribute("id", product.id);
  const modalImg = modal.querySelector(".product-img");
  modalImg.setAttribute("src", product.img);
  modalImg.setAttribute("alt", product.name);
  modal.querySelector(".product-name").textContent = product.name;
  modal.querySelector(".product-desc").textContent = product.description;
  modal.querySelector(".product-price").textContent = product.modalPrice;
  document.body.appendChild(modal);
});

const toggle = document.getElementById("toggle-tema");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark")
    ? "Tema chiaro"
    : "Tema scuro";
});
