import {PARENT, notepad} from '../const/const';
export function filterNote({ target }) {
    const arrLi = [...PARENT.querySelectorAll("li")];
  
    if (!target.value) {
      arrLi.forEach(e => (e.style.display = "block"));
    } else {
      arrLi.forEach(e => (e.style.display = "none"));
      const arrFilter = notepad.filterNotesByQuery(target.value);
  
      if (arrFilter.length === 0) {
        return;
      }
  
      for (let d = 0; d < arrFilter.length; d += 1) {
        for (let i = 0; i < arrLi.length; i += 1) {
          if (arrLi[i].dataset.id === arrFilter[d].id) {
            arrLi[i].style.display = "block";
          }
        }
      }
    }
  }