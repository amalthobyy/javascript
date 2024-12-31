const prompt=require('prompt-sync')();

function Car(name, mileage, max_speed) {
    this.name = name;
    this.mileage = mileage;
    this.max_speed = max_speed;
  }
  
  let myCar = new Car('Tesla', 400, 250);
  console.log(myCar);
   
