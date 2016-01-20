//1.1
//Is Unique
//pg. 90

//Implement an algorithm to determine if a string has all unique characters.
//What if you cannot use additional data structures?

//Hints
//1. Try a hash table
//2. Could a bit vector be useful?
//3. Can you solve it in O(N log N) time? What might a solution like that look like?

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

function isUniqueAlt(string) {
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < string.length; j++) {

    }
  }
}