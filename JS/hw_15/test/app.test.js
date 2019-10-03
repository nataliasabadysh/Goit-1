const Notepad = require("../js/app");
Notepad.Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2
};
const initialNotes = [
  {
    id: "id-1",
    title: "JavaScript essentials",
    body:
      "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
    priority: Notepad.Priority.HIGH
  },
  {
    id: "id-2",
    title: "Refresh HTML and CSS",
    body:
      "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
    priority: Notepad.Priority.NORMAL
  }
];

test("get Notes", () => {
  const notepad = new Notepad(initialNotes);
  expect(notepad.notes).toEqual(initialNotes);
});

test("findNoteById", () => {
  const init = initialNotes.map(e => ({ ...{}, ...e }));
  const notepad = new Notepad(init);
  expect(notepad.findNoteById("id-1")).toEqual(init[0]);
});

test("deleteNote", () => {
  const init = initialNotes.map(e => ({ ...{}, ...e }));
  const notepad = new Notepad(init);
  notepad.deleteNote("id-2");
  expect(notepad.notes).toEqual([init[0]]);
});

test('save note', () => {
  const init = initialNotes.map(e => ({ ...{}, ...e }));
  const notepad = new Notepad();
  notepad.saveNote(init[0]);
  expect(notepad.notes).toEqual([init[0]])
});



