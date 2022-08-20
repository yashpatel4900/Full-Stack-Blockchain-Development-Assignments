// // // // // // // // CALCULATOR

let sum = (a, b) => {
  return a + b;
};

let difference = (a, b) => {
  return a - b;
};

let product = (a, b) => {
  return a * b;
};

let division = (a, b) => {
  return a / b;
};

let modulo = (a, b) => {
  return a % b;
};

let raiseTo = (a, b) => {
  return a ** b;
};

const perform = [sum, difference, product, division, modulo, raiseTo];
function performAllOperation(a, b) {
  for (let i = 0; i < perform.length; i++) {
    console.log("The", perform[i], "of", a, "and", b, ":", perform[i](a, b));
  }
}

performAllOperation(2472392, 3327678);

// // // // // //  ALL EVEN FROM 1 TO 100

let printEven = function () {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};

printEven();

// // // // // // // PRIME OR NOT

let checkPrime = (number) => {
  let halfOfNumber = parseInt(number / 2);
  let divisibleBy = [];
  for (let i = 2; i < halfOfNumber; i++) {
    if (divisibleBy.length == 1) {
      break;
    } else if (number % i == 0) {
      divisibleBy.push(i);
    }
  }
  return divisibleBy;
};

let declareResult = (arr) => {
  if (arr.length >= 1) {
    console.log("Not a prime number because divisible by: ", arr);
  } else if (arr.length == 0) {
    console.log("Is a prime number");
  }
};

declareResult(checkPrime(327472457777));
