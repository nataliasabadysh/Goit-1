import Notepad from '../db/notepad-model';
import json from '../../assets/notes.json';
import MicroModal from 'micromodal';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; 
export const PARENT = document.querySelector("ul.note-list");
export const notepad = new Notepad(json);
export const form = document.querySelector("#note-editor-form");
export const inputFilter = document.querySelector(".search-form__input");
export const shortid = require('shortid');
export const newNotesBtn = document.querySelector('button[data-action="open-editor"]');
export const notyf = new Notyf();
