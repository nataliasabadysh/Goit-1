
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

function isLoginValid(login) {
  if (login.length > 3 && login.length < 17) {
    return true;
  }
  return false;
}

const isLoginUnique = function (allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  }
  return true;
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  if (!isLoginUnique(allLogins, login)) {
    return 'Такой логин уже используется!';
  }
  logins.push(login);
  return 'Логин успешно добавлен!';
};

// console.log(isLoginValid('jqueryisextremelyfast'));

// Вызовы функции для проверки
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Логин успешно добавлен!'
// addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
// addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

// addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
