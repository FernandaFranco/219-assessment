/*
input: odd integer n where n forms a nXn grid
output: no return value. log to the console a diamond displayed in a nXn grid

requirements:
n = 1

1 row and 1 column
*
3 rows and 3 columns
 *
***
 *

5 rows 5 cols
  *
 ***
***** 5 asterisks
 ***
  *

mental model:
displaying n strings:
1 asterisk (n-1)/2 spaces before
until we reach the middle row:
spaceNumber -= 1
asteriskNumber += 2
middle row --> asteriksNumber = n
spaceNumber += 1
asteriskNumber -= 2
until asteriskNumber = 1;

diamond(1)
diamond(3)
diamond(5)
diamond(9)
diamond(15)

data Structures:
strings

algorithm:
number of asterisks = 1
number of spaces = (n-1)/2

while number ast <= n
display ' '.repeat(n of spa) + '*'.repeat(n of ast)
update n of ast, spaces
end

while number ast >= 1:
display string
update n of ast, spaces
end
*/

function diamond(n) {
  var asterisksNumber = 1;
  var spacesNumber = (n -1) / 2;

  while (asterisksNumber < n) {
    console.log(formRow(asterisksNumber, spacesNumber));
    asterisksNumber += 2;
    spacesNumber -= 1;
  }

  console.log(formRow(asterisksNumber, spacesNumber));

  while (asterisksNumber > 1) {
    asterisksNumber -= 2;
    spacesNumber += 1;
    console.log(formRow(asterisksNumber, spacesNumber));
  }
}

function formRow(asterisks, spaces) {
  return ' '.repeat(spaces) + '*'.repeat(asterisks);
}

diamond(1)
diamond(3)
diamond(5)
diamond(9)
diamond(15)
