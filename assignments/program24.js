const prompt=require('prompt-sync')();

class Area {
    circle(radius) {
      return Math.PI * radius * radius;
    }
  
    square(side) {
      return side * side;
    }
  
    rectangle(length, breadth) {
      return length * breadth;
    }
  
    triangle(base, height) {
      return 0.5 * base * height;
    }
  }
  
  class MyClass extends Area {
    main() {
      let choice = parseInt(prompt("Enter your choice\n1. Circle\n2. Square\n3. Rectangle\n4. Triangle"));
  
      switch (choice) {
        case 1:
          let radius = parseFloat(prompt("Enter the radius:"));
          console.log(`Area of the circle is: ${this.circle(radius).toFixed(2)}`);
          break;
        case 2:
          let side = parseFloat(prompt("Enter the side:"));
          console.log(`Area of the square is: ${this.square(side).toFixed(2)}`);
          break;
        case 3:
          let length = parseFloat(prompt("Enter the length:"));
          let breadth = parseFloat(prompt("Enter the breadth:"));
          console.log(`Area of the rectangle is: ${this.rectangle(length, breadth).toFixed(2)}`);
          break;
        case 4:
          let base = parseFloat(prompt("Enter the base:"));
          let height = parseFloat(prompt("Enter the height:"));
          console.log(`Area of the triangle is: ${this.triangle(base, height).toFixed(2)}`);
          break;
        default:
          console.log("Invalid choice!");
      }
    }
  }
  
  let myClass = new MyClass();
  myClass.main();