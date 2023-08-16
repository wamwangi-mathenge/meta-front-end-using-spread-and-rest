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

console.log("---------------------------")

// Add new members to arrays without using the push() method
let veggies = ['onion', 'parsely'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies)

console.log("-----------------------------")

// Convert a string to an array using the spread operator
const greeting = "Hello"
const arrayOfChars = [...greeting]
console.log(arrayOfChars)

// Copy an object/array into a separate one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201
console.log(car1.speed, car2.speed)