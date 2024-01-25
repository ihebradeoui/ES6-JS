// Exercise 1
const square = (number, number2 = 5) => number * number * number2;
console.log(square(2));

// Exercise 2
const person = {
    name: "John",
    age: 25,
    city: "New York",
};

const display = (obj) => {
    return `${obj.name}, ${obj.age} ans, vit à ${obj.city}`;
};

console.log(display(person));

// Exercise 3
const books = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling"
    },
    {
        title: "Lord of the Rings",
        author: "J.R.R. Tolkien"
    }
];

const displayBook = (arr) => {
    return arr.map((book) => `${book.title} par ${book.author}`);
};

console.log(displayBook(books));

// Exercise 4
class Shape {
    constructor(color) {
        this.color = color;
    }

    getDescription() {
        return `Une forme de couleur ${this.color}`;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    getDescription() {
        return `${super.getDescription()} et de rayon ${this.radius}`;
    }
}

const circle = new Circle("rouge", 5);
console.log(circle.getDescription());

// Exercise 5
const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
};

getData().then((data) => console.log(data));
