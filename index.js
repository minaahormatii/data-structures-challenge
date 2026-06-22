// assignment #1

const person = {
  id: 12345,
  name: "Arzin Rasoulpour",
  age: 5,
  gradesCompleted: [1, 2, 3, 4],

  address: {
    city: "SLC",
    details: {
      street: "123 Main Street",
      zipcode: "84123",
    },
  },

  deleteMe: "This key was added by mistake",
};

// 1
console.log(
  `Pesron ${person["id"]} has been through grades ${person["gradesCompleted"].join(", ")}`
);

// 2
console.log(person);

// 3
delete person["deleteMe"];
console.log(person);

// ________________________________________________________________________________________________

// assignment #2
const user = {
  firstName: "Mina",
  lastName: "Hormtai",
  city: "SLC",

  semesters: {
    semesterOne: "incomplete",
    semesterTwo: "incomplete",
    semesterThree: "incomplete",
    semesterFour: "incomplete",
  },
};

// 1
user["semesters"]["semesterOne"] = "complete";
user["semesters"]["semesterTwo"] = "complete";
// console.log(user);

// 2
delete user["semesters"]["semesterFour"];
// console.log(user);

// 3
user["favoriteLanguage"] = "Python";

console.log(user);

// ________________________________________________________________________________________________

// assignment #3

let myList = ["Mina", 34, true, "Python", false, 100];
console.log(myList);

// 1
myList.pop();
console.log(myList);

// 2
myList.shift();
console.log(myList);

// 3
myList.push("JavaScript");
console.log(myList);

// 4
myList.unshift("Summer");
console.log(myList);

// 5
myList[2] = "My best life";
console.log(myList);

// 6
const myListCopy = [...myList];
console.log(myListCopy);

// 7
const secondArray = ["Heydar", "Arzin", "Mina", "Life", 2021];
const mergedArray = [...myList, ...secondArray];
console.log(mergedArray);
