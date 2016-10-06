var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(currentValue, index, array){
   var xKey = currentValue["x"] * currentValue["x"];
   var yKey = currentValue["y"] * currentValue["y"];
   var zKey = xKey + yKey
   var rootZ = Math.sqrt(zKey);
    return rootZ;
})
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);