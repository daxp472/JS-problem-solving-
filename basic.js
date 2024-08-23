// Question 1: Print "Hello, World!"
function helloWorld() {
    console.log("Hello, World!");
}



// Question 2: Add Two Numbers
function sum(a, b) {
    return a + b;
}



// Question 3: Find the Largest Number
function findLargest(a, b, c) {
    return Math.max(a, b, c);
}



// Question 4: Check if a Number is Even or Odd
function isEven(num) {
    return num % 2 === 0;
}



// Question 5: Calculate the Factorial of a Number
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}



// Question 6: Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}



// Question 7: Check for Palindrome
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}



// Question 8: Find the Minimum Number in an Array
function findMin(arr) {
    return Math.min(...arr);
}



// Question 9: Sort an Array
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}



// Question 10: Check if a String Contains a Substring
function containsSubstring(str, substring) {
    return str.includes(substring);
}



// Question 11: Sum All Elements in an Array
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}



// Question 12: Generate Fibonacci Sequence
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}



// Question 13: Check if a Number is Prime
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}



// Question 14: Count the Number of Vowels in a String
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}



// Question 15: Find the Index of an Element in an Array
function findIndex(arr, element) {
    return arr.indexOf(element);
}



// Question 16: Remove Duplicates from an Array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}



// Question 17: Find the Intersection of Two Arrays
function findIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}



// Question 18: Check if Two Strings are Anagrams
function areAnagrams(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}



// Question 19: Capitalize the First Letter of Each Word
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}



// Question 20: Flatten a Nested Array
function flattenArray(arr) {
    return arr.flat(Infinity);
}



// Question 21: Generate a Random Number within a Range
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// Question 22: Check if a String is a Valid Email
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}



// Question 23: Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}



// Question 24: Remove a Specific Element from an Array
function removeElement(arr, element) {
    return arr.filter(el => el !== element);
}



// Question 25: Find the Second Largest Number in an Array
function secondLargest(arr) {
    let sorted = arr.sort((a, b) => b - a);
    return sorted[1];
}



// Question 26: Find the Longest Word in a String
function longestWord(str) {
    let words = str.split(' ');
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
}



// Question 27: Find the Missing Number in an Array
function findMissingNumber(arr) {
    let n = arr.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((acc, curr) => acc + curr, 0);
    return expectedSum - actualSum;
}



// Question 28: Calculate the GCD of Two Numbers
function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}
console.log(gcd(100, 20));



// Question 29: Calculate the LCM of Two Numbers
function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

console.log(lcm(12, 15)); 
console.log(lcm(7, 5));   


// Question 30: Check for Balanced Parentheses
function isBalanced(str) {
    let stack = [];
    for (let char of str) {
        if (char === '(') stack.push(char);
        else if (char === ')') {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
}



// Question 31: Rotate an Array
function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}
console.log(rotateArray([1, 2, 3, 4, 5], 2));