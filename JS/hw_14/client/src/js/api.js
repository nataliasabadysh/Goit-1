const baseURL = "http://localhost:3330/notes";
import { notyf } from "./const/const";
import "core-js/stable";
import "regenerator-runtime/runtime";



export async function getNotes() {
  try {
    const response = await fetch(baseURL);
    const data = await response.json();
    return data;
  } catch (err) {
    notyf.error("Ошибка сервера");
  }
}

export async function delNote(id) {
  const option = {
    method: "DELETE"
  };
  try {
    const response = await fetch(baseURL + "/" + id, option);
    const data = await response.json();
    return data;
    // return data;
  } catch (err) {
    notyf.error("Ошибка сервера");
  }
}
export async function getNotesById(id) {
  try {
    const res = await fetch(baseURL + "/" + id);
    const data = await res.json();
    return data;
  } catch (err) {
    notyf.error("Ошибка получения данных");
  }
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

try {
  const res = await fetch(baseURL, options);
  const data = await res.json();
  return data;
  // return data
} catch (err) {
  notyf.error('ошибка сохранения');
}
  // return fetch(baseURL, options)
  //   .then(res => res.json())
  //   .then(console.log)
  //   .catch(notyf.error("Ошибка сохранения, попробуйте еще"));
}

// saveNote({
//   title: "111",
//   body:
//     "111111",
//   priority: 1
// });
