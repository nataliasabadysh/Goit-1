const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let message;
do {
  message = prompt('Введите пароль');
  if (passwords.includes(message)) {
    alert('Добро пожаловать');
    break;
  } else {
    attemptsLeft -= 1;
    if (attemptsLeft > 0) {
      alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
    } else {
      alert('У вас закончились попытки, аккаунт заблокирован!');
      break;
    }
  }
} while (message);
