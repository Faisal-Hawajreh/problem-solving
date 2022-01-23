'use strict';





// let numbers = [12, 32, 22, 45, 78, 12, 50]
// let maxi = 0
//   for(let i = 0 ;i<numbers.length;i++){
//       if (numbers[i]>maxi){
//           maxi = numbers[i]
//       }
//   }
// console.log(maxi)




const findMax = (arr)=>{
    let max = 0;
    // write your code here
    for(let i = 0 ;i<arr.length;i++){
        if (arr[i]>max){
            max = arr[i]
             ;
        }
    }
    return max
}
console.log(findMax([12, 32, 22, 45, 78, 12, 50]));

//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//  
// ------------------------
// let arr = [20, '234', 'car', 41, 20, 'chair']
// console.log(typeof arr[0])
// let sum = 0
//     // write your code here
//     for (let i=0; i<arr.length; i++) {
//         if (typeof arr[i] === "number")
//         sum = sum + arr[i];}
// console.log(sum);

const sumNums = (arr)=>{
    let sum = 0;
    // write your code here
      for (let i=0; i<arr.length; i++) {
        if (typeof arr[i] === "number")
        sum = sum + arr[i];}
        return sum;
        
}
console.log(sumNums([20, '234', 'car', 41, 20, 'chair']));

// var revName = ['C#', 'JS', 'Ruby','Python' ]
// var z = []
// for (let i=revName.length - 1; i>=0; i--) {
//     console.log(revName[i])
//     z.push(revName[i])
// }
// console.log(z)


const reverseArray = (arr)=>{
    // write your code here
    let z = []
    for (let i=arr.length - 1; i>=0; i--) {
    //    console.log(arr[i])
       z.push(arr[i])
    }
    return z
}
console.log(reverseArray(['C#', 'JS', 'Ruby','Python' ]));