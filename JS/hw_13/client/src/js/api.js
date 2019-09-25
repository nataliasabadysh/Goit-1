const baseURL = "http://localhost:3030/notes";

export function getNotes() {
  return fetch(baseURL)
    .then(res => res.json())
    .catch(console.log);
}

export function getNotesById(id) {
  return fetch(baseURL + "/" + id)
    .then(res => res.json())
    .catch(console.warn);
}

export function delNote(id) {
  const option = {
    method: "DELETE"
  };
  return fetch(baseURL + "/" + id, option)
    .then(res => res.json())
    .catch(console.log);
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
    .catch(console.log);
}

// saveNote({
//   title: "111",
//   body:
//     "111111",
//   priority: 1
// });
