const correctPassword = 'm4ng0h4ckz';

const pas = prompt('Введите пароль');

if (!pas) {
  alert('Отменено поьзователем');
} else if (pas === correctPassword) {
  alert('Доступ разрешон');
} else {
  alert('Неверно');
}
