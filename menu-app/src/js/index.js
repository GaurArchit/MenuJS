//Getting data from the API

//WOrk on removing the duplicate value as well as removal of the duplicate quantity
let menu = [];
let allAddToCartButtons = [];
let cart = [];
let allCartDeleteButton = [];
updateCartCounter();
displayCartDishes();
//Updating the cart
function updateCartCounter() {
  document.getElementById("cartButton").innerHTML = "&#128722;" + cart.length;
}

import { worker } from "../api/browser";

if (import.meta.env.DEV) {
  import("../api/browser").then(({ Worker }) =>
    worker
      .start()
      .then(() => fetch("/dishes"))
      .then((res) => res.json())
      .then((res) => (menu = res))
  );
}
//
displayAll(menu);
let allButton = document.querySelectorAll("button");
console.log(allButton);

allButton.forEach((button) =>
  button.addEventListener("click", function (e) {
    filterItem(e.target.innerText);
  })
);

function displayAll(dish) {
  dish.forEach(function (dish) {
    let individualDish = `<div class="dish">
  <img src="${dish.img}" />
  <div class="dishOuter">
    <div class="dishInner">
      <h3 class="dishName">${dish.title}</h3>
      <h3 class="dishPrice">$${dish.price}</h3>
    </div>
  
    <p class="dishContent">
      ${dish.dec}
      </p>

      <button id=${dish.id} class="dishcartButton">Add to cart</button>
  </div>`;

    allDishes.innerHTML += individualDish;
    getCartButton();
  });
}

function filterItem(category) {
  console.log(category);
  allDishes.innerHTML = "";
  if (category.toLowerCase() != "all") {
    let filtered = menu.filter(
      (dish) => dish.category.toLowerCase() === category.toLowerCase()
    );
    displayAll(filtered);
  } else {
    displayAll(menu);
  }
}
//Add to cart functionality here we have used getCartButton because all categories have differnt number of cart button
function getCartButton() {
  let allAddToCartButtons = document.querySelectorAll(".dishcartButton");
  allAddToCartButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      addDishToCart(e.target.id);
    });
  });
}

//Store add to cart
//Work on the deletion of data
//Add the functionality TO remove duplicate quantity

function addDishToCart(dishId) {
  let currentDish = menu.forEach((dish) => {
    if (dish.id == dishId) {
      let tempDish = { ...dish, quantity: 1 };
      cart.push(tempDish);
    }
  });
  updateCartCounter();
  displayCartDishes();
}

function displayCartDishes() {
  let cartContent = "";
  cart.forEach(function (dish) {
    let indiCart = `<div class="cartDish">
    <img src="${dish.img}" alt="" />
    <h3>${dish.title}</h3>
    <h3>$${dish.price}</h3>
    <h3>${dish.quantity}</h3>
    <button class="cartDelete" id=${dish.id}>X</button>
  </div>`;

    cartContent += indiCart;
  });
  document.getElementById("cart").innerHTML = cartContent;
  getDeleteButton();
}
function getDeleteButton() {
  let allCartDeleteButton = document.querySelectorAll(".cartDelete");
  console.log(allCartDeleteButton);
  allCartDeleteButton.forEach(function (button) {
    button.addEventListener("click", function (e) {
      // console.log(allCartDeleteButton);
      console.log(e.target.id);
      removeDishFromCart(e.target.id);
    });
  });
}
//This is the functionality to remove item from cart

function removeDishFromCart(removeID) {
  let flag = -1;
  let tempID = -1;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == removeID) {
      flag = 1;
      console.log(cart[i].id);
      console.log(removeID);
      tempID = i;
    }
  }

  if (flag) {
    console.log(flag);
    cart.splice(tempID, 1);
  }

  updateCartCounter();
  displayCartDishes();
}
