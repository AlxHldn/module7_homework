/* Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создайте экземпляры каждого прибора.
Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :) */

//Создаем родительскую функцию-прототип

function ElectroDevice(name, positionSwitch) {
  this.colorDevice = "yellow"; //Цвет самого прибора
  this.materialDevice = "plastic"; //Материал прибора
  this.name = name; //Имя прибора
  this.positionSwitch = positionSwitch; //вкл/выкл в розетку
}

// Создаем функцию включения\выключения приборов и выносим ее в prototype

ElectroDevice.prototype.changePositionSwitch = function () {
  if (this.positionSwitch == "on") {
    this.positionSwitch = "off";
    console.log("Устройство выключено");
  } else {
    this.positionSwitch = "on";
    console.log("Устройство включено");
  }
};

// Создаем функцию расчета потребления энергии и выносим ее в prototype
// power - Потребляемая мощность прибора в час
// timeWorkDevice - Время работы прибора в часах

ElectroDevice.prototype.calcConsumpPower = function (power, timeWorkDevice) {
  if (this.positionSwitch == "on") {
    console.log(
      `За ${timeWorkDevice} часов работы ${this.name} потребил ${
        timeWorkDevice * power
      } Квт энергии`
    );
  } else {
    console.log(`Прибор выключен из розетки и не потребляет электроэнергию`);
  }
};

// Создаем делигирующую связь для Компьютеров
// Прописываем этому прототипу свои свойства (операционная система, тип устройства) и методы (обновление ОС)

function Computer(name, positionSwitch, type) {
  this.name = name;
  this.positionSwitch = positionSwitch;
  this.type = type;
  this.operatingSystem = "old";
}

Computer.prototype = new ElectroDevice();

Computer.prototype.updateOS = function () {
  if (this.operatingSystem == "old") {
    this.operatingSystem = "new";
    console.log("Операционная система обновлена");
  } else {
    console.log("Обновлений для операционной системы нет");
  }
};

// Создаем делигирующую связь для приборов климат-контроля
//Прописываем этому прототипу свои свойства (температуру и мощность обдува) и методы (повышение и понижение мощности обдува, смена температуры)

function ClimateControl(name, positionSwitch, powerBlowing) {
  this.name = name;
  this.positionSwitch = positionSwitch;
  this.powerBlowing = powerBlowing;
  this.temperature = "cold";
}

ClimateControl.prototype = new ElectroDevice();

ClimateControl.prototype.promotionPowerBlowing = function () {
  if (this.powerBlowing < 10) {
    this.powerBlowing += 1;
    console.log(`Мощность обдува увеличена до ${this.powerBlowing}`);
  } else {
    console.log("Выставлена максимальная мощность обдува");
  }
};

ClimateControl.prototype.downgradePowerBlowing = function () {
  if (this.powerBlowing > 0) {
    this.powerBlowing -= 1;
    console.log(`Мощность обдува уменьшена до ${this.powerBlowing}`);
  } else {
    console.log("Выставлена минимальная мощность обдува");
  }
};

ClimateControl.prototype.changeTemperature = function () {
  if (this.temperature == "cold") {
    this.temperature = "warm";
    console.log("Начал дуть теплый воздух");
  } else {
    this.temperature = "cold";
    console.log("Начал дуть холодный воздух");
  }
};

// Создаем прибор №1 (ноутбук) из прототипа Компьютеры
// И прописываем ему свой метод (смена цвета)

let laptop = new Computer("Laptop", "on", "portable");
laptop.repainting = function () {
  let newColorDevise = prompt("Введите новый цвет устройства");
  colorDevice = newColorDevise;
  console.log(`${this.name} поменял цвет на ${colorDevice}`);
};

// Создаем прибор №2 (стационарный ПК) из прототипа Компьютеры
// И прописываем ему свои свойства (мышка, клавиатура) и метод (вывод веса)

let pc = new Computer("Personal Computer", "off", "stationary");
pc.pcMouse = true;
pc.keyboard = true;
pc.getWeight = function (weight) {
  console.log(`${this.name} имеет вес ${weight} грамм`);
};

// Создаем прибор №3 (лампа) из родительского прототипа + свойство (теплота света) + метод (переключение теплоты)

let lamp = new ElectroDevice("Desk Lamp", "on");
lamp.lightColor = "warm";
lamp.changeLightColor = function () {
  if (this.lightColor == "warm") {
    this.lightColor = "cold";
    console.log("Цвет изменен на холодный");
  } else {
    this.lightColor = "warm";
    console.log("Цвет изменен на теплый");
  }
};

// Создаем прибор №4 (сплит-система) из прототипа климат-контроля + свойство (гарантийный срок) + метод (вывод информации на гарантии устройство или нет)

let airConditioner = new ClimateControl("Split Sistem", "off", 9);
airConditioner.guarantee = 4;
airConditioner.getInfoGuarantee = function () {
  if (this.guarantee < 12) {
    console.log("Устройство находится на гарантии");
  } else {
    console.log("Гарантия закончилась");
  }
};

// Выводим в консоль все предметы и их методы

console.log(laptop);
laptop.calcConsumpPower(300, 4);
laptop.changePositionSwitch();
laptop.updateOS();
laptop.repainting();

console.log(pc);
pc.calcConsumpPower(1300, 5);
pc.changePositionSwitch();
pc.calcConsumpPower(1300, 5);
pc.updateOS();
pc.updateOS();
pc.getWeight(2000);

console.log(lamp);
lamp.calcConsumpPower(100, 2);
lamp.changeLightColor();
lamp.changeLightColor();
lamp.changePositionSwitch();

console.log(airConditioner);
airConditioner.calcConsumpPower(1000, 2);
airConditioner.changePositionSwitch();
airConditioner.calcConsumpPower(1000, 1);
airConditioner.promotionPowerBlowing();
airConditioner.promotionPowerBlowing();
airConditioner.changeTemperature();
airConditioner.changeTemperature();
airConditioner.downgradePowerBlowing();
airConditioner.downgradePowerBlowing();
airConditioner.getInfoGuarantee();
