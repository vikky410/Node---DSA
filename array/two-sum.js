/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 **/


// brute force
// complexity n*n
function twoSum(array, target) {

    if (!array || array.length === 0) {
        return []
    }

    if (!target || target === 0) {
        console.log('Please input a valid target');
        return [];
    }

    const lengthofArray = array.length;

    for (let i = 0; i < lengthofArray; i++) {
        for (let j = i + 1; j < lengthofArray; j++) {
            if (array[i] + array[j] === target) {
                return [i, j];
            }
        }
    }

    return [];
}



function twoSum2(array, target) {
    const map = {};

    const arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        const value = array[i];
        const complemenPair = target - value;
        if (map[complemenPair] !== undefined) {
            return [map[complemenPair], i];
        } else {
            map[value] = i;
        }

    }

    return [];
}




const nums = [0, 4, 3, 0];
const target = 0;

console.log(twoSum2(nums, target));