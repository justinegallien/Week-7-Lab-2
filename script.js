"use strict";

let products = [
  { id: 1, name: "Echo Dot", price: 29.99, quantity: 1 },
  { id: 2, name: "Fire TV Stick", price: 39.99, quantity: 2 },
  { id: 3, name: "Kindle Paperwhite", price: 119.99, quantity: 1 },
  { id: 4, name: "Echo Show 5", price: 89.99, quantity: 0 },
  { id: 5, name: "Fire Tablet", price: 49.99, quantity: 3 },
  { id: 6, name: "Ring Video Doorbell", price: 99.99, quantity: 1 },
];

let shoppingCart = document.getElementById("shopping-cart");

function renderCart(products) {
  let tbody = document.createElement("tbody");
  shoppingCart.appendChild(tbody);
  products.forEach((product) => {
    let tr = document.createElement("tr");
    let idTD = document.createElement("td");
    let nameTD = document.createElement("td");
    let priceTD = document.createElement("td");
    let quantityTD = document.createElement("td");
    idTD.innerText = product.id;
    nameTD.innerText = product.name;
    priceTD.innerText = product.price;
    quantityTD.innerText = product.quantity;
    tr.appendChild(idTD);
    tr.appendChild(nameTD);
    tr.appendChild(priceTD);
    tr.appendChild(quantityTD);
    tbody.appendChild(tr);
  });
  let tfoot = document.createElement("tfoot");
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  let td = document.createElement("td");
  th.colSpan = 3;
  th.innerText = "Total";
  td.innerText = cartTotal(products).toFixed(2);
  shoppingCart.appendChild(tfoot);
  tfoot.appendChild(tr);
  tr.appendChild(th);
  tr.appendChild(td);
}

function cartTotal(products) {
  let sum = products.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
  return sum;
}

let displayCart = document.getElementById("showCart");
displayCart.addEventListener("click", () => renderCart(products));
