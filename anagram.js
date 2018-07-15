/*
anagram:

input: word, array of words
output: array containing only words that are anagrams of word
rules: an anagram of a words contains all chars from word, in another order

requirements: given a word and a array, find words in array which chars are also in word.
return array with those words.
if candidate has char not in word, OR
if candidate has char in word but already accounted for:
- not an anagram;

mental model:
for each candidate in array, check if chars match chars in word.
if true, add them to the result array.
if false, continue for loop;
after iterating through all candidates, return result array.

for each char in candidate:
- check if it's in remaining chars from word;
- if true:
-- remove char from word;
-- continue the for loop;
- if false:
-- return false
end for loop
end function
test cases:

anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]

data structure:
array of strings

algorithm:
var result = [];
for each candidate in array:
- call function hasSameChars(candidate, word);
- if true:
-- add candidate to result array;
- if false:
-- do nothing
end for loop;

return result


hasSameChars:
var wordChars = word.split('');
var candidateChars = candidate.split('');

for each char in candidateChars:
- if wordChars.indexOf(char) in wordArray === -1 {
  return false;
}
- otherwise {
  wordChars.splice(indexOf(char), 1);
}

return true after the end of the loop;
*/

function anagram(word, list) {
  return list.filter(function (candidate) {
    return hasSameChars(candidate, word);
  });
}

// function hasSameChars(candidate, word) {
//   var candidateChars = candidate.split('');
//   var char;
//   var i;

//   for (i = 0; i < candidateChars.length; i += 1) {
//     char = candidateChars[i];
//     if (word.indexOf(char) === -1) {
//       return false;
//     } else {
//       word = word.replace(char, 1);
//     }
//   }


function hasSameChars(candidate, word) {
  var candidateChars = candidate.split('').sort();
  var wordChars = word.split('').sort();

  if (candidateChars.length !== wordChars.length) return false;

  return candidateChars.every(function (char, index) {
    return char === wordChars[index];
  });
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]

