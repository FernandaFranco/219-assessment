/*
formatting bands:
input: array of objects representing bands
output: fixed array of bands

requirements: fix the wrong information for each band.
- all bands' countries should be 'Canada';
- all bands' names should be capitalized;
- all bands' names should have no dots;

mental model: for each band, change the country name to 'Canada'. Also, capitalize
the band's name. At last, remove all dots.

examples:
var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

data structures:
iterating through objs in array
string manipulation

algorithm:
for each obj in data:
- obj[country] = 'Canada';
- obj[name] = capitalizeInitials(obj[name])
- obj[name] = obj[name].replace('.', '')
end

return data;

capitalizeInitials(name) {
  return name.replace(/\b[a-z]/g, function (letter) {
    return letter.toUpperCase();
  })
}
*/

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a. silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  var capitalized = function (letter) {
      return letter.toUpperCase();
  };

  return data.map(function (band) {
    return {
      name: band.name.replace(/\b[a-z]/g, capitalized).replace(/\./g, ''),
      country: 'Canada',
      active: band.active,
    };
  });
}


console.log(processBands(bands));
console.log(bands);

