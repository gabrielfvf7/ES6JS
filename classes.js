class Car {
    constructor({ title })  {
      this.title = title;
    }
    
    drive() {
      return 'vroom'
    }
  }
  
  const car = new Car({ title: 'Toyota' });
  car.drive();
  car.title