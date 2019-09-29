import { notepad, shortid, notyf } from "../const/const";
import { NOTIFICATION_MESSAGES } from "../utils/constants";
import { view } from "../view/view";
import { formClose } from "../app";
import MicroModal from "micromodal";

export function saveNote(event) {
  event.preventDefault();
  const { target } = event;

  if (target[0].value.length === 0 || target[1].value.length === 0) {
    notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);
    return;
  }

  notepad
    .saveNote({
      title: target[0].value,
      body: target[1].value,
      priority: 0
    })
    .then(data => {
      console.log(data);
      view();
      formClose();
      target[0].value = "";
      target[1].value = "";
      return notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
    })
    .catch(console.log);
}
