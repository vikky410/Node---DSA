
function mergeSort(array1, array2) {
    const t0 = performance.now();
    const combinedArray = [...array1, ...array2]; // complexity n
    const sortedArray = combinedArray.sort((a, b) => a - b); // complexity log(n)
    console.log(sortedArray);
    console.log(performance.now() - t0);
}

// complexity n
function mergeSort2(array1, array2) {
    const t0 = performance.now();
    const sortedArray = [];
    index1 = 0;
    index2 = 0;
    current = 0;

    if (!array1 || array1.length === 0) {
        return array2;
    }

    if (!array2 || array2.length === 0) {
        return array1;
    }

    while (current < (array1.length + array2.length)) {
        isArray1Depleted = index1 >= array1.length;
        isArray2Depleted = index2 >= array2.length;

        if (!isArray1Depleted && (isArray2Depleted || array1[index1] < array2[index2])) {
            sortedArray[current] = array1[index1];
            index1++;
        } else {
            sortedArray[current] = array2[index2];
            index2++;
        }

        current++;
    }

    console.log(sortedArray);
    console.log(performance.now() - t0);
}

var merge = function(nums1, m, nums2, n) {
    const sortedArray = [];
    let index1 = 0;
    let index2 = 0;
    let currentIndex = 0;
    const lengthOfArray = m + n;

    if (!m) {
        nums1 = nums2;
        return nums1;
    }

    if (!n) {
        return nums1;
    }

    while (currentIndex < lengthOfArray) {
        const isNum1Depleted = index1 >= m;
        const isNum2Depleted = index2 >= n;
        if (!isNum1Depleted && (isNum2Depleted || nums1[index1] < nums2[index2])) {
            sortedArray[currentIndex] = nums1[index1];
            index1++;
        } else {
            sortedArray[currentIndex] = nums2[index2];
            index2++;
        }

        currentIndex++;
    }

    nums1 = sortedArray;
    console.log(nums1);
};

array1 = [0, 3, 5, 7, 9, 10];
array2 = [3, 6, 8];

const num1 = [1, 2, 3, 0, 0, 0];
const num2 = [2, 5, 6];

merge(num1, 3, num2, 3);