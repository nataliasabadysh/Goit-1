import {PARENT, notepad, shortid} from '../const/const';
import {PRIORITY_TYPES} from '../utils/constants';
import {createListItem} from '../view/view'
export function saveNote(event) {
    event.preventDefault();
  
    const { target } = event;
  
    if (!target[0].value || !target[1].value) {
      alert("Вы ввели не все данные");
      return;
    }
  
    if (target.dataset.id) {
      notepad.updateNoteContent(target.dataset.id, {
        title: target[0].value,
        body: target[1].textContent
      });
  
      const elemntsParent = document.querySelector(
        `.note-list__item[data-id="${target.dataset.id}"]`
      );
      elemntsParent.querySelector(".note__title").textContent = target[0].value;
      elemntsParent.querySelector(".note__body").textContent = target[1].value;
      form.style.backgroundColor = "";
      form.removeAttribute("data-id");
    } else {
      const newNote = {
        id: shortid.generate(),
        title: target[0].value,
        body: target[1].value,
        priority: PRIORITY_TYPES.LOW
      };
  
      notepad.saveNote(newNote);
      PARENT.append(createListItem(newNote));
    }
    target[0].value = "";
    target[1].value = "";
  }