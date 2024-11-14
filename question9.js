// find the average value of a given numbers

function averageValue(arr) {
    let sum = 0;
    for(i=0; i<arr.length;i++) {
        sum += arr[i];
    }

    let average = sum / arr.length;
    return average;
}

const numbers = [2,6,9,3,7];
console.log(averageValue(numbers));
