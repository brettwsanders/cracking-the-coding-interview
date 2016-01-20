//Is Unique
//Implement an algorithm to determine if a string has all unique characters.
//What if you cannot use additional data structures?

function isUnique(string) {
  var chars = {};
  for (var i = 0; i < string.length; i++) {
    if (string[i] in chars) {
      return false;
    }
    chars[string[i]] = true;
  }
  return true;
}

// function isUniqueAlt(string) {
//   for (var i = 0; i < string.length; i++) {
//     for (var j = 0; j < string.length; j++) {
      
//     }
//   }
// }