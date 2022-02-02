'use strict'
// 1) ---------------------
// 
//  using the (arrInc) function; increase the provided array values by 10
//  
//  EX:
//  [20, 54, 89, 41] ==> [30, 64, 99, 51]
//  
// ------------------------

const arrInc = (arr) => {
    let result = [];
    arr.forEach(element => {
        let sum = element +10
        result.push(sum)
    });
    // write your code here
    return result;
}
console.log(arrInc([20, 54, 89, 41]))


//  [5.4, 5.5 ,6.7, 6.8] ==> [5, 6, 7, 7]
const roundDecimals = (arr) => {
    // write your code here
    let result = [];
    arr.forEach((element)=>{
        let el=Math.round(element);
        result.push(el)
    });
    return result
}
console.log(roundDecimals([5.4, 5.5 ,6.7, 6.8]))

// 3) ---------------------
// 
//  An owner of a factory want to give bounce 100$ for the employee of production department who worked *More than* 8 hours
//  and 50$ for those who worked less, given their data increase their salary and return the data back again 
//  
//  EX:
let data = [
    {
        name: "Robert",
        section: "Transport",
        workHours: 8,
        salary: "3000$"
    },
    {
        name: "Richard",
        section: "HR",
        workHours: 6,
        salary: "4000$"
    },
    {
        name: "Christopher",
        section: "Production",
        workHours: 10,
        salary: "4500$"
    },
    {
        name: "Andrew",
        section: "HouseKeeping",
        workHours: 9,
        salary: "3200$"
    }
]
// 
//  ==>
//
// [
//     {
//         name: "Robert",
//         section: "Transport",
//         workHours: 8,
//         salary: "3050$"
//     },
//     {
//         name: "Richard",
//         section: "HR",
//         workHours: 6,
//         salary: "4050$"
//     },
//     {
//         name: "Christopher",
//         section: "Production",
//         workHours: 10
//         salary: "4600$"
//     },
//     {
//         name: "Andrew",
//         section: "HouseKeeping",
//         workHours: 9,
//         salary: "3300$"
//     }
// ]
//

// ------------------------
const data2 = [{
    name: "Jack",
    section: "Coding",
    workHours: 6,
    salary: "9000$"
},
{
    name: "Andrew",
    section: "Marketing",
    workHours: 9,
    salary: "5000$"
}
];
const employeesBonus = (arr) => {
    // write your code here
    arr.forEach((element)=>{
        if(element.workHours>8){
            element.salary = `${(parseInt(element.salary.slice(0,-1)) + 100)}$`;
            return element.salary
        }else{
        element.salary = `${(parseInt(element.salary.slice(0,-1)) + 50)}$`
        return element.salary
        }
        
    });
    return arr
}
console.log(employeesBonus(data2))
// 4) ---------------------
// 
// Harry wants to buy a new mouse and keyboard for his new setup
// He wants to choose one mouse and one keyboard from the list of prices and take the most expensive combination
// but his budget is limited, help him by finding the most expensive *price* for a combination to buy with his budget
// 
// EX:
//
let budget = 200
let mouseArray = [35, 15, 75, 180, 150, 50]
let keyBoardArray = [5, 150, 35, 120, 75, 50, 100]
// 
// ==> 200
// ------------------------
const mostExpensive = (budget, mouseArray, keyBoardArray) => {
    // write your code here
    let range =[]
    let mostExpensive = [];
    let combination;
    mouseArray.forEach(mousePrice => { 
        keyBoardArray.forEach(KeyBoardPrice => {
            combination = KeyBoardPrice + mousePrice;
            // console.log(comination)
            if(combination<=budget){
                range.push(combination)
           }
        });
        mostExpensive.push(Math.max.apply(null,range))
    });
    console.log(mostExpensive)
    return Math.max.apply(null,mostExpensive)
}
console.log(mostExpensive(150, [35, 15, 75], [5, 150, 100]))