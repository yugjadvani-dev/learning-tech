// Loops

// For Loop
// Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(i)
}

// Table
// Write a program to print the multiplication table of 5 using a for loop.
let num = 5
for (let i = 1; i <= 10; i++) {
  console.log(`${num} + ${i} = ${num * i}` )
}

// while loop
// Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0
let i = 1
while (i <= 10) {
    sum += i
    i++
}
console.log(sum)

// Write a program to print numbers from 10 to 1 using a while loop.
let i1 = 10
while (i1 >= 1){
  console.log(i1)
  i1--
}

// Do...While Loop
// Write a program to print numbers from 1 to 5 using a do...while loop.
let j = 1
do {
  console.log(j)
  j++
} while (j <= 5)

// Write a program to calculate the factorial of a number using a do...while loop.
let num2 = 5
let factorial = 1
do {
  factorial *= num
  num--
} while (num2 > 0)
console.log(factorial)

// Nested Loop
// Write a program to print a pattern using nested for loops:
let str = ''
for (let i = 1; i <= 5; i++) {
  str = ''
  for (let j = 1; j <= i; j++) {
    str += ' *'
  }
  console.log(str)
}

// Loop Control Statements
// Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue
  }
  console.log(i)
}

// Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break
  }
  console.log(i)
}