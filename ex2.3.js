//perfect square

var findNextSquare = function (num) {
    num > 0 && Math.sqrt(num) % 1 === 0? num : -1;
    var next =  Math.sqrt(num)+1;
    return next*next;
}
//checking

console.log(findNextSquare(9));