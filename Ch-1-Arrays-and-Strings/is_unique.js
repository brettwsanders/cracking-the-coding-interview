//1.1
//Is Unique
//pg. 90

//Implement an algorithm to determine if a string has all unique characters.
//What if you cannot use additional data structures?

//Hints
//1. Try a hash table
//2. Could a bit vector be useful?
//3. Can you solve it in O(N log N) time? What might a solution like that look like?

//time complexity: O(n) 
//space complexity: O(c) where c is chars in chacter set (256 chars for ASCII, 128 for Unicode)
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

//time complexity: O(n^2)
//space complexity: O(1)
function isUniqueAlt(string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < string.length; j++) {
      if (string[i] === string[j]) {
        counter++;
        if (counter >= 2) {
          return false;
        }
      }
    }
    counter = 0;
  }
  return true;
}


console.log(isUnique('abcdefghijklmnopqrstuvwxyz1234567890'), 'should be true');





