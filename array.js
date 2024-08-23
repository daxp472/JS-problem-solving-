// 1. Sum All Elements in an Array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15



// 2. Find the Largest Number in an Array
function findLargest(arr) {
    return Math.max(...arr);
}
console.log(findLargest([1, 5, 3, 9, 2])); // Output: 9



// 3. Find the Smallest Number in an Array
function findSmallest(arr) {
    return Math.min(...arr);
}
console.log(findSmallest([1, 5, 3, 9, 2])); // Output: 1



// 4. Sort an Array in Ascending Order
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(sortArray([5, 2, 9, 1, 5, 6])); // Output: [1, 2, 5, 5, 6, 9]



// 5. Sort an Array in Descending Order
function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}
console.log(sortArrayDescending([5, 2, 9, 1, 5, 6])); // Output: [9, 6, 5, 5, 2, 1]



// 6. Reverse an Array
function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]



// 7. Check if an Array Contains a Specific Element
function containsElement(arr, element) {
    return arr.includes(element);
}
console.log(containsElement([1, 2, 3, 4, 5], 3)); // Output: true



// 8. Find the Index of a Specific Element in an Array
function findIndex(arr, element) {
    return arr.indexOf(element);
}
console.log(findIndex([1, 2, 3, 4, 5], 3)); // Output: 2



// 9. Remove Duplicates from an Array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]



// 10. Merge Two Arrays
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]



// 11. Find the Intersection of Two Arrays
function findIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}
console.log(findIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]



// 12. Find the Union of Two Arrays
function findUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
console.log(findUnion([1, 2, 3], [2, 3, 4])); // Output: [1, 2, 3, 4]



// 13. Check if an Array is Sorted
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(isSorted([1, 2, 3, 4, 5])); // Output: true



// 14. Find the Difference of Two Arrays
function findDifference(arr1, arr2) {
    return arr1.filter(value => !arr2.includes(value));
}
console.log(findDifference([1, 2, 3], [2, 3, 4])); // Output: [1]



// 15. Rotate an Array by K Positions
function rotateArray(arr, k) {
    k = k % arr.length; // Handle rotation greater than array length
    return arr.slice(-k).concat(arr.slice(0, -k));
}
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]



// 16. Find the Maximum Difference Between Two Elements in an Array
function maxDifference(arr) {
    let min = arr[0];
    let maxDiff = arr[1] - arr[0];
    for (let i = 1; i < arr.length; i++) {
        maxDiff = Math.max(maxDiff, arr[i] - min);
        min = Math.min(min, arr[i]);
    }
    return maxDiff;
}
console.log(maxDifference([2, 3, 10, 6, 4, 8, 1])); // Output: 8



// 17. Find the Second Largest Element in an Array
function secondLargest(arr) {
    let largest = -Infinity;
    let second = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second && num < largest) {
            second = num;
        }
    }
    return second;
}
console.log(secondLargest([1, 2, 3, 4, 5])); // Output: 4



// 18. Find the Pair of Elements with the Maximum Sum in an Array
function maxSumPair(arr) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    for (let num of arr) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
    }
    return [max2, max1];
}
console.log(maxSumPair([1, 2, 3, 4, 5])); // Output: [4, 5]



// 19. Find the Pair of Elements with the Minimum Sum in an Array
function minSumPair(arr) {
    let min1 = Infinity;
    let min2 = Infinity;
    for (let num of arr) {
        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    }
    return [min1, min2];
}
console.log(minSumPair([1, 2, 3, 4, 5])); // Output: [1, 2]



// 20. Move All Zeros to the End of an Array
function moveZeros(arr) {
    let nonZero = arr.filter(num => num !== 0);
    let zeroCount = arr.length - nonZero.length;
    return [...nonZero, ...Array(zeroCount).fill(0)];
}
console.log(moveZeros([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]



// 21. Count the Frequency of Each Element in an Array
function countFrequency(arr) {
    return arr.reduce((freq, num) => {
        freq[num] = (freq[num] || 0) + 1;
        return freq;
    }, {});
}
console.log(countFrequency([1, 2, 2, 3, 3, 3])); // Output: {1: 1, 2: 2, 3: 3}



// 22. Find the Most Frequent Element in an Array
function mostFrequent(arr) {
    let frequency = countFrequency(arr);
    return Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
}
console.log(mostFrequent([1, 2, 2, 3, 3, 3])); // Output: 3



// 23. Find the Longest Increasing Subsequence in an Array
function lan(arr) {
    let lis = Array(arr.length).fill(1);
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
                lis[i] = lis[j] + 1;
            }
        }
    }
    let maxLength = Math.max(...lis);
    let sequence = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (lis[i] === maxLength) {
            sequence.unshift(arr[i]);
            maxLength--;
        }
    }
    return sequence;
}
console.log(lan([10, 22, 9, 33, 21, 50, 41, 60, 80])); // Output: [10, 22, 33, 50, 60, 80]



// 24. Remove All Occurrences of a Specific Element from an Array
function removeOccurrences(arr, element) {
    return arr.filter(num => num !== element);
}
console.log(removeOccurrences([1, 2, 3, 4, 5, 2], 2)); // Output: [1, 3, 4, 5]


