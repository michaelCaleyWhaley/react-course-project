function addEs5() {
  console.log(arguments);
  // arguments keyword has no equivalent in arrow function
}
addEs5(4, 5, 6, 6);

const add = (a, b) => a + b;
console.log(add(10, 20));


const user = {
  name: 'Michael',
  cities: ['London', 'Hull', 'Manchester'],
  printCitiesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
console.log(user.printCitiesLived());


const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplier: 5,
  multiply() {
    return this.numbers.map((number) => number * this.multiplier);
  }
};