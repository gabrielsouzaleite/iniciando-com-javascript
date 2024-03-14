// Functions
function helloWorld() {
  alert("Hello world!");
}

function sum(number1, number2) {
  total = number1 + number2;

  console.log(total);
}

function sub(number1, number2) {
  total = number1 - number2;

  console.log(total);
}

function multiply(number1, number2) {
  total = number1 * number2;

  console.log(total);
}

function divide(number1, number2) {
  total = number1 / number2;

  console.log(total);
}

function isANumber(number) {
  if (typeof number === "number") {
    console.log("É um número");
  } else {
    console.log("Não é um número");
  }
}

function isAString(string) {
  if (typeof string === "string") {
    console.log("É uma string");
  } else {
    console.log("Não é uma string");
  }
}

function isABoolean(boolean) {
  if (typeof boolean === "boolean") {
    console.log("É um boolean");
  } else {
    console.log("Não é um boolean");
  }
}

function isPair(number) {
  if (number % 2 === 0) {
    console.log("É par");
  } else {
    console.log("Não é par");
  }
}

function isOdd(number) {
  if (number % 2 !== 0) {
    console.log("É ímpar");
  } else {
    console.log("Não é ímpar");
  }
}
// Problems solved
const numberA = 5;
const numberB = 5;
const string = "Gabriel Souza Leite";
const boolean = true;

helloWorld();
sum(numberA, numberB);
sub(numberA, numberB);
multiply(numberA, numberB);
divide(numberA, numberB);
isANumber(numberA);
isAString(string);
isABoolean(boolean);
isPair(numberA);
isOdd(numberA);
