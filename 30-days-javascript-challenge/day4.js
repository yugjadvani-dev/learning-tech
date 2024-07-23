// Loops

// For Loop
for (let i = 1; i <= 10; i++) {
  console.log(i)
}

// Table
let num = 5
for (let i = 1; i <= 10; i++) {
  console.log(`${num} + ${i} = ${num * i}` )
}

// while loop
// the sum of numbers
let sum = 0
let i = 1
while (i <= 10) {
    sum += i
    i++
}
console.log(sum)

let i1 = 10
while (i1 >= 1){
  console.log(i1)
  i1--
}

// Do While Loop
let j = 1
do {
  console.log(j)
  j++
} while (j <= 5)

// Factorial Num using While Loop
let num2 = 5
let factorial = 1
while (num2 > 0) {
  factorial *= num2
  num2--
}
console.log(factorial)

// Nested Loop
let str = ''
for (let i = 1; i <= 5; i++) {
  str = ''
  for (let j = 1; j <= i; j++) {
    str += ' *'
  }
  console.log(str)
}

// Loop Control Statements
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue
  }
  console.log(i)
}

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break
  }
  console.log(i)
}