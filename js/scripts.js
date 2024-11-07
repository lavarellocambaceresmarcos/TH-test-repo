// Data import
import { getProducts } from "./products.service.js";

//* Hamburger menu*//
document
  .querySelector(".hamburger_menu_button")
  .addEventListener("click", () => {
    if (
      !document
        .querySelector(".hamburger_menu_button")
        .classList.contains("open")
    ) {
      const menu = document.querySelector(".hamburger_menu_button");
      menu.classList.toggle("open");
      document.querySelector(".nav_links").classList.toggle("open");
    } else {
      document.querySelector(".hamburger_menu_button").classList.remove("open");
      document.querySelector(".nav_links").classList.remove("open");
    }
  });

//Data fetch
async function displayProducts() {
  await getProducts().then((data) => {
    data.forEach((product) => {
      const card = document.createElement("div");

      card.classList.add("card", "hidden");

      card.innerHTML = `
        <img src="${product.image}" alt="${product.title} image" class="card_img">
        <div class="card_body">
          <h3 class="card_title">${product.title}</h3>
          <p class="card_desc">${product.desc}</p>  
          <button class="card_button" aria-label="Show and hide button">Show card content</button>
        </div>
      `;

      document.querySelector(".mainContainer_cardsContainer").appendChild(card);
    });

    // Toggle buttons

    const toggleButtons = document.querySelectorAll(".card_button");
    const bodyTexts = document.querySelectorAll(".card_desc");
    const Cards = document.querySelectorAll(".card");

    toggleButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        if (Cards[index].classList.contains("hidden")) {
          button.textContent = `Hide card content`;
          Cards[index].classList.remove("hidden");
        } else {
          Cards[index].classList.add("hidden");
          button.textContent = `Show card content`;
        }
      });
    });
  });
}

displayProducts();
