//1
var array = [1,2,3];
for (var i = 0; i < array.length; i++){
  console.log(i);
}
var array1 = [1,2,3,4];
array1.forEach(function(i){
  console.log(i);

});
//2
names = ['andrew', 'james', 'crites']

for (i=0;i < names.length; i++){
  names[i].toUpperCase();
return names}
  
num = [1, 2, 3]
  const newnum = num.map(element => element*2)

//3
const arr = [1,2,3,4,5,6,7,8,9];
const arr2 = arr.filter(function(item) { return (item>4); } );

const arr3=[1,2,3,4,5];
for (let i=0;i<arr3.length;i++) {
    if (arr3[i]<4){
    arr4.push(i)}
  }
console.log(arr4)
