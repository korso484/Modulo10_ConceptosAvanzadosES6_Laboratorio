//Data

const user = {
    name: "Dani",
    id: 3,
    age: 37
}

const fruits = ["apple", "orange", "banana"];

const numbers = [1, 2, 3, 4];

/////////////////////////////hasId/////////////////////////////

const hasId = ({ id }) => id ? true : false;

console.log(hasId(user));

/////////////////////////////head/////////////////////////////

const head = ([first]) => first;

console.log(head(fruits));

/////////////////////////////tail/////////////////////////////

const tail = ([, ...restItems]) => [restItems];

console.log(tail(fruits));

/////////////////////////////swapFirstToLast/////////////////////////////

const swapFirstToLast = ([first, ...restItems]) => [restItems.concat(first)];

console.log(swapFirstToLast(fruits));

/////////////////////////////excludeId/////////////////////////////

const excludeId = ({ id, ...restObject }) => restObject;

console.log(excludeId(user));

/////////////////////////////wordsStartingWithA/////////////////////////////

const wordsStartingWithA = arr => arr.filter(item => item.startsWith('a'));

console.log(wordsStartingWithA(fruits));

/////////////////////////////concat/////////////////////////////

const concat = (arr) => arr.join(" | ");

console.log(concat(fruits));

/////////////////////////////multArray/////////////////////////////

const multArray = (arr, x) => arr.map(item => {
    return item * x;
});

console.log(multArray(numbers, 2));

/////////////////////////////calcMult/////////////////////////////

const calcMult = (myArgs) => myArgs.reduce((acc, arg) => acc * arg, 1);

console.log(calcMult(numbers));

//////////////////////////////////////////////////////////EXTRA




