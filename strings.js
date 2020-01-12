str.charAt(); //returns a new string consisting of the character located at the specified index.

const str = 'Hello world!';
str.charAt(6); // “w”
//=======================

//str.concat() //concatenates the string arguments to the calling string and returns a new string.

let str1 = 'Hello';
let str2 = 'World';

str1.concat(' ', str2); //  "Hello World"
//=======================

str.startsWith(), str.endsWith(); //returns true or false depending if a string starts or ends with specified  characters

const str = 'Hello world!';

str.startsWith('h'); //true
str.endsWith('world!'); //true
//=======================

str.includes(); //returns true or false depending if a string is found included in another

const str = 'Hello world!';
str.includes('world'); //true
//=======================

str.indexOf(); //returns the index of the first occurrence of the specified value. Returns -1 if not found.

const str = 'Hello world!';
str.indexOf('o'); //4
//=======================

str.lastIndexOf(); //returns the index of the last occurrence of the specified value. Returns -1 if not found.

const str = 'Hello world!';
str.lastIndexOf('o'); //7
//=======================

str.padEnd(); //pads the current string at the end,with a given string (repeated, if needed) so that the resulting string reaches a given length.

const str = 'Hello world!';
str.padEnd('15', '!'); // "Hello world!!!!"
//=======================

str.padStart(); //pads the current string at the start with a given string (repeated, if needed) so that the resulting string reaches a given length.

const str = 'Hello world!';
str.padStart('15', '.'); // “…Hello world!"
//=======================

str.repeat(); //constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

const song = 'Let it be! ';
song.repeat(4); // “Let it be! Let it be! Let it be! Let it be! ”
//=======================

str.replace(); //returns a new string with some or all matches replaced by a replacement.

const str = 'Hello world!';
str.replace('world', 'universe'); //“Hello universe!"
//=======================

str.slice(); //extracts a section of a string and returns it as a new string, without modifying the original. Parameters are first place to slice, and 2nd place to slice.

const str = 'Hello world!';
str.slice(1, 5); // "ello"
str.slice(6); // “world”
str.slice(3, 8); // “lo wo”
//=======================

str.split(); //splits a string into an array of substrings, using a specified separator to determine where to make each split.

const sentence = 'The quick brown fox jumps over the lazy dog.';
let words = sentence.split(' '); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]
words[3]; // 'fox'
words.length; // 9
//=======================

str.toLowerCase(), str.toUpperCase(); //returns the calling string value converted to lower case, or upper case, respectively

const str = 'Hello world!';
str.toLowerCase(); // “hello world"
str.toUpperCase(); //“HELLO WORLD"
//=======================
