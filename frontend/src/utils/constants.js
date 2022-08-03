export const moviesApiAddress = "https://api.nomoreparties.co";

export const mainApiAddress = "http://localhost:3001";

export const passwordPattern = /[0-9a-z-а-яё]+/g;
export const namePattern = /[a-z-. а-яё]+/g;
export const allowedSymbolsPattern = /[_~!@#$%^&*()\[\]+`'";:<>\/\\|=]/g;


export const errMessages = {
  409: "Пользователь с таким email уже существует",
  401: "Вы ввели неправильный логин или пароль / пользователь не зарегистрирован",
  500: "На сервере произошла ошибка",
  400: "Введены некорректные данные, проверьте правильность ввода",
};

export const validationMessages = {
  name: "Имя содержит недопустимые символы. Имя может содержать латинские буквы, кириллицу, пробел и дефис.",
  email: "Введен некорректный формат эл.почты",
  password: "Пароль содержит не допустимые символы. Пароль может содержать цифры, латиницу, кириллицу, дефис.",
};

export const updateWidth = (width) => {
  if (width <= 480) {
    return { _initCount: 5, _count: 2 };
  }
  if (width <= 768) {
    return { _initCount: 7, _count: 7 };
  }
};