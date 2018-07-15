/*
bubble sort:

input: array of numbers or strings, containing at least 2 elements;
output: same array, but sorted;

requirements:
- multiple passes through the array;
- on each pass, compare 2 consecutive values;
- swap if needed;
- move to next 2 consecutive values;
- next comparison;
- repeat comparisons until end of array is reached;
- next pass;
- repeat passes until no swap was made;
- no need for a meaningful return value;


mental model: iterate through the array while swaps are being made; 2 loops

var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [1, 2, 3];
bubbleSort(array);
console.log(array);    // [1, 2, 3]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

data structure:
array

algorithm:
var swap = true;
while swap is true:
- set swap to false;
--for each element and its successor:
--- if element > successor:
---- swap them;
---- set swap to true;
--- end if;
--end for;
end while;

swap function:
takes array, idx of element, idx of successor;
temp = array[idx element];
array[idx element] = array[idx successor]
array[idx successor] = temp
*/

function bubbleSort(array) {
  var swapped = true;
  var i;

  while (swapped) {
    swapped = false;

    for (i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  }
}

function swap(array, elementIdx, successorIdx) {
  var temp = array[elementIdx];
  array[elementIdx] = array[successorIdx];
  array[successorIdx] = temp;
}

var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [1, 2, 3];
bubbleSort(array);
console.log(array);    // [1, 2, 3]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

