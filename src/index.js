//Data

const user = {
    name: "Dani",
    id: 3,
    age: 37
}

const fruits = ["apple", "orange", "banana"];

const names = ["Peter", "Pamela", "Percival"];

const vehicles = ["car", "motorcycle", "plane", "boat"];

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

//EXTRA

/////////////////////////////swapFirstSecond/////////////////////////////

const swapFirstSecond = ([first, second, ...restItems]) => [second, first, ...restItems];

console.log(swapFirstSecond(fruits));

/////////////////////////////firstEqual/////////////////////////////

const firstEqual = (myArgs, char) => myArgs.every(arg => arg.startsWith(char));

console.log(firstEqual(names, 'P'));

/////////////////////////////longest/////////////////////////////

const longest = (arr) => arr.reduce((a, b) => { return a.length > b.length ? a : b });

console.log(longest(vehicles));

/////////////////////////////searchInStringV1/////////////////////////////

const searchInStringV1 = (str, char) =>
    Array.from(str).reduce((acc, item) => {
        if (item === char) acc++;
        return acc;
    }, 0);

console.log(searchInStringV1("calabaza", 'a'));

/////////////////////////////searchInStringV2/////////////////////////////

const searchInStringV2 = (str, char) =>
    Array.from(str).map(item => {
        if (item === char) return 1;
    });

console.log(searchInStringV1("hola", 'a'));

/////////////////////////////sortCharacters/////////////////////////////

const sortCharacters = (str) => Array.from(str).sort();

console.log(sortCharacters("murcielago"));

/////////////////////////////shout/////////////////////////////

const shout = (myArgs) =>
    myArgs.map(item => item.toUpperCase())
        .reduce((acc, itemUpper) => acc + " ¡ " + itemUpper + "! ", "");

console.log(shout(names));

//Lista de la compra

const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

//Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.

const addIVA = (tax, products) => products
    .map(product => ({ ...product, IVA: (tax / 100 * product.price).toFixed(2) }));

console.log(addIVA(21, shoppingCart));

//Ordena la lista de más a menos unidades.

const orderMax = (products) => products.sort((p1, p2) => p2.units - p1.units);

console.log(orderMax(shoppingCart));

//Obtén el subtotal gastado en droguería.

const subTotalD = products => products
    .filter(product => product.category === 'Droguería')
    .reduce((acc, product) => acc + (product.price * product.units), 0);

console.log(subTotalD(shoppingCart));

//Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.

const newOrderList = products => products
    .map(product => ({ category: product.category, name: product.product, price: product.units * product.price }))
    .sort((p1, p2) => (p1.category < p2.category) ? -1 : 1)
    .reduce((acc, product) => acc + "Producto: " + product.name + " -> Precio total " + product.price + " € \n", "");

console.log(newOrderList(shoppingCart));




