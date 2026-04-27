function sayHello() {
    console.log("Hello, World!");
}

sayHello();

function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice");
greet("Bob");

function add(a, b) {
    return a + b;
}
let sum = add(5, 3);
console.log("The sum of 5 and 3 is: " + sum);

// 减法
function subtract(a, b) {
    return a - b;
}
let difference = subtract(10, 4);
console.log("The difference between 10 and 4 is: " + difference);

function multiply(a, b) {
    return a * b;
}
let product = multiply(6, 7);
console.log("The product of 6 and 7 is: " + product);

// 除法
function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero is not allowed.");
        return null;
    }
    return a / b;
}
let quotient = divide(12, 3);
console.log("The quotient of 12 and 3 is: " + quotient);
let invalidQuotient = divide(10, 0);
console.log("The invalid quotient is: " + invalidQuotient);

function square(x) {
    return x * x;
}
let squareResult = square(5);
console.log("The square of 5 is: " + squareResult);


const greetBtn = document.getElementById("greetBtn");
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");
const squareBtn = document.getElementById("squareBtn");
const outputDiv = document.getElementById("output");

greetBtn.onclick = function() {
    outputDiv.innerHTML = "Hello, World!";
    console.log("Greet button clicked");
};

addBtn.onclick = function() {
    let result = add(5, 3);
    outputDiv.innerHTML = "5 + 3 = " + result;
    console.log("结果= " + result);
}

squareBtn.onclick = function() {
    let result = square(5);
    outputDiv.innerHTML = "The square of 5 is: " + result;
    console.log("平方= " + result);
}


console.log("========== Day 2 学习总结 ==========");
console.log("1. 函数声明: function name() { }");
console.log("2. 参数: function add(a, b) { }");
console.log("3. 返回值: return a + b");
console.log("4. 调用函数: add(3, 5)");
console.log("5. 点击按钮测试上面的函数");