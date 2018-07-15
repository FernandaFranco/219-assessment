/*
total square area:
input: array of arrays
output: number; the total area covered by the rectangles

rules:
nested arrays represent a rectangle: idx 0 is height and idx 1 is width

mental model:
take array of arrays as argument. for each reactangle, find the square area.
sum the areas and return.

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

[12, 36, 8, 81, 4]

totalArea(rectangles);    // 141

totalArea([[2,1]]);       // 2

data structures:
array

algorithm:

for each nested array:
transform array to array[0] * array[1] >>> map
end
assign transformed array to a var areas

reduce areas to the sum of areas
return sum
*/

function totalArea(rectangles) {
  var areas = rectangles.map(function (rectangle) {
    return rectangle[0] * rectangle[1];
  });

  return areas.reduce(function (total, area) {
    return total + area;
  });
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

console.log(totalArea([[2,1]]));       // 2

/*
input: array of rectangles again
output: total area of squares only

mental model:
for each rectangle, check if square. if true, add to squares array
call totalArea on squares array

test cases:
var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalSquareArea(rectangles);    // 121

algorithm:
filter rectangles array to contain only arrays where array[0] === array[1].
assign filtered array to squares var.
call totalArea with squares as argument and return its return value.
*/

function totalSquareArea(rectangles) {
  var squares = rectangles.filter(function (rectangle) {
    return rectangle[0] === rectangle[1];
  });

  return totalArea(squares);
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121

