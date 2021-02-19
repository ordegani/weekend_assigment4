//tribonacci example-user chooses a number which iwould be the index in our tribonacci.

const input = require('readline-sync');

let N = Number(input.question("Please enter a number"));
if (N===0){ console.log([])}else{
let n1 = 1, n2 = 1,n3 = 1 ,nextTerm;

//the tribonacci itself can be modified by ***n1,n2,n3*** - which are the "signature"

for (let i = n1; i <= N; i++) {
    nextTerm = n1 + n2+n3;
    n1 = n2;
    n2 = n3;
    n3 = nextTerm;
       
}
     console.log([n1,n2,n3]);}
//within the N the "signature" (3) are already included.
