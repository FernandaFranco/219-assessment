/*
input: string containing digits and/or space, -, . and ()
output: string of length 10-> cleaned number if good; string of 0s if bad number

requirements:
remove non digits;

good number if:
- 10 digits, or
- 11 digits and the first 1

bad number if :
- has less than 10 digits;
- 11 digits and first is not 1
- more than 11 digits

return 10 zeros if bad

return clean number if good

clean good number:
- remove first digits (1) if 11 digits

mental model:
given a string containing digits and some chars, remove non digit chars.
if string < 10 or string > 11 or 11 and the first one !== 1, return string of 10 0s.
otherwise, remove first if length 11, return string.

questions:
- assume only chars are digits and valid special chars?
- assume only string?
- assume only same type of special chars in each string?

test cases:
cleanPhoneNumber('1231231234') // '1231231234';
cleanPhoneNumber('11231231234') // '1231231234';
cleanPhoneNumber('1-1231231234') // '1231231234';
cleanPhoneNumber('1-123-123-1234') // '1231231234';
cleanPhoneNumber('1 123 123 1234') // '1231231234';
cleanPhoneNumber('1.123.123.1234') // '1231231234';
cleanPhoneNumber('1(123)123-1234') // '1231231234';
cleanPhoneNumber('11(123)123-1234') // '0000000000';
cleanPhoneNumber('111231231234') // '0000000000';
cleanPhoneNumber('231231234') // '0000000000';
cleanPhoneNumber('1') // '0000000000';
cleanPhoneNumber('100000000000000000000') // '0000000000';
cleanPhoneNumber('21231231234') // '0000000000';

data structures:
string

algorithm:
replace every non digit with '' -> regex global

if length of string === 10 or === 11 and string[0] = 1:
if string[0] = 1 remove first char
return string

else
return '0000000000'
*/

function cleanPhoneNumber(stringNumber) {
  var specialCharPattern = /\D/g;

  stringNumber = stringNumber.replace(specialCharPattern, '');

  if (stringNumber.length === 10) {
    return stringNumber;
  } else if (stringNumber.length === 11 && stringNumber[0] === '1') {
    return stringNumber.slice(1);
  }

  return '0000000000';
}

console.log(cleanPhoneNumber('1231231234')); // '1231231234';
console.log(cleanPhoneNumber('11231231234')); // '1231231234';
console.log(cleanPhoneNumber('1-1231231234')); // '1231231234';
console.log(cleanPhoneNumber('1-123-123-1234')); // '1231231234';
console.log(cleanPhoneNumber('1 123 123 1234')); // '1231231234';
console.log(cleanPhoneNumber('1.123.123.1234')); // '1231231234';
console.log(cleanPhoneNumber('1(123)123-1234')); // '1231231234';
console.log(cleanPhoneNumber('11(123)123-1234')); // '0000000000';
console.log(cleanPhoneNumber('111231231234')); // '0000000000';
console.log(cleanPhoneNumber('231231234')); // '0000000000';
console.log(cleanPhoneNumber('1')); // '0000000000';
console.log(cleanPhoneNumber('100000000000000000000')); // '0000000000';
console.log(cleanPhoneNumber('21231231234')); // '0000000000';

