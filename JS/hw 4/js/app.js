const HELLO = 'Hello world!';
const NUMBER_FIVE = 5;

const RESULT = NUMBER_FIVE * 5;

console.log(HELLO);
console.log('NUMBER_FIVE = ', NUMBER_FIVE);
console.log('RESULT = ', RESULT);

/** 
 *  проверка ожидаемого результата
 * вывод в консоль только в случае ошибки 
 * HELLO не будет выводиться,
 * а RESULT выведет строку с описанием ошибки
 * */
console.assert(HELLO === 'Hello world!', 
'Error в значении константы HELLO');
console.assert(RESULT === 10, 
'Error при вычислении NUMBER_FIVE * 5');
