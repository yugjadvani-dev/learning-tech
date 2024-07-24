// ES6+ Features

// Template Literals
const name = "John"
const age = 30
console.log(`Hello, my name is ${name} and I am ${age} years old.`)

console.log(`Hello, 
    My Name is
     ${name}
      and
       I am ${age} 
      years
       old`)

// Destructuring
const numbers = [1, 2, 3, 4, 5]
const [first, second] = numbers;
console.log(first, second)

const book = {
    title: "Rich dad poor dad",
    author: "Robert",
    year: 2000,
}
const {title, author} = book;
console.log(title, author)

// Spread and Rest Operator
// Spread Operator
const numbers2 = [1, 2, 3, 4, 5]
const newNumbers = [...numbers2, 6, 7, 8, 9]
console.log(newNumbers)

// Rest Operator
function sum(...numbers){
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}
console.log(sum(1, 2, 3, 4, 5))

// Default Parameters
function greet(name = "Guest", age = 0){
    return `Hello, my name is ${name} and I am ${age} years old.`
}
console.log(greet())
console.log(greet("John", 30))

// Enhanced Object Literals
const person = {
    name: "John Doe",
    age: 30,
    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
}

console.log(person)
person.greet()

// Create an object with computed property names based on variables and log the object to the console.
const variableName = "name"
const variableValue = "John Doe"

const person2 = {
    [variableName]: variableValue,
}
console.log(person2)