'use strict'
// Challenge 01

// Important:
// To solve these challenges you have use (for in ,for of) or (Object.keys ,Object.value, Object.entries )

// Resources:
// for in : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// for of : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// You given an object that contain name
// and age of some customers as below :

// {
//     "Romio Joliat": 35,
//     "Mario Ristrova": 39,
//     "Sofia firnando": 50,
// }

// You have to return an array of strings that follow the below syntax
//
// the string format is "Customer Name :*** *** , Age :**"
// ['Customer Name :Romio Joliat , Age :35', 'Customer Name :Mario Ristrova , Age :39', ... ]

// -------------------------------------------------------------------------------------------------------

const customerAndAge = (obj) => {
    let newArr = []
    // write your code here
    for(const property in obj ){
        newArr.push(`Customer Name :${property} , Age :${obj[property]}`)
    }
    return newArr
}
// let names = {
//     "Romio Joliat": 35,
//     "Mario Ristrova": 39,
//     "Sofia firnando": 50,
// };
// console.log(customerAndAge(names))

//   const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// // expected output:
// // "a: 1"
// // "b: 2"
// // "c: 3"

// -------------------------------------------------------------------------------------------------------
// Challenge 02

// Write a function called getRecipeKey that take recipe info object and return an array of recipe info as strings
// as in the example

// Ex:-
// Input:
// let recipeInfo = {
//   name: "pizza",
//   ingredients: ["bread", "tomato", "chicken", "mayo"],
//   cookTime: "twoHours",
//   price: "25$",
// };
//
// Output:
// ["name: pizza", "ingredients: bread,tomato,chicken,mayo", "cookTime: twoHours", "price: 25$"]
//
// Note:
// You can solve this challenge by using Object.entries

// -------------------------------------------------------------------------------------------------------

const getEntries = (obj) => {
     function getRecipeKey(obj){
        let newArr = []
        for(const property in obj){
        newArr.push(`${property}: ${obj[property]}`)}
        return newArr
    }
    return  getRecipeKey(obj)
};




let recipeInfo = {
    name: "pizza",
    ingredients: ["bread", "tomato", "chicken", "mayo"],
    cookTime: "twoHours",
    price: "25$",
};
// console.log(getEntries(recipeInfo))


//   var obj = {a: 1, b: 2, c: 3};

// for (const prop in obj) {
//   console.log(`obj.${prop} = ${obj[prop]}`);
// }

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
// -------------------------------------------------------------------------------------------------------
// Challenge 03

// Write a function named getCourseName that returns object of 2 new arrays
// first one is containing the names of all of the courses in the data set.
// second one is containing the names of all the students
// -------------------------------------------------------------------------------------------------------

const courses = [
    {
      course: 'Java',
      Instructor: 'David',
      Students: ['Lincoln', 'Ruth', 'Briana', 'Suzy', 'Greta'],
      GroupName: 'Stars',
    },
    {
      course: 'JavaScript',
      Instructor: 'Van',
      Students: ['Alphonso', 'Daley', 'Dax', 'Karter', 'Jorja'],
      GroupName: 'Nerd-ware',
    },
    {
      course: 'Python',
      Instructor: 'Delaney',
      Students: ['Barney', 'Kalé', 'Alisha'],
      GroupName: 'Whats-Up',
    },
    {
      course: 'DotNet',
      Instructor: 'Keanna',
      Students: ['Oli', 'Gisselle', 'Pru'],
      GroupName: 'Lol',
    },
];
  
const getInfo = (arr) => {
    let coursesName = [];
    let studentsName = [];
    for (const element of arr) {
        coursesName.push(element.course)
        for (const prop of element.Students){
            studentsName.push(prop)
        }

    }
    return { coursesName, studentsName };
};
// console.log(getInfo(courses))

//  ------------------------------------------------------------------------------------------------------
// Challenge 04

// The Head manager wants to get a more organized info about some students, he wants you to find the students from the courses dataset
// and return their info following the below syntax
//
// Input: ['Kalé', 'Alisha','Alphonso', 'Briana']
// Output: 
// [
//   {
//     Student: 'Kalé',
//     course: 'Python'
//   },
//   ...
// ]

//  ------------------------------------------------------------------------------------------------------

const getStudents = (arr) => {
    let Array = [];
    const courses = [
        {
            course: 'Python',
            Instructor: 'Delaney',
            Students: ['Barney', 'Kalé', 'Alisha'],
            GroupName: 'Whats-Up',
        },
        {
            course: 'JavaScript',
            Instructor: 'Van',
            Students: ['Alphonso', 'Daley', 'Dax', 'Karter', 'Jorja'],
            GroupName: 'Nerd-ware',
        },
        {
          course: 'Java',
          Instructor: 'David',
          Students: ['Lincoln', 'Ruth', 'Briana', 'Suzy', 'Greta'],
          GroupName: 'Stars',
        },

        {
          course: 'DotNet',
          Instructor: 'Keanna',
          Students: ['Oli', 'Gisselle', 'Pru'],
          GroupName: 'Lol',
        },
    ];
    // write your code here
    for(const element of courses){
        // console.log(element)
        for(const Studant of element.Students){
            // console.log(Studant)
            for(const student of arr){
                // console.log(student)
                if(student==Studant){
                    let Object = {'Student':Studant,'course':element.course}
                    Array.push(Object)
                }
            }
        }
    }
    return Array   
    
};

console.log(getStudents(['Kalé', 'Alisha','Alphonso', 'Briana']))

  // Input: ['Kalé', 'Alisha','Alphonso', 'Briana']