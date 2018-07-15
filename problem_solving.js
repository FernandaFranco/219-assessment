/*
input: positive integer n
output: number: diff between the sq of the sum of first n integers and sum of the sq of first n integers
requirements: find the first n integers. sum the numbers and take the sq. take the sq for each number, then sum them.
return the difference.

test cases:
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

data structures:
array for the list of first n numbers
number

algorithm:
for each number from 1 until n:
add number to an array
end

var first operand = sum all numbers in array. take the sq.

var second operand = map the array, take the sq for each number. reduce to a sum of all numbers.

return first op - second op
*/

function sumSquareDifference(number) {
  var sum = function (total, number) {
    return total + number;
  };
  var square = function (number) {
    return number ** 2;
  };
  var numbers = [];
  var firstOp;
  var secondOp;
  var i;

  for (i = 1; i <= number; i += 1) {
    numbers.push(i);
  }

  firstOp = square(numbers.reduce(sum));
  secondOp = numbers.map(square).reduce(sum);

  return firstOp - secondOp;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
