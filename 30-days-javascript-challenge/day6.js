// Arrays

// Array Creation and Access
// Create an array of numbers from 1 to 5 and log the array to the console.
const arr = [1, 2, 3, 4, 5]
console.log(arr)

// Access the first and last elements of the array and log them to the console.
const arr2 = [1, 2, 3, 4, 5]
console.log(arr2[0], arr2[4])

// Array Methods (Basic)
// Push
// Use the push method to add a new number to the end of the array and log the updated array.
const arr3 = [1, 2, 3, 4, 5]
console.log(arr3.length) // 5

console.log(arr3.push(6)) // 6
console.log(arr3) // [1, 2, 3, 4, 5, 6]

// Pop
// Use the pop method to remove the last element from the array and log the updated array.
const arr4 = [1, 2, 3, 4, 5]
console.log(arr4.length) // 5

console.log(arr4.pop()) // 5
console.log(arr4) // [1, 2, 3, 4]

// Shift
// Use the shift method to remove the first element from the array and log the updated array.
const arr5 = [1, 2, 3, 4, 5]
console.log(arr5.length) // 5

console.log(arr5.shift()) // 1
console.log(arr5) // [2, 3, 4, 5]

// Unshift
// Use the unshift method to add a new number to the beginning of the array and log the updated array.
const arr6 = [1, 2, 3, 4, 5]
console.log(arr6.length) // 5

console.log(arr6.unshift(0)) // 0
console.log(arr6) // [0, 1, 2, 3, 4, 5]

// Array methods (Intermediate)
// Use the map method to create a new array where each number is doubled and log the new array.
const arr7 = [1, 2, 3, 4, 5]
const doubleArr = arr.map(num => num * 2)
console.log(doubleArr) // [2, 4, 6, 8, 10]

// Filter
// Use the filter method to create a new array with only even numbers and log the new array.
const arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
const filteredArr = arr8.filter(num => num % 2 === 0)
console.log(filteredArr)

// Reduce
// Use the reduce method to calculate the sum of all numbers in the array and log the result.
const arr9 = [1, 2, 3, 4, 5]
const sum = arr9.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum) // 15

// Array Iteration
// Use a for loop to iterate over the array and log each element to the console.
const arr10 = [1, 2, 3, 4, 5]
for (let i = 0; i < arr10.length; i++){
    console.log(arr10[i])
}

// Use the forEach method to iterate over the array and log each element to the console.
const arr11 = [1, 2, 3, 4, 5]
arr11.forEach(num => console.log(num))

// Multi-dimensional array
// Create a two-dimensional array (matrix) and log the entire array to the console.
const matrix = [[1,2,3], [4,5,6],[7,8,9]]
console.log(matrix)

// Access and log a specific element from the two-dimensional array.
console.log(matrix[1,2])