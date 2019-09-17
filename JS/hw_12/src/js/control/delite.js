import { notepad, notyf } from "../const/const";
import { view } from "../view/view";
import { NOTIFICATION_MESSAGES } from "../utils/constants";
export function removeListItem(elem) {
  const listItem = elem;
  notepad.deleteNote(listItem.dataset.id).then(res => {
    view();
    notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
  });
}
