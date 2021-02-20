// trimming string

const cut = () => {
    
str = str.substring(1, str.length-1);
console.log(str);}

let str = 'string';
cut()


//String Repeat

const repeating = (str) => {
    for(i=0; i<n; i++){
    console.log(str);}
}
//choose n-
const n = 5;
str = "please print me again!";
repeating(str)


//To Camel Case 
//the-stealth-warrior, The_Stealth_Warrio to theStealthWarrior, TheStealthWarrior

function toCamelCase(str){

    
    return str.toLowerCase().replace(/[-_](.)/g, function(match,group1){
    return group1.toUpperCase();
    });
 }

console.log(toCamelCase("The_Stealth_Warrior"))


//To Weird Case
//add method Upper if (index is space " ") && (i+1 is not) 

function toWeirdCase(string){
        let  newString = [];
        for(let i=0; i<string.length;i++) {
            if(i%2 == 0){
                newString.push(string[i].toUpperCase());
            } else {
                newString.push(string[i].toLowerCase());
            }
        }
        return newString.join('');
    };
    //
    console.log(toWeirdCase('string and string'));


    //Abbreviate two words

function initials(first, second) {
    let x = first.charAt(0).toUpperCase();
    let y = second.charAt(0).toUpperCase();
    return (x + '. '+ y);
}

console.log(initials('or', 'degani'));  

//Mask
//var cardNum="234898978";
//function mask(cardNum){
   // for(let i=0; i<(cardNum.length-4);i++){
       // return("#");
       // console.log(cardNum)
    //} 

//}

//mask (num)

function mask(num) {
    const newnum = num.slice(0,-4).replace(/./g, '#') + num.slice(-4);
    console.log(newnum)
  }
mask("123456")

//shortst word-shortest word length

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "ha", "zoo"];

const longestWordSort = words.sort((a, b) => {
  let x = a.length;
  let y = b.length;
  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
  
});
console.log(longestWordSort[0].length);

// shortest words version 2-longest word itself

const longestWord = words.sort((a, b) => {
  let x = a.length;
  let y = b.length;
  if (x < y) return 1;
  if (x > y) return -11;
  return 0;
  
});
console.log(longestWord[0]);

