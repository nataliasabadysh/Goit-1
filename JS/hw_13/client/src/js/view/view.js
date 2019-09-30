import Handlebars from "handlebars";
import { PARENT, notepad } from "../const/const";
import template from "../template/note";

export function view(arr = []) {
   if (arr.length === 0) {
     notepad.get().then(res => {
   
       const items = res
       // console.log(notepad.get());
       const context = Handlebars.compile(template)({ items });
       PARENT.innerHTML = "";
       PARENT.insertAdjacentHTML("afterbegin", context);
     })

   } else {
     console.log(arr);
    const items = arr
    // console.log(notepad.get());
    const context = Handlebars.compile(template)({ items });
    PARENT.insertAdjacentHTML("afterbegin", context);
   }
}
