class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }
  hasCourse() {
    return !!this.course;
  }
  getDescription() {
    //  you can access the parent class using the super keyword
    let description = super.getDescription();
    if (this.hasCourse()) {
      description += ` Their course is ${this.course}`;
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  };
  getGreeting(){
    let greeting = super.getGreeting();
    if(this.location){
      greeting += ` I am from ${this.location}.`;
    }
    return greeting;
  }
}

const me = new Traveller('Michael', 29);
const you = new Traveller(undefined, undefined, 'Nowhere');
console.log(me.getGreeting());
console.log(you.getGreeting());