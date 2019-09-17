import Handlebars from "handlebars";
import { PARENT } from "../const/const";
import template from "../template/note";

export function view() {
  const arrNotes = JSON.parse(localStorage.getItem("notes"));
  // const arrNotes = [
  //   {
  //     id: 2,
  //     title: 'target[0].value',
  //     body: "target[1].value",
  //     priority: 0
  //   },
  //   {
  //     id: 2,
  //     title: "target[0].value",
  //     body: "target[1].value",
  //     priority: 0
  //   }
  // ];
  const context = Handlebars.compile(template)(arrNotes);
  PARENT.innerHTML = "";
  console.log(Handlebars.compile(template)(arrNotes));
  PARENT.insertAdjacentHTML("afterbegin", context);
}
