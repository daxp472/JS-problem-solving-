// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // "olleh"



// 2. Check if a String is a Palindrome
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false



// 3. Count the Number of Vowels in a String
function countVowels(str) {
    return str.match(/[aeiou]/gi)?.length || 0;
}
console.log(countVowels("hello world")); // 3



// 4. Find the First Non-Repeated Character in a String
function firstNonRepeatedCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return null;
}
console.log(firstNonRepeatedCharacter("swiss")); // "w"



// 5. Count the Number of Words in a String
function countWords(str) {
    return str.trim().split(/\s+/).length;
}
console.log(countWords("This is a test string")); // 5



// 6. Check if Two Strings are Anagrams
function areAnagrams(str1, str2) {
    const sorted1 = str1.split('').sort().join('');
    const sorted2 = str2.split('').sort().join('');
    return sorted1 === sorted2;
}
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false



// 7. Replace All Spaces in a String with Hyphens
function replaceSpaces(str) {
    return str.replace(/ /g, '-');
}
console.log(replaceSpaces("Hello World")); // "Hello-World"



// 8. Convert a String to Title Case
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(toTitleCase("this is a test string")); // "This Is A Test String"



// 9. Check if a String Contains Only Digits
function isNumeric(str) {
    return /^\d+$/.test(str);
}
console.log(isNumeric("12345")); // true
console.log(isNumeric("123a5")); // false



// 10. Remove Duplicates Characters from a String
function removeDuplicates(str) {
    return [...new Set(str)].join('');
}
console.log(removeDuplicates("programming")); // "progamin"



// 11. Find the Longest Word in a String
function findLongestWord(str) {
    const words = str.split(' ');
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // "jumped"



// 12. Capitalize the First Letter of Each Word in a String
function capitalizeFirstLetters(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeFirstLetters("javascript is fun")); // "Javascript Is Fun"



// 13. Repeat a String N Times
function repeatString(str, num) {
    return str.repeat(num);
}
console.log(repeatString("abc", 3)); // "abcabcabc"



// 14. Check if a String Contains a Substring
function containsSubstring(str, substring) {
    return str.includes(substring);
}
console.log(containsSubstring("hello world", "world")); // true
console.log(containsSubstring("hello world", "planet")); // false



// 15. Convert a String to an Array of Words
function stringToWords(str) {
    return str.trim().split(/\s+/);
}
console.log(stringToWords("This is a test")); // ["This", "is", "a", "test"]



// 16. Truncate a String
function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
}
console.log(truncateString("This is a long string", 10)); // "This is a..."



// 17. Check if a String Starts with a Specific Substring
function startsWith(str, substring) {
    return str.startsWith(substring);
}
console.log(startsWith("hello world", "hello")); // true
console.log(startsWith("hello world", "world")); // false



// 18. Check if a String Ends with a Specific Substring
function endsWith(str, substring) {
    return str.endsWith(substring);
}
console.log(endsWith("hello world", "world")); // true
console.log(endsWith("hello world", "hello")); // false



// 19. Insert a Substring at a Specific Position in a String
function insertSubstring(str, substring, index) {
    return str.slice(0, index) + substring + str.slice(index);
}
console.log(insertSubstring("Hello World", "Beautiful ", 6)); // "Hello Beautiful World"



// 20. Remove All Instances of a Substring
function removeSubstring(str, substring) {
    return str.split(substring).join('');
}
console.log(removeSubstring("This is a test. This is only a test.", "test")); // "This is a . This is only a ."

