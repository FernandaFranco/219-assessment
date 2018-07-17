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

return checksum % 10 === 0
*/

function validLuhn(numberStr) {
  numberStr = numberStr.replace(/\D/g, '');

  return checksum(numberStr) % 10 === 0;
}

function checksum(numberStr) {
  var digits = numberStr.split('').reverse().map(function (digit, index) {
    digit = Number(digit);
    if (index % 2 === 1) {
      digit = double(digit);
    }

    return digit;
  });

  return digits.reduce(function (total, digit) {
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

console.log(validLuhn('1111')); // false
console.log(validLuhn('8763')); // true
console.log(validLuhn('87 6 a)3')); // true
console.log(validLuhn('11 1 a)1')); // false
console.log(validLuhn('11 1 a)1')); // false
console.log(validLuhn('2323 2005 7766 3554')); // true
console.log(validLuhn('2323 2005 7766 3553')); // false
console.log(validLuhn('1')); // false
console.log(validLuhn('10')); // false


