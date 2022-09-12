// // // // // // Identify the triangle as Equilateral, Isosceles, Scalene

function typeOfTriangle(a, b, c) {
  if (triangle(a, b, c)) {
    if (a === b && b === c) {
      return "Equilateral";
    } else if (a === b || b === c || c === a) {
      return "Isosceles";
    } else {
      return "Scalene";
    }
  } else {
    return "Cannot form a tringle using given lenght od sides.";
  }
}

function triangle(a, b, c) {
  let max = a;
  let sum = b + c;
  if (b > a) {
    max = b;
    sum = a + c;
  } else if (c > a) {
    max = c;
    sum = a + b;
  }

  if (sum >= max) {
    return true;
  } else {
    return false;
  }
}

console.log(typeOfTriangle(2, 1, 3));

// // // // // // Student Grade

// const marks = 41;

// switch (true) {
//   case marks > 90 && marks < 100:
//     console.log("S Grade");
//     break;
//   case marks > 80 && marks < 91:
//     console.log("A Grade");
//     break;
//   case marks > 70 && marks < 81:
//     console.log("B Grade");
//     break;
//   case marks > 60 && marks < 71:
//     console.log("C Grade");
//     break;
//   case marks > 50 && marks < 61:
//     console.log("D Grade");
//     break;
//   case marks > 40 && marks < 51:
//     console.log("E Grade");
//     break;
//   case marks >= 0 && marks < 41:
//     console.log("Student has Failed the exam.");
//     break;
//   default:
//     console.log("Invalid Marks Entered.");
//     break;
// }

// // // // // // Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000

// let sum = function (a, b) {
//   return a + b;
// };

// let subtract = function (a, b) {
//   return a - b;
// };

// function lastMultiple(a) {
//   for (let i = 1000; i > 0; i--) {
//     if (i % a === 0) {
//       return i;
//     }
//   }
// }

// function TotalOfAllMultiplesOf(a) {
//   let Sum = 0;
//   for (let i = 1; i <= lastMultiple(a) / a; i++) {
//     Sum = sum(Sum, a * i);
//   }
//   return Sum;
// }

// console.log(
//   TotalOfAllMultiplesOf(3) +
//     TotalOfAllMultiplesOf(5) -
//     TotalOfAllMultiplesOf(15)
// );

// // // // // // // // // // // Write a program to find the factorial of all prime numbers between a
// // // // // // // // // // given range . Range will be passed as 2 values in the function parameters.

// function isPrime(a) {
//   let factors = [];
//   for (let i = 1; i <= a / 2; i++) {
//     if (a % i === 0) {
//       factors.push(i);
//     }
//     if (factors.length > 1) {
//       return false;
//     }
//   }

//   if (factors.length === 1) {
//     return true;
//   }
// }

// function FactorialOf(a) {
//   let f = 1;
//   if (a === 0 || a === 1) {
//     return f;
//   } else {
//     f = a * FactorialOf(a - 1);
//   }
//   return f;
// }

// let primeNumbers = [];
// function FindAllPrimeBetween(a, b) {
//   for (let i = a; i <= b; i++) {
//     if (isPrime(i)) {
//       primeNumbers.push(i);
//     }
//   }

//   return primeNumbers;
// }

// let factorials = [];
// function FindAllFactorials(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     factorials.push(FactorialOf(arr[i]));
//   }

//   return factorials;
// }

// FindAllPrimeBetween(1, 100);
// FindAllFactorials(primeNumbers);

// for (let i = 0; i < primeNumbers.length; i++) {
//   console.log(
//     `Prime Number is ${primeNumbers[i]} and the factorial is ${factorials[i]}`
//   );
// }
