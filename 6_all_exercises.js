// mumbling

function accum(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
      let space = '';
      for (let j = 0; j < i + 1; j++) {
        space += j === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
      }
      result.push(space);
    }
    return result.join('_');
  }
  console.log(accum("string"))

  //Counting Duplicates
function duplicates(str){
let arr = str.split('');
let count = {};
arr.forEach(function(i) { count[i] = (count[i]||0) + 1;});
console.log(count);}
//
duplicates("hheelllo")

//organize strings
//spread, filter, foreach

function mergeArrays(...arrays) {
  let jointArray = []

  arrays.forEach(array => {
      jointArray = [...jointArray, ...array]
  })
  const uniqueArray = jointArray.filter((item,index) => jointArray.indexOf(item) === index)
  return uniqueArray
}
console.log(mergeArrays([1,2],[1,3]))

//isogram

function isIsogram(string){
  var str = string.split("").sort().join("").match(/(.)\1+/g);
  str == null?
  console.log("yes"):
  console.log("no");
  }
  isIsogram("stringgg")