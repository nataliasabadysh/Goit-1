import {PARENT, notepad} from '../const/const';
import {renderNoteList} from '../view/view';
export function setpriority(elem, num) {
    const listItem = elem.closest(".note-list__item");
    if (num > 0 && notepad.findNoteById(listItem.dataset.id).priority === 2) {
      return;
    }
    if (num < 0 && notepad.findNoteById(listItem.dataset.id).priority === 0) {
      return;
    }
    console.log(
      (notepad.findNoteById(listItem.dataset.id).priority =
        notepad.findNoteById(listItem.dataset.id).priority + num)
    );
    PARENT.innerHTML = "";
    renderNoteList(PARENT, notepad.notes);
  }