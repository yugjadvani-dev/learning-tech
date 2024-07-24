// Objects

// Object Creation and Access
// Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
    title: "Rich dad poor dad",
    author: "Robert",
    year: 2000,
    getBookInfo: function () {
        return `${this.title} by ${this.author}`
    },
    updatedYear: function (year) {
        return `Updated year is ${year}`
    }
}
console.log(book)

// Access and log the title and author properties of the book object.
console.log(book.title)
console.log(book.author)

// Object Methods
// Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
console.log(book.getBookInfo())

// Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
console.log(book.updatedYear(2024))

// Nested Object
// Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name: "ABC Library",
    books: [book, {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    }]
}
console.log(library)

console.log(library.name)

// Access and log the name of the library and the titles of all the books in the library.
library.books.forEach(book => console.log(book.title))

// The this keyword
// Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
console.log(book.getBookInfo())

// Object Itertion
// Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for(let property in book){
    console.log(`${property}, ${book[property]}`)
}

// Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book))
console.log(Object.values(book))