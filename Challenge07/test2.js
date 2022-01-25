"use strict";
// const person = {
//     firstName: 'Jaber',
//     lastName: 'Saleh',
//     age: 67,
//     hobby: 'Gaming and Sleeping',
//     fullName : function() {
//         return this.firstName + " " + this.lastName;}
// }

// console.log(`my name is ${person.fullName()} I am ${person.age} YO, and I love ${person.hobby}.`)

const objLat = (obj) => {
    // write your code here
    obj = {
            firstName : obj.firstName,
            lastName : obj.lastName,
            age : obj.age,
            hobby : obj.hobby,
            fullName : function() {
                let fname = this.firstName;
                let lName = this.lastName;
                return fname.charAt(0).toUpperCase() + fname.slice(1) + " " + lName.charAt(0).toUpperCase() + lName.slice(1)}
    }
    return `my name is ${obj.fullName()} I am ${obj.age} YO, and I love ${obj.hobby}.`

};
let first_Person = {
    firstName: 'john',
    lastName: 'joe',
    age: 42,
    hobby: 'Reading'
}
console.log(objLat(first_Person))

// const cvFormatter = (arr) => {
    // const Obj = (obj) => {
    //         obj ={
    //             firstName : obj.firstName,
    //             lastName : obj.lastName,
    //             yearsOfExperience: obj.yearsOfExperience,
    //             tech: obj.tech,
    //             fullName : function() {
    //                 return this.firstName + " " + this.lastName;
    //             } 
    //         }
    // }
//     arr = []
//     for(let i = 0 ; i<arr.length;i++){
//         arr[i]= {
//                     firstName : arr[i].firstName,
//                     lastName : arr[i].lastName,
//                     yearsOfExperience: arr[i].yearsOfExperience,
//                     tech: arr[i].tech,
//                     fullName : function() {
//                         return this.firstName + " " + this.lastName;
//                     }
//                 }
//             console.log(arr)
//             }
//     return `he is ${this.fullName}`
//     // write your code here
// }

// const first_Cv_Sample = [{
//     firstName: "Jason",
//     lastName: "James",
//     yearsOfExperience: 20,
//     tech: "JS"
// },
// {
//     firstName: "Aaron",
//     lastName: "William",
//     yearsOfExperience: 2,
//     tech: "JS"
// }];
// console.log(cvFormatter(first_Cv_Sample))