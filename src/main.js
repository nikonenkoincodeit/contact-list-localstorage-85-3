import { uid } from "uid";
import { formEL, cardsEl } from "./refs";
import { sentData, getData, saveData } from "./api";
import { createCard } from "./markup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEL.addEventListener("submit", onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  // const formDate = Object.fromEntries(new FormData(e.target));

  const { name, number, email } = e.target.elements;
  const currentObject = createObject(name.value, number.value, email.value);
  sentData(currentObject);

  const card = createCard([currentObject]);
  createMarkup(card);
  e.currentTarget.reset();
}

function createObject(name, number, email) {
  return { createdAt: Date.now(), id: uid(), name, number, email };
}

function createMarkup(markup) {
  cardsEl.insertAdjacentHTML("beforeend", markup);
}

document.addEventListener("DOMContentLoaded", onLoud);

function onLoud() {
  const currentDates = getData();
  if (currentDates.length === 0) {
    return;
  }

  const card = createCard(currentDates);
  createMarkup(card);
}

cardsEl.addEventListener("click", onClickRemoveCard);

function onClickRemoveCard(e) {
  if (!e.target.classList.contains("btn-close")) {
    return;
  }

  const card = e.target.closest(".js-wrap-card");
  const idCard = card.dataset.cardid;
  const newArray = getData().filter(({ id }) => id !== idCard);

  saveData(newArray);

  card.remove();
}
