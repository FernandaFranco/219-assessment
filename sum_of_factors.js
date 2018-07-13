/*
Suppose you have an arbitrary natural number (the target) and a set
of one or more additional natural numbers (the factors). Write a
program that computes the sum of all numbers from 1 up to the target
number that are also multiples of one of the factors.
For instance, if the target is 20, and the factors are 3 and 5, that
gives us the list of multiples 3, 5, 6, 9, 10, 12, 15, 18. The sum of
these multiples is 78.
If no factors are given, use 3 and 5 as the default factors.

input: target, two factors (optional)
output: sum of all multiples of both factors from 1 to target
rules:
- if no factors are given, use 3 and 5 as factors;
- umltiples should be unique;
- target value not included
is the target number included?
requirements: find all multiples of factor1 and factor2 from 1 to target.
return sum of multiples; If no factors given, assume 3 and 5.
mental model:
for each factor, find multiples smaller or equal than target. add to the multiples array.
use reduce to sum all elements

sumOfFactors(20, 3, 5) // 78
sumOfFactors(2, 3, 5) // 0
sumOfFactors(3, 3, 5) // 3
sumOfFactors(5, 3, 5) // 8
sumOfFactors(6, 3, 5) // 14

data structures:
array

algorithm:
if factors undefined, factors = [3, 5];
for each factor in given array of factors:
while multiple <= target {
  multiplesArray.push(multiple)
  multiple += factor;
}

reduce multiplesArray to the sum of values
return sum
*/

function sumOfFactors(target, factors) {
  var multiple;
  var multiplesArray = [];
  if (factors === undefined) {
    factors = [3, 5];
  }

  factors.forEach(function (factor) {
    multiple = factor;
    while (multiple < target) {
      if (multiplesArray.indexOf(multiple) === -1) {
        multiplesArray.push(multiple);
      }
      multiple += factor;
    }
  });

  return multiplesArray.reduce(function (total, value) {
    return total + value;
  }, 0);
}


console.log(sumOfFactors(20, [3, 5])); // 78
console.log(sumOfFactors(2, [3, 5])); // 0
console.log(sumOfFactors(3, [3, 5])); // 0
console.log(sumOfFactors(5, [3, 5])); // 3
console.log(sumOfFactors(6, [3, 5])); // 8
console.log(sumOfFactors(6)); // 8



