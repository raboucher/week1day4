/*

Did you know that we can pass results via callback functions?

Modify the callback function in the previous example so that
ogs the index of the array where Waldo is found, ie.
"Found Waldo at index 3!". (You will need to modify
  actionWhenFound to receive the index.)
Once you have this working, remember to commit your changes
using Git. A good commit message should be concise and
descriptive of the changes you have made. An example commit
message: Print the index of Waldo when found.

*/

// The second argument/parameter is expected to be a function


function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    debugger;
    if (arr[i] == "Waldo") {
      found(i);   // execute callback
    }
  }
}


function actionWhenFound(index) {
  console.log(`Found Waldo at index ${index}  !`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
