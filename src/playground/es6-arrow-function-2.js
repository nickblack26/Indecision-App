// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //  console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer boudn with arrow functions

const user = {
    name: "Nick",
    cities: ["Dallas", "Memphis", "St. Louis"],
    printPlacesLive() {
        return this.cities.map((city) => this.name + " has lived in " + city);
    },
};

console.log(user.printPlacesLive());

// Challenge Area

const multiplier = {
    numbers: [1, 3, 3],
    muliplyBy: 4,
    multiply() {
        return this.numbers.map((number) => this.muliplyBy * number);
    },
};

console.log(multiplier.multiply());
