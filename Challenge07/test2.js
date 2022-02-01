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

// const objLat = (obj) => {
//     // write your code here
//     obj = {
//             firstName : obj.firstName,
//             lastName : obj.lastName,
//             age : obj.age,
//             hobby : obj.hobby,
//             fullName : function() {
//                 let fname = this.firstName;
//                 let lName = this.lastName;
//                 return fname.charAt(0).toUpperCase() + fname.slice(1) + " " + lName.charAt(0).toUpperCase() + lName.slice(1)}
//     }
//     return `my name is ${obj.fullName()} I am ${obj.age} YO, and I love ${obj.hobby}.`

// };
// let first_Person = {
//     firstName: 'john',
//     lastName: 'joe',
//     age: 42,
//     hobby: 'Reading'
// }
// console.log(objLat(first_Person))

const cvFormatter = (arr) => {
    
    let newArr = []
    let newCV = []

    for(let i = 0 ; i<arr.length;i++){
        if(arr[i].yearsOfExperience >1){
        let name;
        if(arr[i].lastName == null){
            name = arr[i].firstName
        }else{
            name = arr[i].firstName +" "+ arr[i].lastName
        }
        newArr[i]= {
            fullName : name,
            tech : arr[i].tech
        }
        newCV.push(newArr[i])
        }
    }

    return newCV
}

let cvs = [
    {
        firstName: "Jason",
        LastName: "James",
        yearsOfExperience: 20,
        tech: "JS"
    },
    {
        firstName: "Shira",
        LastName: null,
        yearsOfExperience: 5,
        tech: ".Net"
    },
    {
        firstName: "Dmitri",
        LastName: "Akkerman",
        yearsOfExperience: 1,
        tech: "Python"
    },
    {
        firstName: "Isabella",
        LastName: null,
        yearsOfExperience: 7,
        tech: "Java"
    }
]
// console.log(cvFormatter(cvs))



const applicationsStatics = (arr) => {
    // write your code here
    let python_DevsN = 0
    let javaScript_DevsN = 0
    let dotNet_DevsN= 0
    let java_DevsN= 0
    let totalApplicants= 0
    let rejectedApplicantsN= 0

    for(let i = 0 ; i<arr.length;i++){
        if((arr[i].firstName == null || arr[i].lastName == null)||arr[i].yearsOfExperience<1){
            rejectedApplicantsN += 1
        }
        if(arr[i].tech =="Python"){
            python_DevsN +=1
        }else if(arr[i].tech =="JS"){
            javaScript_DevsN +=1
        }else if(arr[i].tech ==".Net"){
            dotNet_DevsN +=1
        }else if(arr[i].tech =="Java"){
            java_DevsN +=1
        }
        }
        let result = {
            python_Devs: python_DevsN,
            javaScript_Devs: javaScript_DevsN,
            dotNet_Devs: dotNet_DevsN,
            java_Devs: java_DevsN,
            totalApplicants: arr.length,
            rejectedApplicants: rejectedApplicantsN,
        }
    return result
};

// console.log(applicationsStatics(cvs))




const classesAvg = (data) => {
    // write your code here


    let classScore = data.grades

    for(let i = 0;i<classScore.length;i++){
        let classNum = classScore[i].classes

        for(let j = 0;j<classNum.length;j++){
            let scores = classNum[j].classScores
            let ResSum = 0
            for(let k = 0 ;k<scores.length;k++){
                ResSum = ResSum + scores[k]

                if(k==scores.length-1){
                    let ResAvg =0
                    ResAvg+= Math.floor(ResSum/scores.length)
                    classNum[j].avg = ResAvg
                    console.log(ResAvg,ResSum)
                }
            }
        }


    }
    return data
};



let data = {
    SchoolName: "David Academy",
    Capacity: 1000,
    grades: [
        {
            grade: "First",
            numberOFClasses: 3,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        89, 87, 45, 48, 89, 65, 21, 54, 78, 62, 51, 54, 50, 49
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        87, 54, 95, 45, 41, 51, 25, 63, 58, 47, 64, 51, 98, 100
                    ]
                },
                {
                    avg: 0,
                    classNumber: "03",
                    classScores: [
                        74, 85, 20, 51, 59, 58, 62, 71, 74, 99, 84, 71, 38, 70
                    ]
                },
            ]
        },
        {
            grade: "Second",
            numberOFClasses: 2,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        71, 82, 86, 3, 1, 52, 91, 84, 44, 68, 64, 23, 80, 60,
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        86, 39, 71, 17, 61, 76, 60, 54, 42, 65, 49, 75, 96, 70
                    ]
                },
            ]
        },
        {
            grade: "Third",
            numberOFClasses: 2,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        11, 12, 28, 78, 57, 3, 54, 72, 14, 19, 88, 74, 68, 58
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        62, 8, 35, 43, 96, 9, 97, 73, 4, 32, 18, 81, 70, 42
                    ]
                },
            ]
        },
        {
            grade: "Forth",
            numberOFClasses: 4,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        63, 71, 93, 87, 83, 85, 67, 49, 62, 45, 38, 48, 58, 52
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        100, 45, 70, 75, 87, 63, 39, 46, 54, 68, 74, 96, 52, 49
                    ]
                },
                {
                    avg: 0,
                    classNumber: "03",
                    classScores: [
                        97, 54, 80, 95, 69, 31, 88, 84, 50, 81, 67, 34, 41, 87
                    ]
                },
                {
                    avg: 0,
                    classNumber: "04",
                    classScores: [
                        64, 96, 66, 38, 78, 58, 43, 100, 34, 56, 82, 53, 89, 72
                    ]
                },
            ]
        },
    ],
};
console.log(classesAvg(data))
// classesAvg(data)