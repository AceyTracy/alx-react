// Import the necessary module using CommonJS syntax
const Immutable = require('immutable');

// Create the getImmutableObject function
function getImmutableObject(object) {
  // Convert the object into an immutable Map
  const immutableMap = Immutable.fromJS(object);

  return immutableMap;
}

// Example input object
const inputObject = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

// Call the function with the example input object
const result = getImmutableObject(inputObject);

console.log(result); // Print the resulting immutable Map

