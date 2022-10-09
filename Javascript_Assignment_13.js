// // // // // // Task 1

console.log("\n \n \n \n Task 1");

array = [1, 2, 3, 4, 5];

let sum = () => {
  return array.reduce((acc, e) => acc + e, 0);
};

let getAvg = () => {
  return (
    array.reduce((acc, currentValue) => acc + currentValue, 0) / array.length
  );
};

console.log(`Sum of all numbers in array: ${sum()}`);
console.log(`Average of all numbers in array: ${getAvg()}`);

// // // // // Task 2

console.log("\n \n \n \n Task 2");

let gradeMap = new Map();

const assignGrade = (obj) => {
  switch (true) {
    case obj.marks > 90 && obj.marks < 101:
      if (gradeMap.get("A") === undefined) {
        gradeMap.set("A", []);
      }
      gradeMap.get("A").push(obj);
      console.log(`${obj.name} got ` + "A Grade");
      break;
    case obj.marks > 80 && obj.marks < 91:
      if (gradeMap.get("B") === undefined) {
        gradeMap.set("B", []);
      }
      gradeMap.get("B").push(obj);
      console.log(`${obj.name} got ` + "B Grade");
      break;
    case obj.marks > 70 && obj.marks < 81:
      if (gradeMap.get("C") === undefined) {
        gradeMap.set("C", []);
      }
      gradeMap.get("C").push(obj);
      console.log(`${obj.name} got ` + "C Grade");
      break;
    case obj.marks > 60 && obj.marks < 71:
      if (gradeMap.get("D") === undefined) {
        gradeMap.set("D", []);
      }
      gradeMap.get("D").push(obj);
      console.log(`${obj.name} got ` + "D Grade");
      break;
    case obj.marks > 50 && obj.marks < 61:
      if (gradeMap.get("E") === undefined) {
        gradeMap.set("E", []);
      }
      gradeMap.get("E").push(obj);
      console.log(`${obj.name} got ` + "E Grade");
      break;
    case obj.marks >= 0 && obj.marks < 51:
      if (gradeMap.get("F") === undefined) {
        gradeMap.set("F", []);
      }
      gradeMap.get("F").push(obj);
      console.log(`${obj.name} got ` + "F");
      break;
    default:
      console.log(`${obj.name} has ` + "Invalid Marks Entered.");
      break;
  }
};

let students = [
  { name: "John", marks: 92 },
  { name: "Oliver", marks: 85 },
  { name: "Michael", marks: 79 },
  { name: "Dwight", marks: 95 },
  { name: "Oscar", marks: 64 },
  { name: "Kevin", marks: 48 },
];

const returnObj = (obj) => {
  obj.forEach((e) => console.log(`${e}`));
};

students.forEach((obj) => assignGrade(obj));

console.log(gradeMap);
