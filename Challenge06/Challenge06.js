'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//  
// ------------------------
 const findMax = (arr)=>{
    let max;
   for(let i=0;i<arr.length-1;i++){
for(let j=1;j<=arr.length;j++){
    if(arr[i]>arr[j]){

        max=arr[i]
        
    }
        
}

   } 
    return max;
}
console.log(findMax([12, 32, 22, 45, 78, 12,50 ]));

// 2) ---------------------
// 
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//  
// ------------------------

const sumNums = (arr)=>{
     let sum=0 ;
    

     for(let i=0;i<arr.length;i++ ){
        
         if(typeof arr[i]==='number'){
             sum=sum+arr[i]
         }
     }

     return sum;
}
console.log(sumNums([20, '234', 'car', 41, 20, 'chair']));


// 3) ---------------------
// 
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
// 
// ------------------------

 const reverseArray = (arr,arr_2)=>{
    for(let i=arr.length-1, j=0  ; i>=0 ;i--,j++){
        
        arr_2[j]=arr[i]


    }
console.log(arr_2);
 }
 reverseArray(['C#', 'JS', 'Ruby','Python' ],[])
 
 
 module.exports = {findMax , sumNums, reverseArray};