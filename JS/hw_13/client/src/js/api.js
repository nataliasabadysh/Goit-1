const baseURL = "http://localhost:3300/notes";

function getNotes() {
  return fetch(baseURL)
    .then(res => res.json())
    .catch(console.log);
}

function getNotesById(id) {
  return fetch(baseURL + "/" + id)
    .then(res => res.json())
    .catch(console.log);
}

function getNotesById(id) {
  const option = {
    method: "DELETE"
  };
  return fetch(baseURL + "/" + id, option)
    .then(res => res.json())
    .catch(console.log);
}

function saveNote(note) {
  const body = note;
  const option = {
    method: "POST",
    body,
    headers: {
      "Content-Type": "aplication/json"
    }
  };
  return fetch(baseURL, option).catch(console.log);
}
