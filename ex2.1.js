//Ex2.1 - Sum of lowest numbers
//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive i ntegers.
//No floats or non-positive integers will be passed.
//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//[10, 343445353, 3453445, 3453545353453] should return 3453455.




function LowestPositive(array){
    let newArray=[];
   for(let i=0; i<array.length; i++){
       if((array[i]>0) && (Number.isInteger(array[i])) ){       
        newArray.push(array[i]);};
       }
       console.log(newArray)}
       
//check-
array = [2,3,-4,5,9.10]
LowestPositive(array);


    
