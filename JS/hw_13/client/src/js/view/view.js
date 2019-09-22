import Handlebars from "handlebars";
import { PARENT } from "../const/const";
import template from "../template/note";

export function view() {
  const items = JSON.parse(localStorage.getItem("notes"));
  const context = Handlebars.compile(template)({ items });
  PARENT.innerHTML = "";
  PARENT.insertAdjacentHTML("afterbegin", context);
}
