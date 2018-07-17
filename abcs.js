/*
input: word as a string -> assume a-z, case insensitive
output: true if can be spelled, false otherwise

requirements:
a word can be spelled if
- every letter used a remaining block
- can't have repeated letters/ letters that share a block

rules:
- case doesn't matter

mental model:
check letters
for each letter, check if block remains
if true:
- remove block
- move to next letter
if false, return false

return true if all letters match a remaining block

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

test cases:
canBeSpelled('big') -> true
canBeSpelled('bog') -> false
canBeSpelled('Big') -> true
canBeSpelled('BiG') -> true
canBeSpelled('BIG') -> true
canBeSpelled('BOG') -> false
canBeSpelled('BoG') -> false
canBeSpelled('Bog') -> false
canBeSpelled('BB') -> false
canBeSpelled('B') -> true
canBeSpelled('abcd') -> true

data structures:
array of strings -> blocks
string -> array

algorithm:
create a block array
create a letter array

for each letter:
if letter is in remaining blocks:
remove block
else
return false
end for loop

return true;

check if letter in remaining blocks:
for each remaining block, call index of uppercase letter on block string
if > -1 return true,
end loop

return false;
*/

function canBeSpelled(word) {
  var letters = word.toUpperCase().split('');
  var remainingBlocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS',
              'JW', 'HU', 'VI', 'LY', 'ZM'];
  var blockIndex;
  var i;

  for (i = 0; i < letters.length; i += 1) {
    blockIndex = findBlockIndex(letters[i], remainingBlocks);
    if (blockIndex > -1) {
      remainingBlocks.splice(blockIndex, 1);
    } else {
      return false;
    }
  }

  return true;
}

function findBlockIndex(letter, blocks) {
  var block = blocks.filter(function (block) {
    return (block.indexOf(letter) > -1);
  })[0];

  return blocks.indexOf(block);
}

console.log(canBeSpelled('big')); //-> true
console.log(canBeSpelled('bog')); //-> false
console.log(canBeSpelled('Big')); //-> true
console.log(canBeSpelled('BiG')); //-> true
console.log(canBeSpelled('BIG')); //-> true
console.log(canBeSpelled('BOG')); //-> false
console.log(canBeSpelled('BoG')); //-> false
console.log(canBeSpelled('Bog')); //-> false
console.log(canBeSpelled('BB')); //-> false
console.log(canBeSpelled('B')); //-> true
console.log(canBeSpelled('abcd')); //-> true
