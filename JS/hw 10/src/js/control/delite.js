import {notepad} from '../const/const';
export function removeListItem(elem) {
    const listItem = elem;
    notepad.deleteNote(listItem.dataset.id);
    listItem.remove();
  }