// Control Structures

// IF-ELSE
let num = -4
if(num === 0){
    console.log("num is zero")
}else if(num >= 0){
    console.log("num is positive")
}else {
    console.log("num is negative")
}

let age = 18
if (age >= 18){
    console.log("eligible to vote")
}else{
    console.log("not eligible to vote")
}

// Nested if-else
// find the largest of three numbers using nested if-else
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
const num4 = 4
console.log(num4 % 2 === 0 ? "Even" : "Odd")

// Combining Conditions
let year = 2000
console.log(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? "Leap year" : "Not leap year")