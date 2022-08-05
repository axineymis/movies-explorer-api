export const moviesApiAddress = "https://api.nomoreparties.co";

export const mainApiAddress = "https://api.diplom.axineymis.nomoredomains.xyz";


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

//определение количества карточек в зависимости от ширины экрана
export const updateWidth = (width) => {
  if (width <= 768) {
    return { _initCount: 5, _count: 2 };
  } else {
    return { _initCount: 7, _count: 7 };
  }
};