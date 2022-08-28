function reverse(str) {
    // convert string to array
    const stringArray = str.split(' ');
    const revserseStringArray = [];

    if (stringArray && stringArray.length) {
        for (let i = stringArray.length - 1; i >= 0; i--) {
            let reversedItem = '';
            // item starting from end
            const item = stringArray[i];
            // reverse item
            const splitItemArray = item.split('');
            if (splitItemArray && splitItemArray.length) {
                for (j = splitItemArray.length - 1; j >= 0; j--) {
                    reversedItem += splitItemArray[j];
                }
            }
            revserseStringArray.push(reversedItem);
        }
    } else {
        return str;
    }

    const resverseString = revserseStringArray.join(' ');
    console.log(resverseString);
}


function revserse2(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        console.lo('Not a valid string to reverse');
        return;
    }

    const backwardArray = [];

    for (let i = str.length - 1; i >= 0; i--) {
        backwardArray.push(str[i]);
    }

    const reverseString = backwardArray.join('');
    console.log(reverseString);
}


function revserse3(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        console.lo('Not a valid string to reverse');
        return;
    }

    const reverseString = str.split('').reverse().join('');
    console.log(reverseString);
}


const stringVal = 'Hi My Name Is Vikas';
revserse3(stringVal)