class Vehicle {
   public color: string = 'red';// просваиваем если не нужно задавать значение при инициализации
   wheels: number = 4;

   constructor(color: string) {
      this.color = color;
   }

   // constructor(public color: string) {   }//shortcut inicialization - обязателен модификатор доступа

   public drive(): void {
      console.log('vehicle is driving')
   }

   beep(): void {
      console.log('vehicle doing beep')
   }
}

class Car extends Vehicle {
   constructor(public wheels: number, color: string) {//color - уже имеет public модификатор, wheels - не был в конструкторе
      super(color);
   }
   drive(): void {// модификатор доступа не может меняться у наследуемого свойства
      console.log('car is driving')
   }
}

const vehicle = new Vehicle('silver');
console.log(vehicle.color);

const car = new Car(4, 'blue');
car.beep();
car.drive();
console.log(car.color);