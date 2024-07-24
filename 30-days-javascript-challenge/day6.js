// Arrays

// Array Creation and Access
const arr = [1, 2, 3, 4, 5]
console.log(arr)

const arr2 = [1, 2, 3, 4, 5]
console.log(arr2[0], arr2[4])

// Array Methods (Basic)
// Push
const arr3 = [1, 2, 3, 4, 5]
console.log(arr3.length) // 5

console.log(arr3.push(6)) // 6
console.log(arr3) // [1, 2, 3, 4, 5, 6]

// Pop
const arr4 = [1, 2, 3, 4, 5]
console.log(arr4.length) // 5

console.log(arr4.pop()) // 5
console.log(arr4) // [1, 2, 3, 4]

// Shift
const arr5 = [1, 2, 3, 4, 5]
console.log(arr5.length) // 5

console.log(arr5.shift()) // 1
console.log(arr5) // [2, 3, 4, 5]

// Unshift
const arr6 = [1, 2, 3, 4, 5]
console.log(arr6.length) // 5

console.log(arr6.unshift(0)) // 0
console.log(arr6) // [0, 1, 2, 3, 4, 5]

// Array methods (Intermediate)
const arr7 = [1, 2, 3, 4, 5]
const doubleArr = arr.map(num => num * 2)
console.log(doubleArr) // [2, 4, 6, 8, 10]

// Filter
const arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
const filteredArr = arr8.filter(num => num % 2 === 0)
console.log(filteredArr)

// Reduce
const arr9 = [1, 2, 3, 4, 5]
const sum = arr9.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum) // 15

// Array Iteration
const arr10 = [1, 2, 3, 4, 5]
for (let i = 0; i < arr10.length; i++){
    console.log(arr10[i])
}

const arr11 = [1, 2, 3, 4, 5]
arr11.forEach(num => console.log(num))

// Multi dimensional array
const matrix = [[1,2,3], [4,5,6],[7,8,9]]
console.log(matrix)

console.log(matrix[1,2])