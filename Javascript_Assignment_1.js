//  YASH PATEL

// // // // // // // //  To Check Leap Year

let x = 2022;
let y = 2016;

let checkLeap = (year) => {
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    console.log(`${year} is a Leap Year!`);
  } else {
    console.log(`${year} is not a Leap Year`);
  }
};

checkLeap(y);
checkLeap(x);

// // // // // // // // Convert temperatures to and from Celsius, Fahrenheit.

c = 60;
f = 45;

let celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

let fahrenheitToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

console.log(
  `Converting ${c} degree Celsius to Fahrenheit resulted in ${celsiusToFahrenheit(
    c
  )} F`
);

console.log(
  `Converting ${f} degree Fahrenheit to Celsius resulted in ${fahrenheitToCelsius(
    f
  )} C`
);

// // // // // // // // Factorial of a Number

let a = 20;

let factorialOf = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return n * factorialOf(n - 1);
  }
};

console.log(`Factorial of ${a} is ${factorialOf(a)}`);
