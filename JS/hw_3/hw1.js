const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

function isLoginValid(login) {
  return login.length > 3 && login.length < 17;
}

const isLoginUnique = function (allLogins, login) {
  return allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  if (isLoginUnique(allLogins, login)) {
    return 'Такой логин уже используется!';
  }
  logins.push(login);
  return 'Логин успешно добавлен!';
};

// console.log(isLoginValid('jqueryisextremelyfast'));

// Вызовы функции для проверки
console.log(addLogin(logins, 'robotGoogles')); // 'Логин успешно добавлен!'
// addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
// addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

// addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
