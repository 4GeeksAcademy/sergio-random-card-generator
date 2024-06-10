/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  newCard();
};
function newCard() {
  let palos = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomsPalos = Math.floor(Math.random() * palos.length);
  let randomsNumbers = Math.floor(Math.random() * numbers.length);

  document.querySelector("#top").innerHTML = palos[randomsPalos];
  document.querySelector("#number").innerHTML = numbers[randomsNumbers];
  document.querySelector("#botton").innerHTML = palos[randomsPalos];

  let colorSuit =
    palos[randomsPalos] === "♦" || palos[randomsPalos] === "♥"
      ? "text-danger"
      : "text-dark";
  document.querySelector("#top").className = colorSuit;
  document.querySelector("#number").className = colorSuit;
  document.querySelector("#botton").className = colorSuit;
}
