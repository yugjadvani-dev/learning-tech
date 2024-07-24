// Functions

// Function declaration
function oddeven(num){
if (num % 2 == 0){
    console.log(num + ' is Even')
}else {
    console.log(num + ' is Odd')
}
}
oddeven(4)

// Square of numbers
function square(num){
    return num * num
}
console.log(square(5))

// Function expression
let max = function(a, b){
    return a > b ? a : b
}
console.log(max(3, 5))

// concatenate two strings
let str1 = 'Hello'
let str2 = 'World'
let concat = function(str1, str2){
    return str1 + ' ' + str2
}
console.log(concat(str1, str2))

// Arrow function
const sum = (num1, num2) => {
    return num1 + num2
}
console.log(sum(10,20))

let checkChar = (str, char) => {
    return str.includes(char)
}
console.log(checkChar('Hello World', 'l'))

// Function parameter and default value
let multiply = (num1, num2 = 1) => {
    return num1 * num2
}
console.log(multiply(5, 10)) // 50
console.log(multiply(5)) // 5

let greetPerson = (name = 'User', age = 20) => {
    return `Hello, Good Morning, ${name}! You are ${age} years old.`
}
console.log(greetPerson('John Doe', 30)) // Hello, John Doe! You are 30 years old.
console.log(greetPerson('Jane Smith')) // Hello, Jane Smith! You are 20 years old.

let multiplyBy = (num1, num2) => {
    return num1 * num2
}

let callFunction = (func, num) => {
    for(let i = 0; i < num; i++){
        console.log(func(i, 2))
    }
}
callFunction(multiply,5)

const applyFunction = (func1, func2, value) => {
    const intermediateResult = func1(value)
    const finalResult = func2(intermediateResult)
    return finalResult
}

const add = (x) => x + 2
const multiply1 = (x) => x * 2 

const result = applyFunction(add, multiply1, 5)
console.log(result) // 14
