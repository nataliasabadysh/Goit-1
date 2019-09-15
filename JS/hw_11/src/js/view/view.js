import Handlebars from "handlebars"
import {PARENT, notepad} from '../const/const'
import template from '../template/note';
import { form } from "../const/const";



export function view() {
  const context = Handlebars.compile(template)(notepad);
  PARENT.innerHTML = '';
  PARENT.insertAdjacentHTML("afterbegin", context)
}
