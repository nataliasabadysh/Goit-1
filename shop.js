/*
// Для продакшена 


По классу методы которые нужны для его работы экземпляр карзины, насколько понял, у беблиотеке нет необходимости превязывать к чатид
1. получить весь список getGoods() { принимает ничего, возвращает полный текуший список товаров}
2. добавление нового товара в корзину saveGoods(obj) { принимает объект товара, добавляет в массив товар, вовращает ничего}
3. Очистка корзины clearGoods() { принимает ничего чистит полнустью массив, вовращает ничего }
4. Удаление из карзины delGoods(id) {получает id, находит по id, удаляет из массива, возвращает ?удаленный товар?}
5. именения количества определленного товора из корзины changeGoods(id, num) { получает id & новое количество, j,yfdkztn njdfh gj ид, возвращает ничего}


Денамически создать клавиатуру из массивов 
Оплата по тестить надо
Тестирование перекрестной работы от 2-х пользователей однавременно 
Информирование о новом заказе
Контакты
Разработчики

// Подумать новые фичи

История заказов


*/
class Goods {
  constructor(tovar = []) {
    this._tovar = tovar; // массив объектов типа, товар, количество цена за 1 ед
  }

  getGoods() {
    return this._tovar;
  }

  saveGoods(name, price, count) {
    this._tovar.push({
      id: shortid.generate(),
      name: name,
      price: price,
      count: count
    });
  }

  clearGoods() {
    this._tovar = [];
  }

  delGoods(id) {
    this._tovar.slice(
      this._tovar.indexOf(this._tovar.find(e => e.id === id)),
      1
    );
  }

  changeGoods(id, count) {
    this._tovar.find(e => e.id === id).count = count;
  }
}