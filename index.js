// find the missing number in the given array

function findMissingNumber(arr) {
    const n = arr.length + 1;
    let expectedSum = 0;
    let totalSum = 0;

    for(i = 0; i <= n;i++){
        expectedSum += i;
    }

    for(i = 0;i < arr.length;i++) {
        totalSum += arr[i];
    }
    return expectedSum - totalSum
}

const arr = [1,2,3,4,6]
console.log(findMissingNumber(arr));