//Переписать консольное приложение из предыдущего юнита на классы.

// создание родительского класса
class ElectroDevice {
  constructor(name, positionSwitch) {
    this.colorDevice = "yellow";
    this.materialDevice = "plastic";
    this.name = name;
    this.positionSwitch = positionSwitch;
  }

  // Переносим метод в Класс

  changePositionSwitch() {
    if (this.positionSwitch == "on") {
      this.positionSwitch = "off";
      console.log("Устройство выключено");
    } else {
      this.positionSwitch = "on";
      console.log("Устройство включено");
    }
  }

  calcConsumpPower(power, timeWorkDevice) {
    if (this.positionSwitch == "on") {
      console.log(
        `За ${timeWorkDevice} часов работы ${this.name} потребил ${
          timeWorkDevice * power
        } Квт энергии`
      );
    } else {
      console.log(`Прибор выключен из розетки и не потребляет электроэнергию`);
    }
  }
}

// Делегирующая свзь на классах с помощью extends

class Computer extends ElectroDevice {
  constructor(name, positionSwitch, type) {
    super(name, positionSwitch);

    this.type = type;
    this.operatingSystem = "old";
  }

  updateOS() {
    if (this.operatingSystem == "old") {
      this.operatingSystem = "new";
      console.log("Операционная система обновлена");
    } else {
      console.log("Обновлений для операционной системы нет");
    }
  }
}

class ClimateControl extends ElectroDevice {
  constructor(name, positionSwitch, powerBlowing) {
    super(name, positionSwitch);

    this.powerBlowing = powerBlowing;
    this.temperature = "cold";
  }

  promotionPowerBlowing() {
    if (this.powerBlowing < 10) {
      this.powerBlowing += 1;
      console.log(`Мощность обдува увеличена до ${this.powerBlowing}`);
    } else {
      console.log("Выставлена максимальная мощность обдува");
    }
  }

  downgradePowerBlowing() {
    if (this.powerBlowing > 0) {
      this.powerBlowing -= 1;
      console.log(`Мощность обдува уменьшена до ${this.powerBlowing}`);
    } else {
      console.log("Выставлена минимальная мощность обдува");
    }
  }

  changeTemperature() {
    if (this.temperature == "cold") {
      this.temperature = "warm";
      console.log("Начал дуть теплый воздух");
    } else {
      this.temperature = "cold";
      console.log("Начал дуть холодный воздух");
    }
  }
}

let laptop = new Computer("Laptop", "on", "portable");
laptop.repainting = function () {
  let newColorDevise = prompt("Введите новый цвет устройства");
  colorDevice = newColorDevise;
  console.log(`${this.name} поменял цвет на ${colorDevice}`);
};

let pc = new Computer("Personal Computer", "off", "stationary");
pc.pcMouse = true;
pc.keyboard = true;
pc.getWeight = function (weight) {
  console.log(`${this.name} имеет вес ${weight} грамм`);
};

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

let airConditioner = new ClimateControl("Split Sistem", "off", 9);
airConditioner.guarantee = 4;
airConditioner.getInfoGuarantee = function () {
  if (this.guarantee < 12) {
    console.log("Устройство находится на гарантии");
  } else {
    console.log("Гарантия закончилась");
  }
};

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
