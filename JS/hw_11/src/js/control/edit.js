import {form} from '../const/const';
import {formShow} from '../app';
export function rewrite(elem) {
    // form.style.backgroundColor = "#00dbff";

    form.dataset.id = elem.dataset.id;
    form[0].value = elem.querySelector(".note__title").textContent;
    form[1].value = elem.querySelector(".note__body").textContent;
    formShow();
  }
  