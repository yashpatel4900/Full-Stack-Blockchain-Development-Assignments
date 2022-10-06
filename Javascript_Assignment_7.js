// // // // 1.  Input:Icecream     Output:Icec...

// let str = "Icecream";

// function truncate(str) {
//   if (str.length > 4) {
//     str = str.substr(0, 4);
//     return str;
//   } else {
//     return str;
//   }
// }

// console.log(truncate(str));

// // // // 2. remove whitespaces

// let str = "Lets Remove All Spaces";

// const removeWhiteSpace = (str) => {
//   return str.replace(/ /g, "");
// };

// console.log(removeWhiteSpace(str));

// // // // 3. Input: “Hii Boy” Output: “Boy Hii”

// let str = "Hii Boy what's up";

// const reverseSentence = (str) => {
//   let arr = str.split(" ");
//   let ans = "";
//   for (let i = arr.length - 1; i >= 0; i--) {
//     ans = ans + arr[i] + " ";
//   }
//   return ans;
// };

// console.log(reverseSentence(str));

// // // // 4. replace character “a” with “x”

// let str = "apple";
// let str1 = "sea";

// const replaceAwithX = (str) => {
//   return str.replace(/a/g, "x");
// };

// console.log(replaceAwithX(str));

// // // // 5. What string method can be used to convert string into array?

// let str = "apple";
// let arr = str.split("");
// console.log(arr);

// // // // 6. What string method can be used to check the occurrence of a specified text in a string?

// .includes()

// let str = "Hello girl";
// const ans = str.includes("girl");
// console.log(ans);

// // // // 7. How can you break a string to a newline in Javascript ?

// \n

// let str = "Hello girl. What's up!?";
// const ans = str.replace(/[.]/g, ". \n");
// console.log(ans);

// // // // 8. test whether the first character of a string is lowercase.

// const str = "Apple";
// if (str[0] >= "a" && str[0] <= "z") {
//   console.log("true");
// } else {
//   console.log("false");
// }

// // // // 9. "yes", "YES","Yes"

// let q = ["yes", "YES", "Yes", "YeS", "yEs", "yas"];
// for (i of q) {
//   if (i.toLowerCase() == "yes") {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

// // // // 10.

let str = "apple";

// Upper
const f1 = (str) => {
  return str.toUpperCase();
};

// First Upper
const f2 = (str) => {
  return str[0].toUpperCase() + str.substring(1, str.length);
};

// Lower
const f3 = (str) => {
  return str.toLowerCase();
};

// Half and Swap
const f4 = (str) => {
  let halfBreak = str.length / 2;
  let ans = "";
  return ans.concat(
    str.substring(halfBreak, str.length),
    str.substring(0, halfBreak)
  );
};

// IMPORTANT Dictionary (map)
const f5 = (str) => {
  let counter = new Map();
  for (i of str) {
    if (isNaN(counter[i])) {
      counter[i] = 1;
    } else {
      counter[i] += 1;
    }
  }
  return counter;
};

// Reverse
const f6 = (str) => {
  let ans = "";
  for (let i = str.length - 1; i >= 0; i--) {
    ans += str[i];
  }
  return ans;
};

let performAll = [f1, f2, f3, f4, f5, f6];
performAll.forEach((i) => {
  console.log(i(str));
});
