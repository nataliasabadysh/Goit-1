// import {setpriority} from './setPrioriti';
import {removeListItem} from './delite';
import {rewrite} from './edit';

export function checkClick({ target }) {
    const elemParent = target.closest(".action");
    if (!elemParent) {
      return;
    }
    switch (elemParent.dataset.action) {
      case "delete-note":
        removeListItem(target.closest(".note-list__item"));
        break;
      // case "edit-note":
      //   rewrite(target.closest(".note-list__item"));
      //   break;
      // case "increase-priority":
      //   setpriority(target, 1);
      //   break;
      // case "decrease-priority":
      //   setpriority(target, -1);
      //   break;
    }
  }