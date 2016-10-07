var map = function(arr, _cb) {
  var new_map = [];
  for(var i = 0; i < arr.length; i++) {
    var curr_arr = arr[i];
    var new_arr = _cb(curr_arr);
    new_map.push(new_arr);
  }
  return new_map;
}
var mapCall = map(["ground", "control", "to", "major", "tom"], (elm) => { return elm.length });
console.log(mapCall);