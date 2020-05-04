const squareArrow = (x) => {
    return x * x;
};

console.log(squareArrow(4));

const squareArrowExplicit = (x) => x * x;

console.log(squareArrowExplicit(4));

// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// create regulare arrow function
// create arrow function using shorthand syntax

const fullName = "Nick Black";

const getFirstName = (fullName) => {
    return fullName.split(" ")[0];
};

console.log(getFirstName(fullName));

const getFirstNameAgain = (fullName) => fullName.split(" ")[0];

console.log(getFirstNameAgain(fullName));
