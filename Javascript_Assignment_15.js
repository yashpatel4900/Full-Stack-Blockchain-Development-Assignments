// // // // // Task 1

const nextEdge = (a, b) => {
  return a + b - 1;
};

console.log(nextEdge(8, 10));
console.log(nextEdge(5, 7));
console.log(nextEdge(9, 2));

// // // // // Task 2

console.log("\n\nTask 2");

const rightshift = (a, b) => {
  let ans = Math.floor(a / Math.pow(2, b));
  return ans;
};

console.log(rightshift(80, 3));
console.log(rightshift(-24, 2));
console.log(rightshift(-5, 1));

// // // // // Task 3

console.log("\n\nTask 3");

const derivative = (b, m) => {
  let x = m;
  return b * (b - 1) * Math.pow(x, b - 2);
};

console.log(derivative(4, 5));

// // // // // Task 4

console.log("\n\nTask 4");

const triangle = (a) => {
  let sum = 0;
  let decrementer = a;
  for (let ballRow = 1; ballRow <= a; ballRow++) {
    sum = sum + ballRow * decrementer;
    decrementer--;
  }
  return sum;
};

console.log(triangle(6));

// // // // // Task 5

console.log("\n\nTask 5");

const total = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      sum = sum + 0.25 * arr[i];
    } else if (i === 1) {
      sum = sum + 0.1 * arr[i];
    } else if (i === 2) {
      sum = sum + 0.05 * arr[i];
    } else {
      sum = sum + 0.01 * arr[i];
    }
  }
  return sum;
};

const changeEnough = (arr, amount) => {
  console.log(
    `Total of coins: ${total(arr)} and the required amount is ${amount}`
  );
  if (total(arr) > amount) {
    return true;
  } else {
    return false;
  }
};

console.log(changeEnough([25, 20, 5, 0], 4.25));
