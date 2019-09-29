const baseURL = "http://localhost:3030/notes";
import {notyf} from "./const/const";


export function getNotes() {
  return fetch(baseURL)
    .then(res => res.json())
    .catch(rej => { console.log(rej); notyf.error('Ошибка получения данных')});
}

export function getNotesById(id) {
  return fetch(baseURL + "/" + id)
    .then(res => res.json())
    .catch(notyf.error('Данные не найдены'));
}

export function delNote(id) {
  const option = {
    method: "DELETE"
  };
  return fetch(baseURL + "/" + id, option)
    .then(res => res.json())
    .catch(notyf.error('Заметка не была удалена'));
}

export function saveNote(note) {
  const body = JSON.stringify(note);
  const options = {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(baseURL, options)
    .then(res => res.json())
    .then(console.log)
    .catch(notyf.error('Ошибка сохранения, попробуйте еще'));
}

// saveNote({
//   title: "111",
//   body:
//     "111111",
//   priority: 1
// });
