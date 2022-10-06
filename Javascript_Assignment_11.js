// // // // // // 1.

// let sumOfArray = (arr) => {
//   let sum = 0;
//   for (i of arr) {
//     sum += i;
//   }
//   return sum;
// };

// let arraySeperator = (arr) => {
//   let odd = [];
//   let even = [];
//   for (i in arr) {
//     if (i % 2 === 0) {
//       odd.push(arr[i]);
//       //   console.log(odd);
//     } else {
//       even.push(arr[i]);
//       //   console.log(even);
//     }
//   }
//   return [odd, even];
// };

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let odd = [];
// let even = [];

// [odd, even] = arraySeperator(arr);

// // a
// let diff = sumOfArray(odd) - sumOfArray(even);
// console.log("Sum of odd: " + sumOfArray(odd));
// console.log("Sum of even: " + sumOfArray(even));
// console.log("Difference of sum: " + diff);

// // b
// console.log("Length of odd array: " + odd.length);

// // c
// console.log("Length of even array: " + even.length);

// // d
// let avg = sumOfArray(arr) / arr.length;
// console.log("Avg: " + avg);

// // e
// let gcd = 0;
// for (let i = 1; i <= sumOfArray(odd) && i <= sumOfArray(even); i++) {
//   // check if is factor of both integers
//   if (sumOfArray(odd) % i == 0 && sumOfArray(even) % i == 0) {
//     gcd = i;
//   }
// }

// console.log(gcd);

// OUTPUT
// Sum of odd: 16
// Sum of even: 12
// Difference of sum: 4
// Length of odd array: 4
// Length of even array: 3
// Avg: 4
// 4

// // // // // // 2.

// let searchFor4 = (arr1, arr2) => {
//   let flag1,
//     flag2 = false;
//   arr1.forEach((e) => {
//     if (e === 4) {
//       flag1 = true;
//     }
//   });
//   arr2.forEach((e) => {
//     if (e === 4) {
//       flag2 = true;
//     }
//   });
//   return [flag1, flag2];
// };

// let [flag1, flag2] = searchFor4([1, 2, 3, 4, 5], [4, 6, 1, 8, 2]);

// if (flag1 && flag2) {
//   console.log("4 in both array");
// } else if (flag1 && !flag2) {
//   console.log("4 in 1st array");
// } else if (!flag1 && flag2) {
//   console.log("4 in 2nd array");
// } else {
//   console.log("4 is not present in any array");
// }

// // // // // 3.

// let ans = [];
// let explore = (a) => {
//   a.forEach((e) => {
//     if (typeof e === "object") {
//       explore(e);
//     } else {
//       ans.push(e);
//     }
//   });
// };

// explore([1, 2, 3, [4, 5, [6, 7]]]);
// console.log(ans);

// // // // // 4.

// let seprateDuplicates = (arr) => {
//   let duplicate = [];
//   let set = [];
//   let dictionary = new Map();
//   for (i of arr) {
//     if (isNaN(dictionary[i])) {
//       dictionary[i] = 1;
//       set.push(i);
//     } else if (dictionary[i] === 1) {
//       duplicate.push(i);
//     }
//   }
//   return [duplicate, set];
// };

// let [duplicate, set] = seprateDuplicates([1, 2, 3, 4, 5, 6, 2, 4]);
// console.log("Duplicate: " + duplicate);
// console.log("Array without Duplicate elements: " + set);

// // // // // // 5. Debug

function thirdLargest(arr, arr_size) {
  /* There should be
at least three elements */
  if (arr_size < 3) {
    console.log(" Invalid Input ");
    return;
  }
  let first = arr[0];
  for (let i = 1; i < arr_size; i++) {
    if (arr[i] > first) {
      first = arr[i];
    }
  }
  let second = Number.MIN_VALUE;
  for (let i = 0; i < arr_size; i++) {
    if (arr[i] < first && arr[i] > second) {
      second = arr[i];
    }
  }
  let third = Number.MIN_VALUE;
  for (let i = 0; i < arr_size; i++) {
    if (arr[i] > third && arr[i] < second) {
      third = arr[i];
    }
  }
  console.log("The third Largest " + "element is ", third);
}
let arr = [12, 13, 1, 10, 34, 16];
let n = arr.length;
thirdLargest(arr, n);
