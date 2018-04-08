// is Unique: Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?

// Solution: 
// Ask the interviewer if the string is a Unicode String or an ASCII string. 
// Unicode - A computing industry standard for the consistent encoding, representation, and handling of text expressed in most of the world's writing systems. 136,755 characters.
// UTF-8 is the encoding used by 90% of websites. Uses one bytw for the first 128 code points, and up to 4 bytes for other characters. The first 128
//  Unicode points are the ASCII characters. 

'use strict'; //a literal expression that indicates the code should be executed in strict mode. -> No undeclared variables, 

function isUnique(str) {
    var i, ch; 

    var len = str.length; //.length is the built-in length checker for a string
    if (len > 127) { //
        return false;
    }
    for (i = 0; i < len; i++) {
        ch = str[i];
        // console.log('String at i: ', str[i]);
        if(str.indexOf(ch, i + 1) > -1) { //The indexOf build-in javaScript method returns the position of the first occurrence of a specified value in a string
            return false; //The indexOf method returns -1 if the value to search for never occurs
        }
    }
    return true; 
}
console.log(isUnique('bar')); //true
console.log(isUnique('foo')); //false 

console.time('isUnique()');
isUnique('bar');
console.timeEnd('isUnique()')


//Time complexity O(n) -> where n is the string length 
// Space complexity -> O(1) -> constant