import Notepad from '../db/notepad-model';
import initialNotes from '../db/initial';
export const PARENT = document.querySelector("ul.note-list");
export const notepad = new Notepad(initialNotes);
export const form = document.querySelector(".note-editor");
export const inputFilter = document.querySelector(".search-form__input");
export const shortid = require('shortid');