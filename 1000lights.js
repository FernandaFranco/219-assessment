/*
input: positive number of switches: n
output: list of switches that are on after toggling switches a n amount of times
requirements:
toggle n switches n times:
- 1st round: toggle every switch that is a multiple of 1;
- 2nd round: toggle every switch that is a multiple of 2;
- 3rd round: toggle every switch that is a multiple of 3;
- nth round: toggle every switch that is a multiple of n;

n iterations

array of states: true (on) and false (off)
each switch number === index + 1

map array of states -> if true, transform to index + 1
filter: removing false elements
return array

data structures:
array of booleans

test cases:
lightsOn(1) \\ [1]
lightsOn(2) \\ [1]
lightsOn(5) \\ [1, 4]
lightsOn(100) \\ [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

algorithm:
create a statesArray with n elements false;

for i from 1 to n, inclusive:
  for each element and index:
    switchNumber = index + 1;
    if switchNumber % i === 0:
    - element = !element;
  end forEach
end for loop

map statesArray:
if true, return index + 1
end map

filter statesArray:
return element if not false;
end filter

return filteredArray;
*/

function lightsOn(switches) {
  var states = [];
  var i;

  for (i = 0; i < switches; i += 1) {
    states[i] = false;
  }

  states = toggle(states, switches);

  return states.map(function (state, index) {
    if (state) {
      return index + 1;
    }

    return state;
  }).filter(function (element) {
    return element;
  });
}

function toggle(states, switches) {
  var round;
  for (round = 1; round <= switches; round += 1) {
    states = states.map(function (state, index) {
      var switchNumber = index + 1;

      if (switchNumber % round === 0) {
        state = !state;
      }

      return state;
    });
  }

  return states;
}

console.log(lightsOn(1)); // [1]
console.log(lightsOn(2)); // [1]
console.log(lightsOn(5)); // [1, 4]
console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

