const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

function printPair(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j])
        }
    }
}


printPair(arr)