//Question number 1 even, odd checker.
console.log("Question number 1-Even/odd checker.");

function evenOdd(num) {
    if (num % 2 == 0) {
        return `${num} is an even number`;
    }
    else {
        return `${num} is odd number`;
    }
}
console.log(evenOdd(5));
console.log(evenOdd(6));


//Question number 2 multiplication table generator
console.log(" ");
console.log("Question number 2-Multiplication table generator.");

function multiGenerator(num) {
    for (i = 1; i <= 10; i++) {
        console.log(`${num}*${i}=${num * i}`);
    }
}
console.log(multiGenerator(5));


//Question number 3 FizzBuzz Challenge
console.log(" ");
console.log("Question number 3-Fizz Buzz Challenge.");

function fizzBuzz() {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();


//Question number 4 Right angle traingle
console.log(" ");
console.log("Question number 4, Right angled traingle");

function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
}

// Test it
printTriangle(5);