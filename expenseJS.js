"use strict";

const addButton = document.getElementById("addButton");
const table = document.getElementById("table");
const nameInput = document.getElementById("nameInput");
const dateInput = document.getElementById("dateInput");
const amountInput = document.getElementById("amountInput");

addButton.addEventListener("click", function () {
  let newExpense = document.createElement("tr");
  let newName = document.createElement("td");
  let newDate = document.createElement("td");
  let newAmount = document.createElement("td");
  let xButton = document.createElement("button");

  newName.innerText = nameInput.value;
  newDate.innerText = dateInput.value;
  newAmount.innerText = `$${amountInput.value}`;
  xButton.innerText = "x";

  //   newExpense.classList.add("newExpense");
  //   newName.classList.add("newExpense");
  //   newDate.classList.add("newExpense");
  //   newAmount.classList.add("newExpense");

  if (
    nameInput.value === "" ||
    dateInput.value === "" ||
    amountInput.value === ""
  ) {
    alert("Please fill out all fields.");
  } else {
    table.appendChild(newExpense);
    newExpense.appendChild(newName);
    newExpense.appendChild(newDate);
    newExpense.appendChild(newAmount);
    newExpense.appendChild(xButton);

    xButton.addEventListener("click", function () {
      newExpense.parentNode.removeChild(newExpense);
      xButton.parentNode.removeChild(xButton);
    });

    nameInput.value = "";
    dateInput.value = "";
    amountInput.value = "";
  }
});
