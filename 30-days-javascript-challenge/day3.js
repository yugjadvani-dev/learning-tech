// Control Structures

// IF-ELSE Statements

// Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = -4
if(num === 0){
    console.log("num is zero")
}else if(num >= 0){
    console.log("num is positive")
}else {
    console.log("num is negative")
}

// Write a program to check if a person is eligible to vote (age &gt;= 18) and log the result to the console.
let age = 18
if (age >= 18){
    console.log("eligible to vote")
}else{
    console.log("not eligible to vote")
}

// Nested if-else Statements
// Write a program to find the largest of three numbers using nested if-else statements.
let num1=10, num2=20, num3=30
if(num1 > num2){
    if(num1 > num3){
        console.log(num1 + " is large")
    }else{
        console.log(num3 + " is large")
    }
}else{
    console.log(num2 + " is large")
}

// Switch Case
// Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = 5
switch(day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid Day")
}

// Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let grade = 'A'
switch(grade){
    case 'A':
        console.log("Excellent")
        break;
    case 'B':
        console.log("Good")
        break;
    case 'C':
        console.log("Satisfactory")
        break;
    case 'D':
        console.log("Fair")
        break;
    case 'F':
        console.log("Fail")
        break;
    default:
        console.log("Invalid Grade")
}

// Condition (Ternary) Operator
// Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
const num4 = 4
console.log(num4 % 2 === 0 ? "Even" : "Odd")

// Combining Conditions
// Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2000
console.log(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? "Leap year" : "Not leap year")