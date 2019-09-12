import {PARENT, notepad, form, inputFilter} from './const/const'
import {renderNoteList} from './view/view'
import {saveNote} from './control/save';
import {checkClick} from './control/contorol';
import {filterNote} from './control/filter';

// Листенеры думал как вынести их в отдльный фаил, но чет от туда они не видятся 
PARENT.addEventListener("click", checkClick);
form.addEventListener("submit", saveNote);
inputFilter.addEventListener("input", filterNote);

renderNoteList(PARENT, notepad.notes);