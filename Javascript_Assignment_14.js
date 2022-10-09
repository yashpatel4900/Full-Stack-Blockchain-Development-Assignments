let employees = [
  {
    id: 1,
    name: "Abhinav",
    department: "IT",
    Salary: 75000,
  },
  {
    id: 2,
    name: "Gaurav",
    department: "Sales",
    Salary: 52000,
  },
  {
    id: 3,
    name: "Raj",
    department: "IT",
    Salary: 64000,
  },
];

const getITboys = (arr) => {
  arr.forEach((e) => {
    if (e.department === "IT") {
      console.log(e);
    }
  });
};

const getLessSalaryBoys = (arr) => {
  arr.forEach((e) => {
    if (e.Salary < 65000) {
      console.log(e);
    }
  });
};

console.log("\nIT Guys: ");
getITboys(employees);

console.log("\nGuys with less than 65000 Salary: ");
getLessSalaryBoys(employees);

// // // // // Task 2
console.log("\n \n \n \n Task 2");

let hospitals = [
  {
    id: 1,
    name: "Hospital A",
    location: "Delhi",
    noOfBeds: 450,
    availability: "Yes",
  },
  {
    id: 2,
    name: "Hospital B",

    location: "Pune",
    noOfBeds: 150,
    availability: "No",
  },
  {
    id: 3,
    name: "Hospital C",
    location: "Pune",
    noOfBeds: 350,
    availability: "Yes",
  },
];

const bedsMoreThan200 = (arr) => {
  let arrBedsMoreThan200 = [];
  arr.forEach((e) => {
    if (e.noOfBeds > 200) {
      arrBedsMoreThan200.push(e);
    }
  });

  return arrBedsMoreThan200;
};

const availabeBeds = (arr) => {
  let arrAvailabeBeds = [];
  arr.forEach((e) => {
    if (e.availability === "Yes") {
      arrAvailabeBeds.push(e);
    }
  });

  return arrAvailabeBeds;
};

const puneHospitals = (arr) => {
  let arrPuneHospitals = [];
  arr.forEach((e) => {
    if (e.location === "Pune") {
      arrPuneHospitals.push(e);
    }
  });

  return arrPuneHospitals;
};

let a = bedsMoreThan200(hospitals);
let b = availabeBeds(hospitals);
let c = puneHospitals(hospitals);

console.log("\nHospitals with more than 200 beds: ");
console.log(a);
console.log(`\nHospitals with Availability: `);
console.log(b);
console.log(`\nHospitals with Pune Location: `);
console.log(c);
