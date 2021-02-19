function basicOp(operation, num1, num2)
{
  if(operation == '+')return num1 + num2;
  if(operation == '-')return num1 - num2;
  if(operation == '*')return num1 * num2;
  if(operation == '/')return num1 / num2;
}
//test
console.log(basicOp("+", 8, 4))