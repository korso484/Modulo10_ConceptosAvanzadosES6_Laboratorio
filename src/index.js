const hasId = (object) => {
    const { id } = object ? true : false;
}

const user = {
    name: "Dani",
    id: 3,
    age: 37
}

console.log(hasId(user));

