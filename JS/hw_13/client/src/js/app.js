import {PARENT, notepad, form, inputFilter, newNotesBtn} from './const/const'
import {view} from './view/view'
import {saveNote} from './control/save';
import {checkClick} from './control/contorol';
import {filterNote} from './control/filter';
import json from '../assets/notes.json';
import MicroModal from 'micromodal';

// view();
if (localStorage.getItem('notes')) {
    view()
} else {
    localStorage.setItem('notes', JSON.stringify(json))
    view();
}



// Листенеры думал как вынести их в отдльный фаил, но чет от туда они не видятся 
PARENT.addEventListener("click", checkClick);
form.addEventListener("submit", saveNote);

// inputFilter.addEventListener("input", filterNote);
MicroModal.init();
newNotesBtn.addEventListener("click", () => MicroModal.show('note-editor-modal') )

const formCloseBtn = document.querySelector('button[data-micromodal-close=""]');
formCloseBtn.addEventListener('click', formClose);

export function formClose() {
    MicroModal.close('note-editor-modal');
}

export function formShow() {
    MicroModal.show('note-editor-modal');
}
// Display an error notification

