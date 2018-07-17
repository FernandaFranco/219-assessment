/*
input: string with digits and other chars;
output: true or false

requirements:
ignore all non numeric chars;

from right to left:
- double the value of every second digit

if doubled value >= 10:
doubled - 9;

finally, sum all values: checksum

if checksum % 10 === 0:
return true
else:
return false

test cases:
validLuhn('1111') // false
validLuhn('8763') // true
validLuhn('87 6 a)3') // true
validLuhn('11 1 a)1') // false
validLuhn('11 1 a)1') // false
validLuhn('2323 2005 7766 3554') // true
validLuhn('2323 2005 7766 3553') // false
validLuhn('1') // false
validLuhn('10') // false
validLuhn('') // false

data structures:
array of strings > array of number > reduce to a sum

algorithm:
replace non digits with ''
return false if length === 0
split string into array of chars
reverse
map: with index
- char to digit;
- replace every odd index with its double;
- if double > 9, subtract 9
end map

reduce the array to checksum, initial = 0

return checksum % 10 ===

input: invalid number -> string
output: valid number -> string = input + check digit

requirements:
get the checksum of the input
get the smallest number % 10 === 0 that greater than checksum
find the diff between that number and checksum = check digit
append check digit to the end of input string and return

test case:
makeValidLuhn('2323 2005 7766 355') // '2323 2005 7766 3554'
makeValidLuhn('876') // '8763'
makeValidLuhn('1111') // '11114'

data structures:
number
string

algorithm:
checksum = checksum(numberStr);

checksum % 10 --> num
checkDigit = 10 - num

return input + String(checkDigit)
*/

function isValidLuhn(numberStr) {
  return checksum(numberStr) % 10 === 0;
}

function makeValidLuhn(numberStr) {
  if (checksum(numberStr) % 10 === 0) return numberStr;
  var checkSum = checksum(numberStr + '0');

  var checkDigit = 10 - (checkSum % 10);

  return numberStr + String(checkDigit);
}

function checksum(numberStr) {
  numberStr = numberStr.replace(/\D/g, '');
  return numberStr.split('').reverse().reduce(function (total, digit, index) {
    digit = Number(digit);
    if (index % 2 === 1) {
      digit = double(digit);
    }

    return total + digit;
  }, 0);
}

function double(digit) {
  digit *= 2;
  if (digit > 9) {
    digit -= 9;
  }

  return digit;
}

console.log(isValidLuhn('1111')); // false
console.log(isValidLuhn('8763')); // true
console.log(isValidLuhn('87 6 a)3')); // true
console.log(isValidLuhn('11 1 a)1')); // false
console.log(isValidLuhn('11 1 a)1')); // false
console.log(isValidLuhn('2323 2005 7766 3554')); // true
console.log(isValidLuhn('2323 2005 7766 3553')); // false
console.log(isValidLuhn('1')); // false
console.log(isValidLuhn('10')); // false


console.log(makeValidLuhn('2323 2005 7766 355')); // '2323 2005 7766 3554'
console.log(makeValidLuhn('2323 2005 7766 3554')); // '2323 2005 7766 3554'
console.log(makeValidLuhn('876')); // '8764'
console.log(makeValidLuhn('1111')); // '11114'



