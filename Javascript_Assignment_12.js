// // // // // 1.

console.log("\n \n \n \n Task 1");

let employeeRecords = {
  id: [67, 48, 29],
  name: ["Hitanshu", "Ninad", "Amandeep"],
  salary: [75000, 82000, 98000],
};

let getAllIds = () => {
  return employeeRecords.id;
};

let employeeCount = () => {
  return employeeRecords.id.length;
};

let getIdAndName = () => {
  for (i in employeeRecords.id) {
    console.log(`${employeeRecords.id[i]} : ${employeeRecords.name[i]}`);
  }
};

let getAllSalary = () => {
  return employeeRecords.salary;
};

let getAvgSalary = () => {
  return (
    employeeRecords.salary.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    ) / employeeCount()
  );
};

console.log(`All Employee IDs: ${getAllIds()}`);
console.log(`Total number of Employees: ${employeeCount()}`);
getIdAndName();
console.log(`Salary of all Employee : ${getAllSalary()}`);
console.log(`AvgSalary of an Employee : ${getAvgSalary()}`);

// // // // // // 2.

console.log("\n \n \n \n Task 2");

let studentRecords = new Map();

studentRecords.set("id", [1, 2, 3]);
studentRecords.set("name", ["Hitanshu", "Ninad", "Amandeep"]);
studentRecords.set("scores", [90, 88, 92]);

studentRecords.forEach((v, k) => {
  if (k === "name") {
    console.log(v);
  }
});

// One Parameter
console.log(`\n \nOne Parameter`);
studentRecords.forEach((v, k) => {
  console.log(v);
});

// Two Parameter
console.log(`\n \nTwo Parameter`);
studentRecords.forEach((v, k) => {
  console.log(`${k} - ${v}`);
});

// Three Parameter
console.log(`\n \nThree Parameter`);
studentRecords.forEach((v, k) => {
  console.log(`${k} - ${v}`);
  console.log(studentRecords);
});

// // // // // 3.

console.log("\n \n \n \n Task 3");

let originalArray = [1, 2, 3, 4, 5];
let map = new Map();
let squaredArray = originalArray.map((e) => {
  return Math.pow(e, 2);
});

console.log(`\n \n${squaredArray}`);

for (i in originalArray) {
  map.set(originalArray[i], squaredArray[i]);
}

console.log(
  `Map of squared array: ${map.forEach((v, k) => console.log(`${k} - ${v}`))}`
);
