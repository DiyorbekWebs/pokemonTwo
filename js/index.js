"use strict";
var categories = [];
var categoryElem = [];
const card = document.querySelector("#card");
var select = document.querySelector(".form-select");
var modalBtn = $("#modalBtn");
var closeBtn = $("#closeBtn");
// var tahlash = document.querySelector(".selecter-by-letters");
var searchInput = document.querySelector(".search-pokemone");
var btn = document.querySelector(".btn");
function render(e = []) {
  card.innerHTML = "";
  e.map((i) => {
    var newElem1 = createElement(
      "div",
      "card__item",
      `
    <img class="card__img" src="${i.img}" alt="">
      <hr>
      <div class="card__malumot">
      <h1 class="card__title">${i.name}</h1>
      <div onclick='pushElem(${i.id})'><i class="fa-regular fa-heart"></i></div>
      </div>
      <p class="card__tipe">${i.type}</p>
      <div class="card__text">
      <p class="card__ege">${i.height}</p>
      <p class="card__ef">${i.weight}</p>
      </div>
    `
    );
  card.append(newElem1);
  });
  categoryName();
}
render(pokemons);

function categoryName() {
  pokemons.forEach((i) => {
    i.weaknesses.map((e) => {
      if (!categories.includes(e)) {
        categories.push(e);
      }
    });
  });
  categories.sort();
  categories.map((i) => {
    var newElem = createElement("option", "option", i);
    newElem.setAttribute("value", i);
    select.append(newElem);
  });
}

///.//////////////////////////

function CategoryResult(ctg, str) {
  return pokemons.filter((i) => {
    return i.name.match(str) && i.weaknesses.includes(ctg);
  });
}

btn.addEventListener("click", () => {
  searchInput = document.querySelector(".search-pokemone").value.toLowerCase();
  const search = new RegExp(searchInput, "gi");
  var result = CategoryResult(select.value, search);
  console.log(result);
  render(result);
});

modalBtn.addEventListener("click", () => {
  $(".pokemon_modal").style.transform = "translateX(0%)";
});
closeBtn.addEventListener("click", () => {
  $(".pokemon_modal").style.transform = "translateX(100%)";
});
var modalArr = [];
function pushElem(id) {
  pokemons.forEach((e) => {
    if (e.id == id) {
      if (!modalArr.includes(e)) {
        modalArr.push(e);
      }
    }
  });
  renderModal(modalArr);
}
function renderModal(arr = []) {
  $(".cards").innerHTML = "";

  var elements = arr.map((i) => {
    var newElem = createElement(
      "div",
      "cards",
      `
  <div class="card__item">
          <img class="card__img" src="${i.img}" alt="" />
            <hr />
            <div class="card__malumot">
              <h1 class="card__title">${i.name}</h1>
              <div onclick='deleteElem(${i.id})'><i class="fa-solid fa-trash"></i></div>
            </div>
            <p class="card__tipe">${i.type}</p>
            <div class="card__text">
              <p class="card__ege">${i.height}</p>
              <p class="card__ef">${i.weight}</p>
            </div>
          </div>`
    );
    $(".cards").append(newElem);
  });
}

function deleteElem(id) {
  let deleteCard = modalArr.filter((e) => {
    return +e.id !== id;
  });
  modalArr = deleteCard;
  renderModal(modalArr);
}
