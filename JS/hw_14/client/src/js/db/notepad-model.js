// import { Promise } from "q";
import "core-js/stable";
import "regenerator-runtime/runtime";

import * as api from "../api";
class Notepad {
  constructor() {
    // Перенеси свойства и методы объекта notepad в конструктор
    this._notes = [];
  }

  get() {
    /*
     * Принимает: ничего
     * Возвращает: все заметки, значение свойства notes
     */
    return api
      .getNotes()
      .then(notes => {
        this._notes = notes;
        return this._notes;
      })
      .catch(rej => console.log(rej));
  }

  findNoteById(id) {
    /*
     * Ищет заметку в массиве notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: заметку с совпавшим полем id или undefined если ничего не найдено
     */
    return api.getNotesById(id).then(res => {
      console.log(res);
      return res.json();
    });
  }

  async saveNote(note) {
    return await api
      .saveNote(note)
      .then(res => {
        return res.json();
      })
      .catch(rej => {
        return rej;
      });
  }

  async deleteNote(id) {
    /*
     * Удаляет заметку по идентификатору из массива notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: ничего
     */
    return await api.delNote(id).then(res => res);
  }

  updateNoteContent(id, updatedContent) {
    /*
     * Обновляет контент заметки
     * updatedContent - объект с полями вида {имя: значение, имя: значение}
     * Свойств в объекте updatedContent может быть произвольное количество
     *
     * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
     * Возвращает: обновленную заметку
     */

    Object.assign(this.findNoteById(id), updatedContent);
  }

  updateNotePriority(id, priority) {
    /*
     * Обновляет приоритет заметки
     *
     * Принимает: идентификатор заметки и ее новый приоритет
     * Возвращает: обновленную заметку
     */
    // Object.assign(this.findNoteById(id), this.notes.priority(priority));
    this.findNoteById(id).priority = priority;
  }

  filterNotesByQuery(query) {
    /*
     * Фильтрует массив заметок по подстроке query.
     * Если значение query есть в заголовке или теле заметки - она подходит
     *
     * Принимает: подстроку для поиска в title и body заметки
     * Возвращает: новый массив заметок, контент которых содержит подстроку
     */
    return this._notes.filter(
      ({ title, body }) =>
        title.toLowerCase().includes(query.toLowerCase()) ||
        body.toLowerCase().includes(query.toLowerCase())
    );
  }

  filterNotesByPriority(priority) {
    /*
     * Фильтрует массив заметок по значению приоритета
     * Если значение priority совпадает с приоритетом заметки - она подходит
     *
     * Принимает: приоритет для поиска в свойстве priority заметки
     * Возвращает: новый массив заметок с подходящим приоритетом
     */
    // const pre = [] = this.notes.filter( e => e.priority === priority);
    return this.notes.filter(e => e.priority === priority);
  }
}
export default Notepad;
