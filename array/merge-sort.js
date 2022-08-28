function mergeSort(array1, array2) {
    const t0 = performance.now();
    const combinedArray = [...array1, ...array2]; // complexity n
    const sortedArray = combinedArray.sort((a, b) => a - b); // complexity log(n)
    console.log(sortedArray);
    console.log(performance.now() - t0);
}


function mergeSort2(array1, array2) {
    const sortedArray = [];
    
}

array1 = [0, 3, 5, 6];
array2 = [7, 8, 10, 11];


mergeSort(array1, array2);