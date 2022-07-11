/* Функция, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция возвращает true или false. */

let string = new String("someoneText");

let object = {
  someoneText: "asd",
};

let exam = function (data) {
  return data.hasOwnProperty("someoneText");
};

exam(string);

exam(object);
