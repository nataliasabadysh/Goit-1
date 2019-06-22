const number = [];
let total = 0;
let input;
do {
  input = prompt('Введите число');
  if (Number.isNaN(Number(input))) {
    alert('Вы ввели не число, кто вас об этом просил, еще попытка');
  } else {
    number.push(input);
  }
} while (input);

for (let i = 0; i < number.length; i += 1) {
  total += Number(number[i]);
}
alert(`Сумма ваших чисел составила ${total} попугайчиков`);
