// Objects

// Object Creation and update
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

console.log(book.title)
console.log(book.author)

// Object Methods
console.log(book.getBookInfo())

console.log(book.updatedYear(2024))

// Nested Object
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

library.books.forEach(book => console.log(book.title))

// The this keyword
console.log(book.getBookInfo())

// Object Itertion
for(let property in book){
    console.log(`${property}, ${book[property]}`)
}

console.log(Object.keys(book))
console.log(Object.values(book))