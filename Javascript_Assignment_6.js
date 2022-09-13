// // // // // Rectangle and Square

class Rectangle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  area() {
    return this.x * this.y;
  }
}

class Square extends Rectangle {
  constructor(x) {
    super(x);
    this.y = x;
  }
}

let square1 = new Square(2);
console.log(`Area of a square with side ${square1.x} is ${square1.area()}`);

// // // // // Nth Largest Number

// function swap(a, b) {
//   b = a + b;
//   a = b - a;
//   b = b - a;
//   return { a, b };
// }

function BubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

function NthLargest(arr, n) {
  const sorted = BubbleSort(arr);
  return sorted[n - 1];
}

let arr = [3, 45, 6, 7, 23, 5, 7, 8];
let n = 3;

console.log(`Number you asked for is ${NthLargest(arr, n)}`);

// // // // // // // // Dash between Even Numbers

function BreakNumber(a) {
  let arr = a.toString();
  return arr;
}

function DashEven(a) {
  let string = "";
  let arr = BreakNumber(a);

  for (let i = 0; i < arr.length - 1; i++) {
    string += arr[i].toString();
    if (parseInt(arr[i]) % 2 === parseInt(arr[i + 1]) % 2) {
      string += "-";
    }
  }
  string += arr[arr.length - 1];
  return string;
}

console.log(`Customized string you asked for is: ${DashEven("025468")}`);
