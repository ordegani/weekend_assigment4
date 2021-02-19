//find different num in array
//compare i and i+1 find the not equal. reduce?
const numbers=[1,2,1,1];

function unique(numbers) {
    let uniqueChar = numbers[0];
    
     for(let i = 1; i < numbers.length; i++){
      if(uniqueChar !== numbers[i]){
      return uniqueChar = numbers[i];
       }
     }
           return 0;
     } 
console.log(unique(numbers))
    
