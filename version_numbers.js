/*
input: two version numbers
output: 1, -1 or 0
requirements:
return 1 if version1 > version2
return -1 if version1 < version2
return 0 if equal
return null if version1 or version2 are invalid

invalid:
contains chars other than digits or dots

mental model:
break the numbers at dots. compare first digits. if equal, compare second digits.
stop comparing when:
- one is greater than the other
- one of the numbers don't have any more digits

test cases:
compareVersions('0.1','1') // -1
compareVersions('1','1.0') // 0
compareVersions('1.0','1.1') // -1
compareVersions('1.1','1.0') // 1
compareVersions('1.2','1.2.0.0') // 0
compareVersions('1.2.0.0','1.18.2') // -1
compareVersions('13.37','1.18.2') // 1
compareVersions('1337','13.37') // 1
compareVersions('13..37','13.37') // null
compareVersions('.1337','13.37') // null
compareVersions('1337.','13.37') // null
compareVersions('13,37','13.37') // null
compareVersions('abcd','13.37') // null

data structure:
string
array
number

algorithm:
if string has char !== digit or ., return 'null'

version1Digits = version1.split('.');
version2Digits = version2.split('.');


for index from 0 to maxLength, digits array with the lesser length:
if digits[index] === undefined {
  digits[index] = 0;
}

for index from 0 to maxLength:
digit1 = Number(digit1)
digit2 = Number(digit2)
if version1Digit > version2Digit
return -1
else if version1 < version2
return 1
else
continue
end for loop

return 0
*/

function compareVersions(version1, version2) {
  var validVersionPattern = /^\d+(\.\d+)*$/;
  var version1Digits;
  var version2Digits;
  var digit1;
  var digit2;
  var i;
  var maxLength;

  if (!validVersionPattern.test(version1) || !validVersionPattern.test(version2)) {
    return null;
  }

  version1Digits = version1.split('.');
  version2Digits = version2.split('.');

  maxLength = Math.max(version1Digits.length, version2Digits.length);

  for (i = 0; i < maxLength; i += 1) {
    digit1 = Number(version1Digits[i]) || 0;
    digit2 = Number(version2Digits[i])|| 0;

    if (digit1 > digit2) {
      return 1;
    } else if (digit1 < digit2) {
      return -1;
    }
  }

  return 0;
}

console.log(compareVersions('0.1','1')); // -1
console.log(compareVersions('1','1.0')); // 0
console.log(compareVersions('1.0','1.1')); // -1
console.log(compareVersions('1.1','1.0')); // 1
console.log(compareVersions('1.2','1.2.0.0')); // 0
console.log(compareVersions('1.2.0.0','1.18.2')); // -1
console.log(compareVersions('13.37','1.18.2')); // 1
console.log(compareVersions('1337','13.37')); // 1
console.log(compareVersions('13..37','13.37')); // null
console.log(compareVersions('.1337','13.37')); // null
console.log(compareVersions('1337.','13.37')); // null
console.log(compareVersions('13,37','13.37')); // null
console.log(compareVersions('abcd','13.37')); // null

