const parseArray = arr => {
   return arr.reduce((acc, val) => {
      return (acc << 1) | val;
   });
};

//check-
const arr = [1, 1, 1, 1];
console.log(parseArray(arr));
