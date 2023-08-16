// Spread Operator
// Concatenate Arrays
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries]

console.log(fruitsAndBerries)

// Join objects
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}

console.log(flyingCar)