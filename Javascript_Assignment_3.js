// // // // // // Pattern Printing

let n = 4;
let counter = 1;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += counter;
    string += " ";
    counter++;
  }
  string += "\n";
}

console.log(string);

// // // // // // // // Armstrong Number

function breakTheNumber(a) {
  arr = [];
  string = a.toString();
  for (let i = 0; i < string.length; i++) {
    arr.push(parseInt(string[i]));
  }
  return arr;
}

function sumOfAllCubes(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i] ** 3;
  }
  return sum;
}

function isArmstrong(a) {
  let arr = breakTheNumber(a);
  let sumOfAllCube = sumOfAllCubes(arr);
  if (a === sumOfAllCube) {
    return `Yes ${a} is an Armstrong Number`;
  } else {
    return `No ${a} is not an Armstrong Number.`;
  }
}

console.log(isArmstrong(371));

// // // // // // // // // Special Number

function breakTheNumber(a) {
  arr = [];
  string = a.toString();
  for (let i = 0; i < string.length; i++) {
    arr.push(parseInt(string[i]));
  }
  return arr;
}

function factorialOf(a) {
  factorial = 1;
  if (a === 0 || a === 1) {
    return 1;
  } else {
    factorial = a * factorialOf(a - 1);
  }
  return factorial;
}

function sumOfAllFactorials(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + factorialOf(arr[i]);
  }
  return sum;
}

function isSpecial(a) {
  let arr = breakTheNumber(a);
  let sum = sumOfAllFactorials(arr);

  if (sum === a) {
    return `Yes ${a} is a Special Number`;
  } else {
    return `No ${a} is not a Special Number.`;
  }
}

console.log(isSpecial(40585));
