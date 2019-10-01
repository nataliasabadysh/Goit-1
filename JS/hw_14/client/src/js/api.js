import { notyf } from "./const/const";

const baseURL = "http://localhost:3330/notes";

export async function getNotes() {
  return await fetch(baseURL)
    .then(res => res.json())
    .catch( () => { 
      notyf.error('Ошибка сервера')
      console.log});
}

export async function getNotesById(id) {
  return await fetch(baseURL + "/" + id)
    .then(res => res.json())
    .catch( () => { 
      notyf.error('Ошибка сервера')
      console.warn});
}

export async function delNote(id) {
  const option = {
    method: "DELETE"
  };
  return await fetch(baseURL + "/" + id, option)
    .then(res => res.json())
    .catch( () => { 
      notyf.error('Ошибка сервера')
      console.log});
}

export async function saveNote(note) {
  const body = JSON.stringify(note);
  const options = {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json"
    }
  };

  return await fetch(baseURL, options)
    .then(res => res.json())
    .catch( () => { 
      notyf.error('Ошибка сервера')
      console.log});
}

// saveNote({
//   title: "111",
//   body:
//     "111111",
//   priority: 1
// });
