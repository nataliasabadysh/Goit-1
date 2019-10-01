import Handlebars from "handlebars";
import { PARENT, notepad } from "../const/const";
import template from "../template/note";

import "core-js/stable";
import "regenerator-runtime/runtime";

export  async function view(arr = []) {
   if (arr.length === 0) {
   await  notepad.get().then(res => {
   
       const items = res
       // console.log(notepad.get());
       const context = Handlebars.compile(template)({ items });
       PARENT.innerHTML = "";
       PARENT.insertAdjacentHTML("afterbegin", context);
     })

   } else {
    const items = arr
    // console.log(notepad.get());
    const context = Handlebars.compile(template)({ items });
    PARENT.insertAdjacentHTML("afterbegin", context);
   }
}
