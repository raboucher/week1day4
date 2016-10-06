/*

A very common implementation of callback functions is with
forEach which uses callbacks to allow us to easily iterate
through the elements of an array.

Read about iterating through elements of an array using
JavaScript's Array.prototype.forEach() method.

Refactor the function findWaldo to use the forEach() method
instead of a for loop.


function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

// Notice that index 2 is skipped since there is no item at
// that position in the array.
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
*/

function findWaldo(arr, found) {
  arr.forEach(function(elm, index) {
    if (elm === "Waldo"){
      found(index);
    };
  }
  )    // execute callback
}
function actionWhenFound(index) {
  console.log(`Found Waldo at index ${index}  !`);
}
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);