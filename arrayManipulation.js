// Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in your array. (NOT DONE)

// create a array the n zeros
// SOLVED BUT INEFFICIENT (fail at one millions value)

function arrayManipulation(n, queries) {

    let outputArray = Array(n + 1)
    let maxValue = 0

    for( let [start, end, value] of queries) {
        outputArray[start - 1] = outputArray[start - 1] || 0
        outputArray[end] = outputArray[end] || 0
        outputArray[start - 1] += value
        outputArray[end] -= value
    };
    let currentSum = 0
    outputArray = outputArray.slice(0, n)
    for (let i of outputArray) {
        console.log(outputArray)
        if (i) {
            currentSum += i
            maxValue = Math.max(currentSum, maxValue)
        }
    }
    return maxValue
}

console.log(arrayManipulation(5, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]
]))

// [[1, 2, 100],
//  [2, 5, 100],
//  [3, 4, 100]]

//  q[0][0]   q[0][1]  q[0][2]
//  q[1][0]   q[1][1]  q[1][2]
//  q[2][0]   q[2][1]  q[2][2]

