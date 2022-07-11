/*
Функция, которая принимает в качестве аргумента объект и 
выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.
*/

// Немного смутила формулировка задания. В консоль должна выводить и ключ и значение, но сама функция не должна вовращать значение...

let buildTomsk = {
  type: "building",
  city: "Tomsk",
};

let myHouse = Object.create(buildTomsk);

myHouse.floors = 9;
myHouse.material = "brick";

let getKeysObj = function () {
  for (let key in myHouse) {
    if (myHouse.hasOwnProperty(key)) {
      console.log(key, myHouse[key]);
    }
  }
};

getKeysObj();

/* Если принципиально, чтобы возвращала только ключб тогда меняем 
console.log(key, myHouse[key]) 
на
console.log(key) */
