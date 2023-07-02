import { uid } from "uid";
import { formEL } from "./refs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEL.addEventListener("submit", onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  // const formDate = Object.fromEntries(new FormData(e.target));

  const { name, number, email } = e.target.elements;
  const currentObject = createObject(name.value, number.value, email.value);
}

function createObject(name, number, email) {
  return { createdAt: Date.now(), id: uid(), name, number, email };
}
