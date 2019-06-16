const credits = '23580';
const pricePerDroid = '3000';
const buy = prompt('Сколько хотите купить?');

if (!buy) {
  alert('Покупка отменена пользователем');
} else if ((Number(buy) * Number(pricePerDroid)) > Number(credits)) {
  alert('Недостаточно кредитов');
} else {
  alert(`Вы купили ${Number(buy)} дроид(ов) на сумму ${Number(buy) * Number(pricePerDroid)}, на счету осталось ${Number(credits) - (Number(buy) * Number(pricePerDroid))}`);
}
