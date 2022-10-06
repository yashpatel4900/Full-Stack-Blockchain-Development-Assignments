// 1. Can we put duplicate values in the set object ?

// No

// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);
// set.add(5);
// set.add(3);
// set.add(2);
// console.log(set); // Set(5) { 1, 2, 3, 4, 5 }

// 2.

// let obj = new Object();
// let obj1 = {};
// function student(name, age) {
//   this.name = name;
//   this.age = age;
// }

// obj.name = "pen";
// obj1.name = "pencil";
// let s1 = new student("Yash", 22);

// console.log(obj.name + " " + obj1.name + " " + s1.name);

// delete obj.name;
// console.log(obj.name + " " + obj1.name + " " + s1.name);

// 3.

let set = new Set();

for (let i = 0; i < 4; i++) {
  let num = Math.ceil(Math.random() * 10);
  console.log(num);
  set.add(num);
}

console.log(set);

let bool = false;
for (i of set) {
  if (i === 8) {
    bool = true;
    break;
  }
}

if (bool === true) {
  console.log("Set has 8");
} else {
  console.log("No set doesn't contain 8");
}
