// Import the required module from Immutable.js library
const { fromJS, Map } = require('immutable');

// Define the function that converts the object to an immutable Map
function getImmutableObject(object) {
  // Use the fromJS function to convert the object to an immutable Map
  return fromJS(object);
}

// Example object
const exampleObject = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

// Convert the example object to an immutable Map using the function
const immutableMap = getImmutableObject(exampleObject);

// Print the resulting immutable Map
console.log(immutableMap);
