/*
input: string of numbers in short hand notation sep by range separators
output: array of the complete numbers

requirements:
numbers: only significant digit 9, 2 --> 9 , 12
9, 12 --> 9, 112?

range sep: -, :, ..

range: 1:3 --> 1, 2, 3 (inclusive)

mental model:
given a string of numbers and ranges, replace significant digits by the actual number.
then, identify ranges and open them up. return list of all numbers.

test cases:
completeNumbers('1') // [1]
completeNumbers('1,3,7,2,4,1') // [1, 3, 7, 12, 14, 21]
completeNumbers('1-3,7,2,4,1') // [1, 2, 3, 7, 12, 14, 21]
completeNumbers('1:3,7,2,4,1') // [1, 2, 3, 7, 12, 14, 21]
completeNumbers('1..3,7,2,4,1') // [1, 2, 3, 7, 12, 14, 21]
completeNumbers('1..3,7..2,4,1') // [1, 2, 3, 7, 8, 9, 10, 11, 12, 14, 21]
completeNumbers('1..3,7..2,4,1,9,1') // [1, 2, 3, 7, 8, 9, 10, 11, 12, 14, 21, 29, 31]
completeNumbers('1..3,7..2,4,1,9,1,41') // [1, 2, 3, 7, 8, 9, 10, 11, 12, 14, 21, 29, 31, 141]
completeNumbers('1-3,1-2') // [1, 2, 3, 11, 12]

data structures:
string -> replace
array of strings, break at ,
transform with map range -> array, numbers -> numbers

algorithm:
replace digit with actual complete number in the string:
while number of current digit < number of previous or 0:
 digit += 10;
 replace String(digit)
end while

break string into array (,):
map:
if range:
for lower to upper, inclusive:
add number to array
return array

if number:
return Number(number);
end map

result = [];
for each el in array,
concat el to result array

return result;
*/

function completeNumbers(shortHandNumbers) {
  var previous = 0;
  var current;
  var numbers;
  var length;
  var i;

  numbersString = shortHandNumbers.replace(/\d+/g, function (significant) {
    current = Number(significant);
    while (current <= previous) {
      current += 10;
    }

    previous = current;
    return current;
  });

  var numbersArray = numbersString.split(',');


  var elements = numbersArray.map(function (rangeOrNumber) {
    if (/[\:(\.\.)\-]/.test(rangeOrNumber)) {
      return expandRange(rangeOrNumber);
    } else {
      return Number(rangeOrNumber);
    }
  });

  return elements.reduce(function (array, element) {
    return array.concat(element);
  }, []);
}

function expandRange(rangeStr) {
  var rangeNumbers = rangeStr.split(/[\:(\.\.)\-]/);
  var lower = Number(rangeNumbers[0]);
  var upper = Number(rangeNumbers[rangeNumbers.length - 1]);
  var result = [];
  var i;

  for (i = lower; i <= upper; i += 1) {
    result.push(i);
  }

  return result;
}

console.log(completeNumbers('1')); // [1]
console.log(completeNumbers('1,3,7,2,4,1')); // [1, 3, 7, 12, 14, 21]
console.log(completeNumbers('1-3,7,2,4,1')); // [1, 2, 3, 7, 12, 14, 21]
console.log(completeNumbers('1:3,7,2,4,1')); // [1, 2, 3, 7, 12, 14, 21]
console.log(completeNumbers('1..3,7,2,4,1')); // [1, 2, 3, 7, 12, 14, 21]
console.log(completeNumbers('1..3,7..2,4,1')); // [1, 2, 3, 7, 8, 9, 10, 11, 12, 14, 21]
console.log(completeNumbers('1..3,7..2,4,1,9,1')); // [1, 2, 3, 7, 8, 9, 10, 11, 12, 14, 21, 29, 31]
// console.log(completeNumbers('1..3,7..2,4,1,9,1,41')); // [1, 2, 3, 7, 8, 9, 10, 11, 12, 14, 21, 29, 31, 141]
console.log(completeNumbers('1-3,1-2')); // [1, 2, 3, 11, 12]
console.log(completeNumbers('1--3,1-2..')); // invalid

