"use strict";

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2
};

class Notepad {
  constructor(notes = []) {
    // Перенеси свойства и методы объекта notepad в конструктор
    this._notes = notes;
  }

  get notes() {
    /*
     * Принимает: ничего
     * Возвращает: все заметки, значение свойства notes
     */
    return this._notes;
  }

  findNoteById(id) {
    /*
     * Ищет заметку в массиве notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: заметку с совпавшим полем id или undefined если ничего не найдено
     */
    return this._notes.find(e => e.id === id);
  }

  saveNote(note) {
    /*
     * Сохраняет заметку в массив notes
     *
     * Принимает: объект заметки
     * Возвращает: сохраненную заметку
     */
    this._notes.push(note);
    return note;
  }

  deleteNote(id) {
    /*
     * Удаляет заметку по идентификатору из массива notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: ничего
     */
    // for (let i = 0; i < this.notes.length; i += 1) {
    //   if (this.notes[i].id === id) {
    //     this.notes.splice(i, 1);
    //     // return this;
    //     break;
    //   }
    // }
    this.notes.splice(this.notes.indexOf(this.notes.find(e => e.id === id)), 1);
  }

  updateNoteContent(id, updatedContent) {
    /*
     * Обновляет контент заметки
     * updatedContent - объект с полями вида {имя: значение, имя: значение}
     * Свойств в объекте updatedContent может быть произвольное количество
     *
     * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
     * Возвращает: обновленную заметку
     */

    Object.assign(this.findNoteById(id), updatedContent);
  }

  updateNotePriority(id, priority) {
    /*
     * Обновляет приоритет заметки
     *
     * Принимает: идентификатор заметки и ее новый приоритет
     * Возвращает: обновленную заметку
     */
    // Object.assign(this.findNoteById(id), this.notes.priority(priority));
    this.findNoteById(id).priority = priority;
  }

  filterNotesByQuery(query) {
    /*
     * Фильтрует массив заметок по подстроке query.
     * Если значение query есть в заголовке или теле заметки - она подходит
     *
     * Принимает: подстроку для поиска в title и body заметки
     * Возвращает: новый массив заметок, контент которых содержит подстроку
     */
    return this._notes.filter(
      ({ title, body }) =>
        title.toLowerCase().includes(query.toLowerCase()) ||
        body.toLowerCase().includes(query.toLowerCase())
    );

  }

  filterNotesByPriority(priority) {
    /*
     * Фильтрует массив заметок по значению приоритета
     * Если значение priority совпадает с приоритетом заметки - она подходит
     *
     * Принимает: приоритет для поиска в свойстве priority заметки
     * Возвращает: новый массив заметок с подходящим приоритетом
     */
    // const pre = [] = this.notes.filter( e => e.priority === priority);
    return this.notes.filter(e => e.priority === priority);
  }
}

const ICON_TYPES = {
  EDIT: "edit",
  DELETE: "delete",
  ARROW_DOWN: "expand_more",
  ARROW_UP: "expand_less"
};

const NOTE_ACTIONS = {
  DELETE: "delete-note",
  EDIT: "edit-note",
  INCREASE_PRIORITY: "increase-priority",
  DECREASE_PRIORITY: "decrease-priority"
};

const initialNotes = [
  {
    id: "id-1",
    title: "JavaScript essentials",
    body:
      "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
    priority: PRIORITY_TYPES.HIGH
  },
  {
    id: "id-2",
    title: "Refresh HTML and CSS",
    body:
      "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
    priority: PRIORITY_TYPES.NORMAL
  },
  {
    id: "id-3",
    title: "Get comfy with Frontend frameworks",
    body:
      "First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.",
    priority: PRIORITY_TYPES.NORMAL
  },
  {
    id: "id-4",
    title: "Winter clothes",
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW
  }
];

const notepad = new Notepad(initialNotes);
const PARENT = document.querySelector("ul.note-list");
PARENT.addEventListener("click", checkClick);
renderNoteList(PARENT, notepad.notes);
// console.log(notepad.notes);

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
// Помотрим куда нажали
function checkClick({ target }) {
  const elemParent = target.closest(".action");
  if (!elemParent) {
    return;
  }
  switch (elemParent.dataset.action) {
    case "delete-note":
      removeListItem(target.closest(".note-list__item"));
      break;
    case "edit-note":
      rewrite(target.closest(".note-list__item"));
      break;
    case "increase-priority":
      setpriority(target, 1);
      break;
    case "decrease-priority":
      setpriority(target, -1);
      break;
  }
}

// Добавление заметки
const form = document.querySelector(".note-editor");
form.addEventListener("submit", saveNote);
const generateUniqueId = () =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

function saveNote(event) {
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
      id: generateUniqueId(),
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

// Фильтрация ищет по целдому слову, думал как искать по частам , но туманно
const inputFilter = document.querySelector(".search-form__input");
inputFilter.addEventListener("input", fileterNote);

function fileterNote({ target }) {
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

// Удаление
function removeListItem(elem) {
  const listItem = elem;
  notepad.deleteNote(listItem.dataset.id);
  listItem.remove();
}

// Обновление приоритета
function setpriority(elem, num) {
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

// Редатирование
function rewrite(elem) {
  form.style.backgroundColor = "#00dbff";
  form.dataset.id = elem.dataset.id;
  form[0].value = elem.querySelector(".note__title").textContent;
  form[1].value = elem.querySelector(".note__body").textContent;
}
