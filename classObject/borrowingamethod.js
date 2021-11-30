let map = {one: true, two: true, hasOwnProperty: true};

//console.log(map.hasOwnProperty("one"));
console.log(hasOwnProperty.call(map, 'one'));