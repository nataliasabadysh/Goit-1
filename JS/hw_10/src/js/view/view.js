import {PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS} from '../utils/constants';


function renderNoteList(listRef, notes) {
  notes.forEach(e => listRef.append(createListItem(e)));
}

function createListItem(note) {
  // note.

  // создадим li
  const li = document.createElement("li");
  li.classList.add("note-list__item");
  li.dataset.id = note.id;

  // создадим div.notes
  const divNotes = document.createElement("div");
  divNotes.classList.add("note");

  // Создадим футер
  const noteFooter = document.createElement("footer");
  noteFooter.classList.add("note__footer");

  // создадим секции
  const section1 = document.createElement("section");
  section1.classList.add("note__section");

  // Думал можно проклонировать как-то
  const section2 = document.createElement("section");
  section2.classList.add("note__section");

  // Приоритет
  const span = document.createElement("span");
  span.classList.add("note__priority");
  let Priority;
  switch (note.priority) {
    case 0:
      Priority = "LOW";
      break;
    case 1:
      Priority = "Normal";
      break;
    case 2:
      Priority = "HIGH";
      break;
  }
  span.textContent = `Priority: ${Priority}`;

  // тут будем собирать)))
  section1.append(
    button(NOTE_ACTIONS.DECREASE_PRIORITY, ICON_TYPES.ARROW_DOWN)
  );
  section1.append(button(NOTE_ACTIONS.INCREASE_PRIORITY, ICON_TYPES.ARROW_UP));
  section1.append(span);

  section2.append(button(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT));
  section2.append(button(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE));

  noteFooter.append(section1);
  noteFooter.append(section2);

  divNotes.append(note_Content(note.title, note.body));
  divNotes.append(noteFooter);
  li.append(divNotes);
  return li;
}

function note_Content(title, body) {
  const noteContent = document.createElement("div");
  noteContent.classList.add("note__content");

  const h2 = document.createElement("h2");
  h2.classList.add("note__title");
  h2.textContent = title;

  const p = document.createElement("p");
  p.classList.add("note__body");
  p.textContent = body;

  noteContent.append(h2);
  noteContent.append(p);
  return noteContent;
}

function button(data, name) {
  const button = document.createElement("button");
  button.classList.add("action");
  button.dataset.action = data;

  const i = document.createElement("i");
  i.classList.add("material-icons");
  i.classList.add("action__icon");
  i.textContent = name;
  button.append(i);

  return button;
}

export {renderNoteList, createListItem}