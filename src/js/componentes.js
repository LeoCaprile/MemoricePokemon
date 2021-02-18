import "../css/componentes.css";
import { btnplay, initTime, puzzleSize } from "./botones.menu";
import { set } from "../index";
import { ref, writeUserData } from "../js/database";
import { AsyncHook } from "webpack/node_modules/tapable";

export const cardbox = document.querySelector("#cards-box");
const time = document.querySelector(".time");
const modal = document.querySelector(".modal");
const blockscroll = document.querySelector("html");
const btnModal = document.querySelector("#btn-modal");
const userNameInput = document.querySelector("#userName");

let endTime, totalTime, userTime;

export const createCardHTML = (card) => {
  const cardHTML = `<div class="card-container">   
<div card-id="${card.couple}" id="${card.id}" class="card">
    <figure class="back"><img src="./assets/00${card.id}-avatar.svg"></figure>
    <figure class="front"><img src="./assets/038-gaming.svg"></figure>
</div>
</div>`;

  const div = document.createElement("div");
  div.innerHTML = cardHTML;
  cardbox.append(div.firstElementChild);
};

export const scoreTable = () => {
  const tableScore = `<table id="tableScore" class="table is-bordered is-fullwidth">
  <thead>
      <th><strong>Nombre</strong></th>
      <th><strong>Tamaño</strong></th>
      <th><strong>Tiempo</strong></th>
  </thead>
  <tbody class="userScore">
  </tbody>
</table>`;

  const div = document.createElement("div");
  div.innerHTML = tableScore;
  cardbox.append(div.firstElementChild);

  ref.on("value", (data) => {
    resetTableScore();
    const userData = data.val();
    addUserToScoreTable(userData);
  });
};

function resetTableScore() {
  const scorelist = document.querySelectorAll(".listing");
  scorelist.forEach((user) => user.remove());
}

function addUserToScoreTable(user) {
  if (user === null) return;
  const keys = Object.keys(user);
  keys.forEach((key) => {
    const userName = user[key].name;
    const userSize = user[key].size;
    const timeUser = user[key].time;

    const userRow = document.createElement("tr");
    userRow.classList.add("listing");
    userRow.innerHTML = `
    <td>${userName}</td>
    <td>${userSize} </td>
    <td>${timeUser} </td>
    `;
    const table = document.querySelector("#tableScore");
    if (table === null) return;
    table.append(userRow);
  });
}

export function winGame() {
  endTime = getTime();
  totalTime = endTime - initTime;
  userTime = calcTime(totalTime);

  time.innerText = userTime;

  modal.classList.add("is-active");
  blockscroll.classList.add("is-clipped");
}

btnModal.addEventListener("click", () => {
  const userName = userNameInput.value;

  if (userName.length <= 0) {
    userNameInput.classList.add("is-danger");
  } else {
    writeUserData(userName, puzzleSize, userTime);
    modal.classList.remove("is-active");
    blockscroll.classList.remove("is-clipped");
    btnplay.classList.remove("is-static");
    removeCards();
    scoreTable();
  }
});

function removeCards() {
  const card = document.querySelectorAll(".card-container");
  card.forEach((card) => card.remove());
  set.setClear();
}

export function getTime() {
  return new Date().getTime();
}

export function calcTime(time) {
  let seconds = Math.floor(time / 1000),
    minutes = Math.floor(time / (1000 * 60)),
    hours = 0;

  if (seconds > 59) {
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
  }
  if (minutes > 59) {
    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
  }
  seconds = seconds >= 10 ? seconds : "0" + seconds;
  minutes = minutes >= 10 ? minutes : "0" + minutes;
  hours = hours <= 0 ? "" : hours + ":";

  return hours + minutes + ":" + seconds;
}
