
// first task 

let m = [1, 55, 22, 22, 1, -2, 0, -123, 66, 22, 11];
// first task function
function bubbleSort(array) {
    let done = false;
    while (!done) {
        done = true;
        for (let i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false;
                let tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }

    return array;
}
console.log('task 1 :');
console.log(m);
console.log("min to max:");
console.log(bubbleSort(m));



// second task 

// second task function
m = [21, 1, -2, 0, -123, 66, -22, 10]
function bubbleSortReverse(array) {
    let done = false;
    while (!done) {
        done = true;
        for (let i = 1; i < array.length; i += 1) {
            if (array[i - 1] < array[i]) {
                done = false;
                let tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }

    return array;
}
console.log('task 2 :');
console.log(m);
console.log("max to min:");
console.log(bubbleSortReverse(m));




// third task 

m = [[56, 95, 88, 73, 29],
[72, 27, 10, 54, 20],
[91, 98, 38, 69, 28],
[97, 1, 39, 57, 60],
[10, 16, 6, 5, 50],
[65, 99, 15, 96, 55],
[35, 50, 46, 92, 61],
[30, 29, 50, 100, 81]]

//third task function sort into one array   
function bubbleSortNested(items) {
    let flat = [];
    for (let i = 0; i < items.length; i++) {
        flat = flat.concat(items[i]);
    }
    return bubbleSort(flat);
}
console.log('task 3 :');
console.log(m);
console.log('nested arrays into sorted array:')
console.log(bubbleSortNested(m));

//third task function sort into nested arrays   
function bubbleSortNested3(items) {
    let arr = [];
    let sortedNestedArray = [];
    arr = bubbleSortNested(items);
    let temparray, chunk = 5;

    for (let i = 0; i < arr.length; i += chunk) {
        temparray = arr.slice(i, i + chunk);
        sortedNestedArray.push(temparray);
    }
    return sortedNestedArray;
}
console.log('nested arrays into sorted nested arrays');
console.log(bubbleSortNested3(m));


//third task function each nested array 
function bubbleSortNested2(items) {
    let sorted = [];
    for (let i = 0; i < items.length; i++) {
        sorted.push(bubbleSort(items[i]));
    }
    return sorted;
}
console.log('each nested array sorted:');
console.log(bubbleSortNested2(m));